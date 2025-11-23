import React from 'react';

const ActivityHeatmap = ({ activity }) => {
    // Process activity data into a grid of weeks
    const getHeatmapData = () => {
        const today = new Date();
        const oneYearAgo = new Date(today);
        oneYearAgo.setDate(today.getDate() - 364);

        const dataMap = {};
        activity.forEach(item => {
            const date = new Date(item.activity_date);
            const key = date.toISOString().split('T')[0];
            dataMap[key] = item.problems_count;
        });

        const weeks = [];
        let currentDate = new Date(oneYearAgo);

        while (currentDate <= today) {
            const weekStart = new Date(currentDate);
            const week = [];

            for (let i = 0; i < 7; i++) {
                const dayDate = new Date(currentDate);
                const key = dayDate.toISOString().split('T')[0];
                const count = dataMap[key] || 0;

                week.push({
                    date: dayDate,
                    count: count,
                    level: getLevel(count)
                });

                currentDate.setDate(currentDate.getDate() + 1);
            }

            weeks.push(week);
        }

        return weeks;
    };

    const getLevel = (count) => {
        if (count === 0) return 0;
        if (count <= 2) return 1;
        if (count <= 4) return 2;
        if (count <= 6) return 3;
        return 4;
    };

    const getLevelColor = (level) => {
        const colors = [
            'bg-slate-100',       // No activity
            'bg-green-200',       // Low
            'bg-green-400',       // Medium
            'bg-green-600',       // High
            'bg-green-700'        // Very High
        ];
        return colors[level];
    };

    const weeks = getHeatmapData();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div>
            <div className="overflow-x-auto">
                <div className="inline-flex flex-col gap-1">
                    {/* Day labels */}
                    <div className="flex gap-1 ml-12">
                        {months.map((month, i) => (
                            <div key={i} className="text-xs text-slate-600 w-10">
                                {i % 2 === 0 ? month : ''}
                            </div>
                        ))}
                    </div>

                    {/* Activity grid */}
                    <div className="flex gap-1">
                        <div className="flex flex-col gap-1 text-xs text-slate-600 justify-around pr-2">
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                        </div>

                        <div className="flex gap-1">
                            {weeks.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {week.map((day, dayIndex) => (
                                        <div
                                            key={dayIndex}
                                            className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)} hover:ring-2 hover:ring-primary transition-all cursor-pointer border border-slate-200`}
                                            title={`${day.date.toLocaleDateString()}: ${day.count} problems`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-2 mt-4 text-xs text-slate-600">
                        <span>Less</span>
                        {[0, 1, 2, 3, 4].map(level => (
                            <div key={level} className={`w-3 h-3 rounded-sm ${getLevelColor(level)} border border-slate-200`} />
                        ))}
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityHeatmap;
