export const stackOverflowProblem = {
    id: 'stack-overflow',
    title: 'Design Stack Overflow',
    difficulty: 'Hard',
    companies: ['Atlassian', 'Stack Overflow', 'Quora', 'Reddit'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a Q&A platform like Stack Overflow where users can post questions, provide answers, vote on content, earn reputation, and accept answers. Include features like tags, badges, and moderation.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Post Question', text: 'Create questions with title, body, code snippets, and tags.' },
                { label: 'Answer Question', text: 'Post answers with rich text and code formatting.' },
                { label: 'Voting System', text: 'Upvote/downvote questions and answers; affects reputation.' },
                { label: 'Accept Answer', text: 'Question author can mark one answer as accepted.' },
                { label: 'Comments', text: 'Add clarifying comments to questions and answers.' },
                { label: 'Tags & Search', text: 'Categorize with tags; full-text search across content.' },
                { label: 'Reputation System', text: 'Earn points for upvotes, accepted answers; unlock privileges.' },
                { label: 'Badges', text: 'Award badges for achievements (first answer, popular question).' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Spam Prevention', text: 'Rate limiting, reputation-based posting restrictions.' },
                { label: 'Search Performance', text: 'Fast full-text search across millions of posts.' },
                { label: 'Scale', text: 'Handle millions of questions and high read traffic.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Design proper entity relationships: User, Question, Answer, Vote, Tag.',
                'Use Observer pattern for reputation and badge notifications.',
                'Implement Strategy pattern for different ranking algorithms.',
                'Apply Decorator pattern for content formatting/rendering.',
                'Design voting to prevent gaming (one vote per user per post).',
                'Handle edge cases: edit wars, duplicate questions, self-voting.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Stack Overflow Clone
        // Core: User, Question, Answer, Vote, Tag, Badge, Reputation
        
    }
}`
    }
};
