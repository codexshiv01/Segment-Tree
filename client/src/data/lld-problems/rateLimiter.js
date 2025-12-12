export const rateLimiterProblem = {
    id: 'rate-limiter',
    title: 'Design a Rate Limiter',
    difficulty: 'Medium',
    companies: ['Stripe', 'Cloudflare', 'Google', 'Amazon', 'Meta', 'Twitter'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a rate limiter that controls the rate of requests a client can make to an API. Support multiple rate limiting algorithms (Token Bucket, Sliding Window) and different rate limits per user/API endpoint.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Request Throttling', text: 'Allow or reject requests based on configured rate limits.' },
                { label: 'Multiple Algorithms', text: 'Support Token Bucket, Leaky Bucket, Fixed Window, Sliding Window algorithms.' },
                { label: 'Per-Client Limits', text: 'Different rate limits for different clients/API keys.' },
                { label: 'Per-Endpoint Limits', text: 'Configure different limits for different API endpoints.' },
                { label: 'Burst Handling', text: 'Allow short bursts while maintaining average rate.' },
                { label: 'Headers', text: 'Return remaining quota and reset time in response headers.' },
                { label: 'Distributed Support', text: 'Work across multiple server instances with shared state.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Low Latency', text: 'Rate check should add minimal latency (<1ms).' },
                { label: 'Accuracy', text: 'Rate limiting should be precise, especially at boundaries.' },
                { label: 'Fault Tolerance', text: 'System should handle Redis/storage failures gracefully.' },
                { label: 'Scalability', text: 'Handle millions of requests per second across distributed nodes.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Implement Token Bucket algorithm with refill rate and bucket size.',
                'Implement Sliding Window Log for precise rate limiting.',
                'Use Strategy pattern to switch between algorithms.',
                'Apply Factory pattern to create rate limiters for different configs.',
                'Design for distributed systems with Redis/Memcached backend.',
                'Handle race conditions with atomic operations.',
                'Consider graceful degradation: fail-open vs fail-closed.',
                'Design proper key structure: user_id:endpoint:timestamp.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Rate Limiter System
        // Core: RateLimiter (interface), TokenBucket, SlidingWindow, RateLimitConfig
        
    }
}`
    }
};
