export const calendarAppProblem = {
    id: 'calendar-app',
    title: 'Design Google Calendar',
    difficulty: 'Medium',
    companies: ['Google', 'Microsoft', 'Apple', 'Calendly'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a calendar application like Google Calendar that handles event creation, recurring events, reminders, calendar sharing, and finding mutual availability between users.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Event CRUD', text: 'Create, read, update, delete events with title, time, location, attendees.' },
                { label: 'Recurring Events', text: 'Support daily, weekly, monthly, yearly recurrence with exceptions.' },
                { label: 'Reminders', text: 'Set multiple reminders per event (email, push, popup).' },
                { label: 'Invitations', text: 'Invite attendees and track RSVP (Yes, No, Maybe).' },
                { label: 'Calendar Sharing', text: 'Share calendars with view or edit permissions.' },
                { label: 'Free/Busy', text: 'Check availability and find common free slots.' },
                { label: 'Timezone Support', text: 'Handle events across different timezones.' },
                { label: 'All-Day Events', text: 'Support all-day events and multi-day spans.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Sync', text: 'Real-time sync across devices.' },
                { label: 'Performance', text: 'Fast date range queries for calendar views.' },
                { label: 'Reliability', text: 'Never lose events or miss reminders.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Strategy pattern for different recurrence rules.',
                'Implement Observer pattern for reminder notifications.',
                'Design efficient date range queries using interval trees.',
                'Apply Factory pattern for different event types.',
                'Handle timezone conversions correctly.',
                'Design recurring event expansion on demand.',
                'Handle edge cases: overlapping events, DST changes, recurring exceptions.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Google Calendar Clone
        // Core: Calendar, Event, RecurrenceRule, Reminder, Attendee
        
    }
}`
    }
};
