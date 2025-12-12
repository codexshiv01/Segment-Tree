export const foodDeliveryProblem = {
    id: 'food-delivery',
    title: 'Design Swiggy/Zomato',
    difficulty: 'Hard',
    companies: ['Swiggy', 'Zomato', 'Uber Eats', 'DoorDash', 'Amazon', 'Google'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a food delivery platform like Swiggy or Zomato that connects customers with restaurants and delivery partners. The system should handle restaurant discovery, menu browsing, order placement, real-time tracking, and delivery assignment.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Restaurant Management', text: 'Onboard restaurants with menus, pricing, cuisine types, and operating hours.' },
                { label: 'Search & Discovery', text: 'Search restaurants by location, cuisine, rating, delivery time, and filters.' },
                { label: 'Menu & Cart', text: 'Browse menus, add items with customizations, manage cart across restaurants.' },
                { label: 'Order Placement', text: 'Place order with delivery address, payment, and special instructions.' },
                { label: 'Delivery Assignment', text: 'Assign nearby available delivery partners based on location and load.' },
                { label: 'Real-Time Tracking', text: 'Track order status and delivery partner location in real-time.' },
                { label: 'Ratings & Reviews', text: 'Rate restaurants, food items, and delivery partners after order completion.' },
                { label: 'Offers & Discounts', text: 'Apply coupons, restaurant offers, and loyalty rewards.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Low Latency', text: 'Search and order placement should be fast (<200ms).' },
                { label: 'High Availability', text: 'System should handle peak meal-time traffic without downtime.' },
                { label: 'Location Accuracy', text: 'Real-time tracking should be accurate within meters.' },
                { label: 'Scalability', text: 'Support millions of users, thousands of restaurants, and concurrent orders.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Strategy pattern for different delivery assignment algorithms (nearest, lowest cost).',
                'Apply Observer pattern for real-time order status notifications.',
                'Implement State pattern for order lifecycle (PLACED → CONFIRMED → PREPARING → PICKED_UP → DELIVERED).',
                'Design proper entity relationships: User, Restaurant, Menu, Order, DeliveryPartner.',
                'Use Factory pattern for different payment methods.',
                'Consider geospatial indexing for location-based restaurant search.',
                'Handle edge cases: restaurant closes mid-order, delivery partner unavailable, order cancellation.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Food Delivery System (Swiggy/Zomato)
        // Core: Restaurant, Menu, Order, Customer, DeliveryPartner, Location
        
    }
}`
    }
};
