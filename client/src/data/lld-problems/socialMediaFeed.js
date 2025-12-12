export const socialMediaFeedProblem = {
    id: 'social-media-feed',
    title: 'Design Twitter/Instagram Feed',
    difficulty: 'Hard',
    companies: ['Twitter', 'Meta', 'Instagram', 'LinkedIn', 'TikTok', 'Pinterest'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design the news feed system for a social media platform like Twitter or Instagram. The system should generate personalized feeds, handle posts, follows, likes, and support both pull-based and push-based feed generation.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Post Creation', text: 'Create posts with text, images, videos, and hashtags.' },
                { label: 'Follow System', text: 'Users can follow/unfollow other users. Support public and private accounts.' },
                { label: 'Feed Generation', text: 'Generate chronological or algorithmic feed from followed users posts.' },
                { label: 'Like & Comment', text: 'Like posts and add comments with nested replies.' },
                { label: 'Repost/Retweet', text: 'Share others posts with optional commentary.' },
                { label: 'Hashtags & Mentions', text: 'Parse and index hashtags, notify mentioned users.' },
                { label: 'Feed Pagination', text: 'Infinite scroll with efficient pagination for feed items.' },
                { label: 'Notifications', text: 'Notify on likes, comments, follows, and mentions.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Low Latency', text: 'Feed loading should be under 100ms for good UX.' },
                { label: 'Eventual Consistency', text: 'New posts appear in followers feeds within seconds.' },
                { label: 'High Read Volume', text: 'Handle millions of feed reads per second.' },
                { label: 'Celebrity Problem', text: 'Handle users with millions of followers efficiently.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Compare Push (fan-out on write) vs Pull (fan-out on read) models.',
                'Hybrid approach: Push for normal users, Pull for celebrities.',
                'Use Observer pattern for notifying followers of new posts.',
                'Apply Strategy pattern for different feed ranking algorithms.',
                'Design efficient data structures for timeline storage.',
                'Consider caching strategies for hot users and popular posts.',
                'Handle edge cases: blocked users, deleted posts, private accounts.',
                'Implement infinite scroll with cursor-based pagination.',
                'Design for real-time updates using WebSockets.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Social Media Feed System
        // Core: User, Post, Feed, Follow, Like, Comment, FeedGenerator
        
    }
}`
    }
};
