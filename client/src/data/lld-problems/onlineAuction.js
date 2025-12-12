export const onlineAuctionProblem = {
    id: 'online-auction',
    title: 'Design Online Auction System',
    difficulty: 'Hard',
    companies: ['eBay', 'Google', 'Amazon', 'Sotheby\'s'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design an online auction platform like eBay where sellers can list items for auction and buyers can place bids. Handle bid validation, auction timing, auto-bidding (proxy bidding), and winner determination.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Create Auction', text: 'List item with starting price, reserve price, duration, and description.' },
                { label: 'Place Bid', text: 'Submit bids higher than current highest bid plus minimum increment.' },
                { label: 'Proxy Bidding', text: 'Set maximum bid amount; system auto-bids up to that limit.' },
                { label: 'Auction Timer', text: 'Track auction end time with optional extension on late bids.' },
                { label: 'Winner Determination', text: 'Determine winner when auction ends; handle reserve not met.' },
                { label: 'Bid History', text: 'Show chronological bid history with bidder and amounts.' },
                { label: 'Notifications', text: 'Alert on outbid, auction ending soon, and auction won.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Real-Time', text: 'Bids reflected immediately to all viewers.' },
                { label: 'Fairness', text: 'Ensure bid ordering is strictly by timestamp.' },
                { label: 'Concurrency', text: 'Handle bid sniping and simultaneous bids correctly.' },
                { label: 'Reliability', text: 'No lost bids, especially near auction end.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use State pattern for auction states (SCHEDULED, ACTIVE, ENDED, CANCELLED).',
                'Implement Strategy pattern for different auction types (English, Dutch, sealed).',
                'Apply Observer pattern for real-time bid notifications.',
                'Design proper locking for concurrent bid processing.',
                'Handle proxy bidding logic with automatic outbid responses.',
                'Consider anti-sniping rules (extend auction on late bids).',
                'Handle edge cases: bid retraction, seller cancellation, payment failure.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Online Auction System
        // Core: Auction, Bid, Item, User, AuctionTimer, ProxyBidder
        
    }
}`
    }
};
