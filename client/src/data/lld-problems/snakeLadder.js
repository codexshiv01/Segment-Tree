export const snakeLadderProblem = {
    id: 'snake-ladder',
    title: 'Design Snake and Ladder Game',
    difficulty: 'Medium',
    companies: ['Google', 'Goldman Sachs', 'Atlassian', 'Adobe'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a Snake and Ladder game that supports multiple players. The game should handle dice rolls, player movements, and game completion with proper win conditions.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Board Setup', text: 'Create a board with configurable size, snakes, and ladders.' },
                { label: 'Multiple Players', text: 'Support 2 or more players taking turns.' },
                { label: 'Dice Rolling', text: 'Simulate dice roll and move players accordingly.' },
                { label: 'Snake/Ladder Logic', text: 'Handle snake (move down) and ladder (move up) encounters.' },
                { label: 'Win Condition', text: 'Detect when a player reaches or exceeds the final position.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Fairness', text: 'Ensure random dice rolls are truly random.' },
                { label: 'Configurability', text: 'Allow customization of board size and snake/ladder positions.' },
                { label: 'Extensibility', text: 'Easy to add new game elements like power-ups or obstacles.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use proper OOP to model Board, Player, Dice, Snake, and Ladder.',
                'Implement game loop with turn management.',
                'Apply Single Responsibility Principle for each component.',
                'Handle edge cases like exact landing and multiple snakes/ladders.'
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
