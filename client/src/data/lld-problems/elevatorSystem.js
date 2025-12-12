export const elevatorSystemProblem = {
    id: 'elevator-system',
    title: 'Design an Elevator System',
    difficulty: 'Medium',
    companies: ['Google', 'Microsoft', 'Amazon', 'Uber'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design an elevator system for a building with multiple floors and multiple elevators. The system should efficiently handle requests from different floors and optimize elevator movement.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Multiple Elevators', text: 'Support multiple elevators operating independently in the same building.' },
                { label: 'Floor Requests', text: 'Handle requests from users on different floors wanting to go up or down.' },
                { label: 'Cabin Requests', text: 'Handle requests from inside the elevator to go to a specific floor.' },
                { label: 'Door Operations', text: 'Manage door open/close operations with safety checks.' },
                { label: 'Display Status', text: 'Show current floor and direction of each elevator.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Optimization', text: 'Minimize wait time and travel time for passengers.' },
                { label: 'Scalability', text: 'System should handle buildings with varying number of floors and elevators.' },
                { label: 'Thread Safety', text: 'Handle concurrent requests from multiple floors safely.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Implement elevator scheduling algorithm (SCAN, LOOK, or custom).',
                'Use State pattern for elevator states (IDLE, MOVING_UP, MOVING_DOWN, DOOR_OPEN).',
                'Apply Strategy pattern for different scheduling algorithms.',
                'Demonstrate proper use of SOLID principles.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Start your implementation here
        
    }
}`
    }
};
