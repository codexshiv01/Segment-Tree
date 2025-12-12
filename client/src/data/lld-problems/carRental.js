export const carRentalProblem = {
    id: 'car-rental',
    title: 'Design a Car Rental System',
    difficulty: 'Medium',
    companies: ['Uber', 'Lyft', 'Hertz', 'Amazon', 'Google', 'Microsoft'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a car rental system that allows customers to search and book vehicles for a specified period. The system should manage vehicle inventory across multiple locations, handle reservations, calculate rental costs, and process returns with damage assessment.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Vehicle Catalog', text: 'Manage different vehicle types (Sedan, SUV, Luxury, Van) with specifications like model, capacity, and features.' },
                { label: 'Search & Availability', text: 'Search available vehicles by location, date range, vehicle type, and filters like transmission, fuel type.' },
                { label: 'Reservation System', text: 'Book vehicles with pickup/dropoff locations and times, handle overlapping reservation conflicts.' },
                { label: 'Pricing Engine', text: 'Calculate rental cost based on duration, vehicle type, insurance options, and additional services (GPS, child seat).' },
                { label: 'Pickup & Return', text: 'Handle vehicle pickup with inspection and return with damage assessment.' },
                { label: 'Late Returns', text: 'Calculate and apply late fees for overdue returns.' },
                { label: 'Member Tiers', text: 'Support loyalty programs with different discount tiers (Gold, Platinum).' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Availability Accuracy', text: 'Real-time vehicle availability across all locations.' },
                { label: 'Concurrency', text: 'Handle simultaneous booking attempts for the same vehicle.' },
                { label: 'Scalability', text: 'Support hundreds of locations with thousands of vehicles.' },
                { label: 'Audit Trail', text: 'Maintain complete history of rentals, damages, and payments.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Factory pattern for creating different vehicle types.',
                'Apply Strategy pattern for dynamic pricing based on demand and member tier.',
                'Implement State pattern for reservation lifecycle (RESERVED, ACTIVE, COMPLETED, CANCELLED).',
                'Design proper class hierarchy: VehicleType extends to specific vehicles.',
                'Handle edge cases: vehicle breakdown during rental, one-way rentals, extensions.',
                'Use Builder pattern for complex rental configurations with optional add-ons.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Car Rental System
        // Core: Vehicle, Reservation, RentalLocation, Customer, Invoice
        
    }
}`
    }
};
