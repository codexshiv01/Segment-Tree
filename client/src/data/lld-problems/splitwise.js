export const splitwiseProblem = {
    id: 'splitwise',
    title: 'Design Splitwise',
    difficulty: 'Hard',
    companies: ['Google', 'Amazon', 'PhonePe', 'Paytm', 'Uber'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design an expense sharing application like Splitwise that allows users to add expenses and split them among group members with different splitting strategies.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'User Management', text: 'Create and manage user accounts with unique identifiers.' },
                { label: 'Group Creation', text: 'Allow users to create groups and add members.' },
                { label: 'Add Expense', text: 'Add expenses with amount, payer, and participants.' },
                { label: 'Split Types', text: 'Support EQUAL, EXACT, and PERCENTAGE based splits.' },
                { label: 'Balance Tracking', text: 'Track who owes whom and show simplified debts.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Accuracy', text: 'Ensure precise calculation of splits to avoid rounding errors.' },
                { label: 'Debt Simplification', text: 'Minimize the number of transactions needed to settle debts.' },
                { label: 'Scalability', text: 'Handle large groups with many transactions efficiently.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Strategy pattern for different split types.',
                'Implement proper validation for percentages summing to 100%.',
                'Design efficient data structures for balance tracking.',
                'Apply Factory pattern for creating different expense types.',
                'Handle concurrent expense additions safely.'
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
