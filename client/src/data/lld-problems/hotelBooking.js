export const hotelBookingProblem = {
    id: 'hotel-booking',
    title: 'Design a Hotel Booking System',
    difficulty: 'Hard',
    companies: ['Booking.com', 'Airbnb', 'MakeMyTrip', 'Expedia', 'Amazon'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a hotel booking system like Booking.com that allows users to search for hotels, view room availability, make reservations, and manage bookings. The system should handle concurrent bookings and prevent double-booking of rooms.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Hotel & Room Management', text: 'Support multiple hotels with different room types (Standard, Deluxe, Suite) with varying capacities and amenities.' },
                { label: 'Search & Availability', text: 'Search hotels by location, date range, number of guests, and show real-time room availability.' },
                { label: 'Booking Flow', text: 'Allow users to select rooms, provide guest details, and complete booking with confirmation.' },
                { label: 'Pricing Engine', text: 'Calculate dynamic pricing based on season, demand, room type, and length of stay.' },
                { label: 'Cancellation Policy', text: 'Handle booking cancellations with configurable refund policies (full, partial, no refund).' },
                { label: 'Payment Integration', text: 'Process payments and handle partial payments or pay-at-hotel options.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Concurrency', text: 'Handle multiple users trying to book the same room simultaneously without double-booking.' },
                { label: 'High Availability', text: 'System should be highly available during peak booking seasons.' },
                { label: 'Consistency', text: 'Booking confirmations must be accurate and reflected immediately across all systems.' },
                { label: 'Scalability', text: 'Support thousands of hotels with millions of room-nights inventory.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Strategy pattern for different pricing strategies (seasonal, promotional, dynamic).',
                'Implement State pattern for booking lifecycle (PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED).',
                'Apply optimistic or pessimistic locking for concurrent booking prevention.',
                'Design proper class hierarchy for Room types using inheritance or composition.',
                'Implement Observer pattern to notify users of booking status changes.',
                'Handle edge cases: overbooking, room upgrades, date modifications.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Hotel Booking System Implementation
        // Start by defining your core entities: Hotel, Room, Booking, User
        
    }
}`
    }
};
