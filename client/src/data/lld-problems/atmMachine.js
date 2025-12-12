export const atmMachineProblem = {
    id: 'atm-machine',
    title: 'Design an ATM Machine',
    difficulty: 'Medium',
    companies: ['Goldman Sachs', 'JP Morgan', 'Capital One', 'Visa', 'Mastercard', 'Amazon'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design an ATM machine that allows users to perform banking operations like cash withdrawal, balance inquiry, PIN change, and fund transfer. The system should handle authentication, transaction processing, cash dispensing with optimal denomination, and receipt generation.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Card Authentication', text: 'Validate ATM card and verify PIN with limited retry attempts (3 tries).' },
                { label: 'Balance Inquiry', text: 'Display current account balance after authentication.' },
                { label: 'Cash Withdrawal', text: 'Dispense cash in optimal denominations (100, 500, 2000 notes).' },
                { label: 'Cash Deposit', text: 'Accept cash deposits with note counting and validation.' },
                { label: 'Fund Transfer', text: 'Transfer funds between accounts with validation and limits.' },
                { label: 'PIN Change', text: 'Allow users to change their PIN securely.' },
                { label: 'Receipt Generation', text: 'Print transaction receipt with details and remaining balance.' },
                { label: 'Transaction Limits', text: 'Enforce daily withdrawal limits and per-transaction limits.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Security', text: 'Secure PIN handling, session timeout, and card retention for invalid attempts.' },
                { label: 'Atomicity', text: 'Transactions must be atomic - complete fully or rollback entirely.' },
                { label: 'Cash Management', text: 'Track cash inventory and prevent dispensing when low.' },
                { label: 'Availability', text: 'ATM should be highly available with graceful degradation.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use State pattern for ATM states (IDLE, CARD_INSERTED, PIN_ENTERED, TRANSACTION_SELECTED, DISPENSING).',
                'Implement Chain of Responsibility for cash dispensing with different denominations.',
                'Apply Command pattern for different transaction types.',
                'Design Singleton pattern for ATM controller.',
                'Use Strategy pattern for different authentication methods (PIN, biometric).',
                'Handle edge cases: insufficient funds, ATM out of cash, card stuck.',
                'Implement proper session management with timeout.',
                'Design for concurrent access to shared bank account from multiple ATMs.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // ATM Machine System
        // Core: ATM, Card, Account, Transaction, CashDispenser, Receipt
        
    }
}`
    }
};
