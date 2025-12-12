export const chatApplicationProblem = {
    id: 'chat-application',
    title: 'Design a Chat Application',
    difficulty: 'Hard',
    companies: ['Meta', 'WhatsApp', 'Slack', 'Microsoft', 'Discord', 'Telegram'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a real-time chat application like WhatsApp or Slack that supports one-on-one messaging, group chats, media sharing, message status tracking, and user presence. Focus on the core messaging functionality and data models.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'User Management', text: 'Register users with profile, status, and contact list management.' },
                { label: 'One-on-One Chat', text: 'Send and receive messages between two users in real-time.' },
                { label: 'Group Chat', text: 'Create groups with admin controls, add/remove members, group messaging.' },
                { label: 'Message Types', text: 'Support text, images, videos, files, and location sharing.' },
                { label: 'Message Status', text: 'Track message states: SENT, DELIVERED, READ with timestamps.' },
                { label: 'Online Presence', text: 'Show user online/offline status and "last seen" time.' },
                { label: 'Message History', text: 'Store and retrieve chat history with pagination.' },
                { label: 'Notifications', text: 'Send push notifications for new messages when app is in background.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Real-Time', text: 'Messages should be delivered instantly (sub-second latency).' },
                { label: 'Reliability', text: 'No message loss; ensure delivery even if recipient is offline.' },
                { label: 'Ordering', text: 'Messages should be displayed in correct chronological order.' },
                { label: 'Scalability', text: 'Handle millions of concurrent users and messages.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Observer pattern for real-time message delivery and presence updates.',
                'Apply State pattern for message status lifecycle (PENDING, SENT, DELIVERED, READ).',
                'Implement Command pattern for different message types.',
                'Design proper class hierarchy: Message base with TextMessage, ImageMessage subclasses.',
                'Use Mediator pattern for group chat message distribution.',
                'Handle offline message queuing and sync.',
                'Consider encryption design for secure messaging.',
                'Design efficient data structures for conversation threads and message retrieval.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Chat Application
        // Core: User, Message, Conversation, GroupChat, MessageDeliveryHandler
        
    }
}`
    }
};
