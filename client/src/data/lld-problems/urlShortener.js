export const urlShortenerProblem = {
    id: 'url-shortener',
    title: 'Design a URL Shortener',
    difficulty: 'Medium',
    companies: ['Google', 'Meta', 'Twitter', 'LinkedIn', 'Uber', 'Bitly'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a URL shortening service like bit.ly that converts long URLs into short, unique aliases. The system should handle URL creation, redirection, analytics tracking, and optional custom aliases with expiration support.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'URL Shortening', text: 'Generate unique 6-8 character short codes for long URLs.' },
                { label: 'Redirection', text: 'Redirect users from short URL to the original long URL.' },
                { label: 'Custom Aliases', text: 'Allow users to create custom short URLs if available.' },
                { label: 'Expiration', text: 'Support optional expiration dates for short URLs.' },
                { label: 'Analytics', text: 'Track click counts, referrers, geographic data, and timestamps.' },
                { label: 'Rate Limiting', text: 'Prevent abuse with rate limiting per user/IP.' },
                { label: 'API Support', text: 'Provide REST API for programmatic URL creation and management.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'High Availability', text: 'URLs should always redirect without downtime.' },
                { label: 'Low Latency', text: 'Redirection should be extremely fast (<10ms).' },
                { label: 'Uniqueness', text: 'Short codes must be globally unique with no collisions.' },
                { label: 'Scalability', text: 'Handle billions of URLs and millions of redirects per day.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Implement Base62 encoding for generating short codes from unique IDs.',
                'Compare approaches: counter-based, hash-based, random generation.',
                'Use Factory pattern for different URL shortening strategies.',
                'Design collision handling for hash-based approach.',
                'Apply Decorator pattern for adding analytics to basic URL service.',
                'Consider caching strategy for popular URLs.',
                'Handle edge cases: duplicate URLs, invalid URLs, expired links.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // URL Shortener Service
        // Core: URLShortenerService, URLEncoder, URLStore, AnalyticsTracker
        
    }
}`
    }
};
