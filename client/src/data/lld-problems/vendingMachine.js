export const vendingMachineProblem = {
    id: 'vending-machine',
    title: 'Design a Vending Machine',
    difficulty: 'Easy',
    companies: ['Amazon', 'Google', 'Adobe', 'Walmart', 'Oracle'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a vending machine that dispenses products when the correct amount is paid. The machine should handle multiple products, different payment denominations, return change, and manage inventory.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Product Display', text: 'Show available products with their prices and stock levels.' },
                { label: 'Product Selection', text: 'Allow users to select a product by code or button press.' },
                { label: 'Payment Handling', text: 'Accept coins and notes of various denominations.' },
                { label: 'Change Return', text: 'Calculate and dispense correct change using available denominations.' },
                { label: 'Product Dispensing', text: 'Dispense the selected product after successful payment.' },
                { label: 'Inventory Management', text: 'Track product quantities and prevent selection of out-of-stock items.' },
                { label: 'Refund', text: 'Allow users to cancel and get their money back before completing purchase.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Reliability', text: 'Never lose money or dispense products incorrectly.' },
                { label: 'Maintainability', text: 'Easy to add new products or change prices.' },
                { label: 'Change Optimization', text: 'Return change using minimum number of coins/notes.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use State pattern for machine states (IDLE, ACCEPTING_PAYMENT, DISPENSING, RETURNING_CHANGE).',
                'Implement greedy algorithm for optimal change calculation.',
                'Apply Singleton pattern for the VendingMachine instance.',
                'Design proper inventory management with thread-safety considerations.',
                'Handle edge cases: insufficient payment, no change available, stuck product.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Vending Machine Implementation
        // Core classes: VendingMachine, Product, Inventory, CoinDispenser
        
    }
}`
    }
};
