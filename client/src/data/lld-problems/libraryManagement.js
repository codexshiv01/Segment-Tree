export const libraryManagementProblem = {
    id: 'library-management',
    title: 'Design a Library Management System',
    difficulty: 'Easy',
    companies: ['Amazon', 'Flipkart', 'Intuit', 'Oracle'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a library management system that allows librarians to manage books, members, and borrowing operations. The system should track book availability and handle reservations.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Book Management', text: 'Add, remove, and search for books by title, author, or ISBN.' },
                { label: 'Member Management', text: 'Register new members and manage their accounts.' },
                { label: 'Borrowing', text: 'Allow members to borrow and return books with due date tracking.' },
                { label: 'Reservations', text: 'Enable members to reserve books that are currently borrowed.' },
                { label: 'Fine Calculation', text: 'Calculate and apply fines for overdue books.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Search Performance', text: 'Book search should be efficient even with large catalogs.' },
                { label: 'Data Integrity', text: 'Ensure accurate tracking of book availability and borrowing history.' },
                { label: 'Extensibility', text: 'Easy to add new item types like magazines, DVDs, etc.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Define clear class hierarchy for different types of library items.',
                'Use Observer pattern to notify members when reserved books become available.',
                'Implement proper encapsulation and data hiding.',
                'Handle edge cases like borrowing limits and unavailable books.'
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
