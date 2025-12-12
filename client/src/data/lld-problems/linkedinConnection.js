export const linkedinConnectionProblem = {
    id: 'linkedin-connection',
    title: 'Design LinkedIn Connections',
    difficulty: 'Medium',
    companies: ['LinkedIn', 'Meta', 'Twitter', 'Google'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design LinkedIn\'s connection system that manages user connections, connection requests, follower relationships, and mutual connections. Include features like "People You May Know" suggestions and connection degree calculations.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Connection Request', text: 'Send, accept, reject, and withdraw connection requests with optional message.' },
                { label: 'Connection Types', text: 'Support 1st, 2nd, and 3rd degree connections.' },
                { label: 'Follow System', text: 'Follow users without connecting (for influencers/creators).' },
                { label: 'Mutual Connections', text: 'Calculate and display mutual connections between users.' },
                { label: 'Suggestions', text: 'Generate "People You May Know" based on mutual connections, company, school.' },
                { label: 'Connection Limit', text: 'Enforce maximum connection limit (e.g., 30,000).' },
                { label: 'Block/Unblock', text: 'Block users from viewing profile or sending requests.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Scale', text: 'Handle users with 10,000+ connections efficiently.' },
                { label: 'Real-Time', text: 'Connection status updates reflected immediately.' },
                { label: 'Privacy', text: 'Respect privacy settings for connection visibility.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Graph data structure for connection network.',
                'Implement BFS for finding connection degrees and paths.',
                'Apply Observer pattern for connection request notifications.',
                'Design efficient algorithm for mutual connection calculation.',
                'Use Strategy pattern for different suggestion algorithms.',
                'Handle edge cases: pending requests, blocked users, privacy settings.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // LinkedIn Connection System
        // Core: User, Connection, ConnectionRequest, ConnectionGraph
        
    }
}`
    }
};
