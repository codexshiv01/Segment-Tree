export const movieTicketBookingProblem = {
    id: 'movie-ticket-booking',
    title: 'Design BookMyShow',
    difficulty: 'Hard',
    companies: ['BookMyShow', 'Amazon', 'Netflix', 'Flipkart', 'Microsoft'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a movie ticket booking system like BookMyShow that allows users to browse movies, select theaters and showtimes, choose seats, and complete bookings. The system must handle high traffic during popular movie releases and prevent double-booking of seats.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Movie Catalog', text: 'Manage movies with details like title, genre, duration, cast, and ratings.' },
                { label: 'Theater Management', text: 'Support multiple theaters with multiple screens, each having different seating arrangements.' },
                { label: 'Show Scheduling', text: 'Create and manage movie showtimes across different screens and theaters.' },
                { label: 'Seat Selection', text: 'Display real-time seat availability map and allow users to select multiple seats.' },
                { label: 'Seat Categories', text: 'Support different seat types (Recliner, Premium, Regular) with different pricing.' },
                { label: 'Booking & Payment', text: 'Complete booking with seat locking during payment and generate tickets.' },
                { label: 'Cancellation', text: 'Allow cancellations with time-based refund policies.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'High Concurrency', text: 'Handle thousands of concurrent users during blockbuster releases.' },
                { label: 'Seat Locking', text: 'Temporarily lock seats during booking to prevent race conditions.' },
                { label: 'Low Latency', text: 'Seat availability checks must be real-time and fast.' },
                { label: 'Fault Tolerance', text: 'System should gracefully handle payment failures and release locked seats.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Design seat locking mechanism with TTL (Time-to-Live) for reservation expiry.',
                'Use Composite pattern to model theater -> screen -> row -> seat hierarchy.',
                'Implement Factory pattern for creating different seat types.',
                'Apply Strategy pattern for pricing (peak hours, weekends, holidays).',
                'Handle race conditions when multiple users select the same seat.',
                'Design proper booking state machine (INITIATED, SEATS_LOCKED, PAYMENT_PENDING, CONFIRMED, CANCELLED).'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Movie Ticket Booking System
        // Core entities: Movie, Theater, Screen, Show, Seat, Booking
        
    }
}`
    }
};
