export const blackjackProblem = {
    id: 'blackjack',
    title: 'Design Blackjack Card Game',
    difficulty: 'Easy',
    companies: ['Amazon', 'Google', 'Bloomberg'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a Blackjack card game that can be played between a player and dealer. Handle deck management, card dealing, hit/stand decisions, hand value calculation with Ace handling, and win/lose/bust/blackjack outcomes.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Deck Management', text: 'Create, shuffle, and deal from a standard 52-card deck.' },
                { label: 'Card Dealing', text: 'Deal initial 2 cards to player and dealer (one dealer card hidden).' },
                { label: 'Player Actions', text: 'Support Hit (take card), Stand (end turn), Surrender options.' },
                { label: 'Hand Calculation', text: 'Calculate hand value with Ace as 1 or 11 optimally.' },
                { label: 'Bust Detection', text: 'Player busts if hand value exceeds 21.' },
                { label: 'Dealer Rules', text: 'Dealer must hit on 16 or less, stand on 17 or more.' },
                { label: 'Game Outcomes', text: 'Determine Blackjack, Win, Lose, Push (tie), Bust.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Fairness', text: 'Cards dealt randomly with no bias.' },
                { label: 'Extensibility', text: 'Easy to add features like split, double down, insurance.' },
                { label: 'Multiple Players', text: 'Design should support multiple players at table.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Design proper class hierarchy: Card, Deck, Hand, Player, Dealer.',
                'Use Strategy pattern for different player strategies (AI, human).',
                'Implement State pattern for game states (BETTING, DEALING, PLAYING, ENDED).',
                'Handle Ace value calculation (switch from 11 to 1 to avoid bust).',
                'Apply Factory pattern for creating game instances.',
                'Handle edge cases: multiple Aces, empty deck, split hands.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Blackjack Card Game
        // Core: Card, Deck, Hand, Player, Dealer, Game
        
    }
}`
    }
};
