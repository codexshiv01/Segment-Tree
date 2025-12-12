export const walletSystemProblem = {
    id: 'wallet-system',
    title: 'Design Digital Wallet System',
    difficulty: 'Hard',
    companies: ['Flipkart', 'Paytm', 'PhonePe', 'Google Pay', 'Amazon Pay'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a digital wallet system like Paytm or PhonePe that allows users to add money, make payments, transfer funds to other users, and view transaction history. The system should handle refunds, cashback, and ensure transaction integrity.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Wallet Creation', text: 'Create wallet linked to user account with configurable limits.' },
                { label: 'Add Money', text: 'Add funds via bank transfer, card, or UPI with verification.' },
                { label: 'Payments', text: 'Pay merchants and billers using wallet balance or linked sources.' },
                { label: 'P2P Transfer', text: 'Send money to other users with optional message.' },
                { label: 'Transaction History', text: 'View all transactions with filtering and search.' },
                { label: 'Refunds', text: 'Process refunds for cancelled orders back to wallet.' },
                { label: 'Cashback & Rewards', text: 'Apply promotional cashback and reward points.' },
                { label: 'Withdrawal', text: 'Withdraw funds to linked bank account.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'ACID Compliance', text: 'Transactions must be atomic - complete or rollback fully.' },
                { label: 'Idempotency', text: 'Duplicate requests should not cause double charges.' },
                { label: 'Security', text: 'PIN/biometric authentication for transactions.' },
                { label: 'Audit Trail', text: 'Complete immutable log of all transactions.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Unit of Work pattern for transaction management.',
                'Apply Strategy pattern for different payment methods.',
                'Implement State pattern for transaction lifecycle (INITIATED → PROCESSING → SUCCESS/FAILED).',
                'Design double-entry bookkeeping for accurate balance tracking.',
                'Use Observer pattern for transaction notifications.',
                'Handle concurrent transactions with proper locking.',
                'Consider saga pattern for distributed transactions.',
                'Design for PCI-DSS compliance considerations.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Digital Wallet System
        // Core: Wallet, Transaction, PaymentProcessor, Ledger, User
        // Asked at: Flipkart, PhonePe, Paytm
        
    }
}`
    }
};
