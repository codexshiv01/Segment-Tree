export const ticTacToeProblem = {
    id: 'tic-tac-toe',
    title: 'Design Tic-Tac-Toe Game',
    difficulty: 'Easy',
    companies: ['Google', 'Amazon', 'Meta', 'Microsoft', 'Apple'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a flexible Tic-Tac-Toe game that supports the classic 3x3 board but can be extended to NxN boards. The system should handle player turns, validate moves, detect win conditions, and support both human and AI players.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Board Initialization', text: 'Create a configurable NxN game board (default 3x3).' },
                { label: 'Player Management', text: 'Support two players with unique symbols (X, O) and track whose turn it is.' },
                { label: 'Move Validation', text: 'Validate moves are within bounds and on empty cells.' },
                { label: 'Win Detection', text: 'Check for win conditions: row, column, and diagonal matches.' },
                { label: 'Draw Detection', text: 'Detect when the board is full with no winner.' },
                { label: 'Game Reset', text: 'Allow restarting the game while tracking win statistics.' },
                { label: 'Undo Move', text: 'Support undoing the last move for practice games.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Extensibility', text: 'Easy to extend for larger boards or variants like Connect-4.' },
                { label: 'AI Support', text: 'Design should allow plugging in AI players (minimax algorithm).' },
                { label: 'Performance', text: 'Win detection should be O(1) or O(N) not O(N²).' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Design efficient O(1) win checking using row/column/diagonal counters.',
                'Use Strategy pattern for different player types (Human, AI).',
                'Implement Command pattern for move history and undo functionality.',
                'Apply Interface Segregation: separate Board, GameRules, WinChecker.',
                'Consider multiplayer extension with Player abstraction.',
                'Design clean separation between game logic and UI/display.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Tic-Tac-Toe Game
        // Core: Board, Player, Game, Move, WinChecker
        
    }
}`
    }
};
