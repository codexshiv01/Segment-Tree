export const parkingLotProblem = {
    id: 'parking-lot',
    title: 'Design a Parking Lot',
    difficulty: 'Medium',
    companies: ['Amazon', 'Google', 'Adobe', 'Uber', 'Microsoft'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a multi-level parking lot system. The parking lot should be able to accommodate different types of vehicles, such as Cars, Bikes, and Trucks.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Parking Spots', text: 'The parking lot should have multiple floors, and each floor should have a specific capacity for different vehicle types.' },
                { label: 'Ticketing', text: 'The system should generate a ticket upon entry, recording the entry time and vehicle details.' },
                { label: 'Payment', text: 'The system should calculate the parking fee upon exit based on the duration and vehicle type.' },
                { label: 'Capacity Check', text: 'The system should indicate whether the parking lot is full or if spots are available for a specific vehicle type.' },
                { label: 'Spot Assignment', text: 'The system should assign the nearest available spot to an entering vehicle.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Extensibility', text: 'The system should be easy to extend to support new vehicle types or pricing models.' },
                { label: 'Consistency', text: 'Ensure concurrent access (e.g., two cars trying to book the same spot) is handled correctly.' },
                { label: 'Modularity', text: 'Use appropriate Design Patterns (e.g., Strategy Pattern for pricing, Factory Pattern for vehicle creation).' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Demonstrate good use of Object-Oriented Design principles (SOLID).',
                'Define clear interfaces and classes.',
                'Handle edge cases (e.g., Parking lot full, Invalid ticket).'
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
