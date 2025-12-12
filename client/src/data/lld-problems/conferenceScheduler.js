export const conferenceSchedulerProblem = {
    id: 'conference-scheduler',
    title: 'Design Meeting Room Scheduler',
    difficulty: 'Medium',
    companies: ['Google', 'Microsoft', 'Zoom', 'Calendly'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a meeting room booking system for an office that handles room reservations, availability checking, conflict detection, and recurring meetings. Support multiple floors, room amenities, and capacity-based booking.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Room Management', text: 'Add rooms with capacity, floor, amenities (projector, whiteboard, VC equipment).' },
                { label: 'Book Meeting', text: 'Reserve room for time slot with attendees and meeting title.' },
                { label: 'Check Availability', text: 'Find available rooms for given time slot and requirements.' },
                { label: 'Conflict Detection', text: 'Prevent double-booking of rooms.' },
                { label: 'Recurring Meetings', text: 'Book daily, weekly, or custom recurring meetings.' },
                { label: 'Auto-Suggestion', text: 'Suggest best room based on attendee locations and capacity.' },
                { label: 'Cancel/Modify', text: 'Cancel single or all occurrences of recurring meetings.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Concurrency', text: 'Handle simultaneous booking attempts for same room.' },
                { label: 'Efficiency', text: 'Fast availability lookup across many rooms.' },
                { label: 'Calendar Sync', text: 'Integration-ready with external calendars.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use interval-based data structure for efficient overlap detection.',
                'Implement Strategy pattern for room selection algorithms.',
                'Apply Factory pattern for different meeting types (one-time, recurring).',
                'Use Observer pattern to notify attendees of changes.',
                'Design for timezone handling in global offices.',
                'Handle edge cases: room maintenance, last-minute cancellations.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Meeting Room Scheduler
        // Core: Room, Meeting, TimeSlot, Scheduler, RecurrenceRule
        
    }
}`
    }
};
