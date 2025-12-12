export const cabBookingProblem = {
    id: 'cab-booking',
    title: 'Design Uber/Ola',
    difficulty: 'Hard',
    companies: ['Uber', 'Ola', 'Lyft', 'Grab', 'Google', 'Amazon'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a ride-sharing platform like Uber or Ola that connects riders with drivers. The system should handle ride booking, driver matching, fare calculation, real-time tracking, and payment processing.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'User Registration', text: 'Register riders and drivers with profiles, documents, and payment methods.' },
                { label: 'Ride Request', text: 'Request ride with pickup location, destination, and ride type (Pool, Mini, Prime).' },
                { label: 'Driver Matching', text: 'Match rider with nearest available driver based on location and ride type.' },
                { label: 'Fare Estimation', text: 'Calculate fare based on distance, time, ride type, surge pricing, and promotions.' },
                { label: 'Real-Time Tracking', text: 'Track driver location during pickup and throughout the trip.' },
                { label: 'Trip Management', text: 'Start trip, end trip, calculate actual fare, and process payment.' },
                { label: 'Rating System', text: 'Mutual rating between rider and driver after trip completion.' },
                { label: 'Driver Availability', text: 'Drivers can go online/offline and accept/reject ride requests.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Real-Time Matching', text: 'Driver matching should happen within 5-10 seconds.' },
                { label: 'Location Precision', text: 'Location updates every few seconds with high accuracy.' },
                { label: 'High Availability', text: 'System must be available 24/7 with minimal downtime.' },
                { label: 'Scalability', text: 'Handle millions of concurrent ride requests and driver updates.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Strategy pattern for different matching algorithms (nearest, highest rated).',
                'Apply Strategy pattern for pricing strategies (base, surge, discounted).',
                'Implement State pattern for ride states (REQUESTED → MATCHED → DRIVER_ARRIVING → IN_PROGRESS → COMPLETED).',
                'Design Observer pattern for real-time location updates to riders.',
                'Use Command pattern for different ride actions (request, cancel, complete).',
                'Consider geohashing for efficient nearby driver lookup.',
                'Handle edge cases: driver cancellation, rider no-show, payment failure, ride disputes.',
                'Design for ride pooling with multiple pickup/dropoff points.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Cab Booking System (Uber/Ola)
        // Core: Rider, Driver, Ride, Location, Fare, Payment
        
    }
}`
    }
};
