export const notificationServiceProblem = {
    id: 'notification-service',
    title: 'Design Notification Service',
    difficulty: 'Medium',
    companies: ['Amazon', 'Google', 'Meta', 'Twitter', 'LinkedIn', 'Uber'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a scalable notification service that can send notifications across multiple channels (Push, SMS, Email, In-App). The system should handle user preferences, rate limiting, template management, and delivery tracking.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Multi-Channel', text: 'Support Push notifications, SMS, Email, and In-App notifications.' },
                { label: 'User Preferences', text: 'Allow users to configure preferences per notification type and channel.' },
                { label: 'Template Management', text: 'Create and manage notification templates with placeholder substitution.' },
                { label: 'Priority Levels', text: 'Support different priorities: Critical (immediate), High, Normal, Low (batched).' },
                { label: 'Scheduling', text: 'Schedule notifications for future delivery or recurring notifications.' },
                { label: 'Delivery Tracking', text: 'Track delivery status: PENDING, SENT, DELIVERED, FAILED, READ.' },
                { label: 'Retry Logic', text: 'Retry failed notifications with exponential backoff.' },
                { label: 'Rate Limiting', text: 'Prevent notification spam with per-user and global rate limits.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Reliability', text: 'Ensure critical notifications are never lost.' },
                { label: 'Low Latency', text: 'Critical notifications delivered within seconds.' },
                { label: 'Scalability', text: 'Handle millions of notifications per minute.' },
                { label: 'Extensibility', text: 'Easy to add new notification channels.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Factory pattern for creating different channel handlers (Push, SMS, Email).',
                'Apply Strategy pattern for different delivery strategies (immediate, batched).',
                'Implement Template pattern for notification message generation.',
                'Design Observer pattern for delivery status updates.',
                'Use Builder pattern for constructing complex notifications.',
                'Consider message queue for async processing and reliability.',
                'Handle edge cases: user opt-out, invalid device tokens, provider failures.',
                'Design for A/B testing of notification content.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Notification Service
        // Core: Notification, NotificationChannel, Template, UserPreference, DeliveryTracker
        
    }
}`
    }
};
