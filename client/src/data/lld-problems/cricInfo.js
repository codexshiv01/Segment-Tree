export const cricInfoProblem = {
    id: 'cricinfo',
    title: 'Design Cricinfo/Cricbuzz',
    difficulty: 'Hard',
    companies: ['Hotstar', 'Dream11', 'Google', 'Amazon', 'Microsoft'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a cricket scoring and live match tracking system like Cricinfo or Cricbuzz. The system should handle live score updates, ball-by-ball commentary, player statistics, match scheduling, and team management.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Match Management', text: 'Create and manage matches with teams, venue, format (T20, ODI, Test), and toss details.' },
                { label: 'Live Scoring', text: 'Record ball-by-ball updates with runs, wickets, extras, and bowling details.' },
                { label: 'Score Calculation', text: 'Auto-calculate totals, run rates, required rates, and projected scores.' },
                { label: 'Player Stats', text: 'Track batting (runs, average, strike rate) and bowling (wickets, economy) statistics.' },
                { label: 'Commentary', text: 'Add ball-by-ball commentary with text and optional video highlights.' },
                { label: 'Innings Management', text: 'Handle innings transitions, declarations, and follow-ons.' },
                { label: 'Match Result', text: 'Determine winner, margin of victory, and player of the match.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Real-Time', text: 'Live updates should be reflected within seconds across all clients.' },
                { label: 'High Concurrency', text: 'Handle millions of concurrent viewers during popular matches.' },
                { label: 'Data Consistency', text: 'Scores must be accurate and consistent across all platforms.' },
                { label: 'Historical Data', text: 'Maintain complete match and player history for analytics.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Design proper class hierarchy: Match, Innings, Over, Ball, Team, Player.',
                'Use Observer pattern for real-time score updates to subscribers.',
                'Implement State pattern for match states (NOT_STARTED, LIVE, INNINGS_BREAK, COMPLETED).',
                'Apply Composite pattern for tournament -> series -> match hierarchy.',
                'Handle edge cases: super over, DLS method, no-balls, wide retakes.',
                'Design efficient data models for quick statistics retrieval.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Cricinfo System
        // Core: Match, Team, Player, Innings, Over, Ball, ScoreBoard
        
    }
}`
    }
};
