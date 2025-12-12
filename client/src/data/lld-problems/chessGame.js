export const chessGameProblem = {
    id: 'chess-game',
    title: 'Design a Chess Game',
    difficulty: 'Medium',
    companies: ['Google', 'Amazon', 'Microsoft', 'Goldman Sachs', 'Uber'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a two-player chess game with all standard chess rules. The system should validate moves, detect check/checkmate/stalemate conditions, and maintain game state. Support both local play and the foundation for online multiplayer.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Board Setup', text: 'Initialize an 8x8 board with all 32 pieces in their standard starting positions.' },
                { label: 'Piece Movement', text: 'Each piece type (King, Queen, Rook, Bishop, Knight, Pawn) has unique movement rules.' },
                { label: 'Move Validation', text: 'Validate moves based on piece rules, board boundaries, and blocking pieces.' },
                { label: 'Special Moves', text: 'Support castling, en passant, and pawn promotion.' },
                { label: 'Check Detection', text: 'Detect when a King is in check and prevent illegal moves that leave King in check.' },
                { label: 'Game End', text: 'Detect checkmate, stalemate, and draw conditions (threefold repetition, 50-move rule).' },
                { label: 'Move History', text: 'Track all moves for undo functionality and game replay.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Extensibility', text: 'Easy to add new game variants or custom rules.' },
                { label: 'Performance', text: 'Move validation should be fast for AI integration.' },
                { label: 'Testability', text: 'Each component should be independently testable.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use inheritance hierarchy for Piece types with abstract base class.',
                'Apply Strategy pattern for different piece movement algorithms.',
                'Implement Command pattern for move execution and undo.',
                'Use Observer pattern to notify UI of game state changes.',
                'Design immutable game state for easy state management.',
                'Handle all edge cases: castling through check, en passant timing, promotion choices.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Chess Game Implementation
        // Key classes: Board, Piece (abstract), King, Queen, Rook, Bishop, Knight, Pawn
        // Game, Player, Move
        
    }
}`
    }
};
