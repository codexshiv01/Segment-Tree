export const airbnbReviewProblem = {
    id: 'airbnb-review',
    title: 'Design Airbnb Review System',
    difficulty: 'Medium',
    companies: ['Airbnb', 'TripAdvisor', 'Yelp', 'Google Maps'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design the review and rating system for Airbnb where guests can review listings and hosts, and hosts can review guests. The system should handle review creation, moderation, display algorithms, and aggregate rating calculations.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Review Creation', text: 'Guests review listings after checkout; hosts review guests. Reviews have text, ratings, and photos.' },
                { label: 'Rating Categories', text: 'Multiple rating dimensions: cleanliness, accuracy, communication, location, check-in, value.' },
                { label: 'Mutual Reviews', text: 'Both parties must submit reviews within a window before either is published.' },
                { label: 'Review Moderation', text: 'Flag inappropriate content, profanity filter, and manual review queue.' },
                { label: 'Response System', text: 'Hosts can respond to reviews publicly.' },
                { label: 'Aggregate Ratings', text: 'Calculate and display overall ratings with weighted averages.' },
                { label: 'Review Sorting', text: 'Sort reviews by relevance, recency, rating, or helpful votes.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Trust', text: 'Only verified bookings can leave reviews (prevent fake reviews).' },
                { label: 'Freshness', text: 'Recent reviews weighted more in aggregate scores.' },
                { label: 'Performance', text: 'Fast retrieval even for listings with thousands of reviews.' },
                { label: 'Fairness', text: 'Prevent review manipulation and bombing.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Design state machine for review lifecycle (PENDING → PUBLISHED, FLAGGED → REMOVED).',
                'Use Strategy pattern for different sorting/ranking algorithms.',
                'Implement Observer pattern to update aggregate ratings on new reviews.',
                'Apply Decorator pattern for content filtering layers.',
                'Handle edge cases: review edits, withdrawals, host response timing.',
                'Consider privacy: hiding reviewer identity for sensitive feedback.',
                'Design for fraud detection and suspicious pattern identification.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Airbnb Review System
        // Core: Review, Rating, ReviewModerator, RatingAggregator, ContentFilter
        // Asked at: Airbnb
        
    }
}`
    }
};
