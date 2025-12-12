export const stockBrokerProblem = {
    id: 'stock-broker',
    title: 'Design a Stock Brokerage System',
    difficulty: 'Hard',
    companies: ['Zerodha', 'Goldman Sachs', 'JP Morgan', 'Tower Research', 'Morgan Stanley'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a stock brokerage system that allows users to place buy/sell orders for stocks. The system should match orders, execute trades, maintain portfolios, and provide real-time price updates. Focus on order matching engine and portfolio management.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'User Accounts', text: 'Manage user accounts with funds, holdings, and transaction history.' },
                { label: 'Order Types', text: 'Support MARKET orders (execute immediately at best price) and LIMIT orders (execute at specified price or better).' },
                { label: 'Order Matching', text: 'Match buy orders with sell orders based on price-time priority.' },
                { label: 'Order Book', text: 'Maintain order book with bid/ask prices and quantities for each stock.' },
                { label: 'Trade Execution', text: 'Execute matched orders, update portfolios, and deduct/add funds.' },
                { label: 'Portfolio Management', text: 'Track user holdings, average buy price, and profit/loss.' },
                { label: 'Order Status', text: 'Track order lifecycle: PENDING, PARTIALLY_FILLED, FILLED, CANCELLED.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Low Latency', text: 'Order matching and execution must be extremely fast (sub-millisecond).' },
                { label: 'Consistency', text: 'Account balances and holdings must always be accurate.' },
                { label: 'Fairness', text: 'Orders should be matched in strict price-time priority.' },
                { label: 'Concurrency', text: 'Handle thousands of concurrent orders per second.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Implement efficient order book using sorted data structures (TreeMap, PriorityQueue).',
                'Use Observer pattern to notify clients of order status and price changes.',
                'Apply Command pattern for order operations with proper validation.',
                'Design thread-safe order matching with proper locking strategies.',
                'Implement partial order filling when full quantity is not available.',
                'Handle market orders vs limit orders with different matching logic.',
                'Consider edge cases: self-trade prevention, order cancellation during matching.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Stock Brokerage System
        // Core: Order, OrderBook, MatchingEngine, Portfolio, Trade
        
    }
}`
    }
};
