export const onlineShoppingProblem = {
    id: 'online-shopping',
    title: 'Design an E-Commerce Platform',
    difficulty: 'Hard',
    companies: ['Amazon', 'Flipkart', 'Walmart', 'eBay', 'Shopify'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design an online shopping platform like Amazon with product catalog, shopping cart, checkout, order management, and inventory tracking. The system should handle product search, user reviews, and multiple payment options.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Product Catalog', text: 'Manage products with categories, descriptions, images, prices, and attributes.' },
                { label: 'Search & Browse', text: 'Search products by name, category, and filters (price range, brand, ratings).' },
                { label: 'Shopping Cart', text: 'Add/remove items, update quantities, save cart across sessions.' },
                { label: 'Checkout Flow', text: 'Address selection, shipping options, payment method, and order confirmation.' },
                { label: 'Order Management', text: 'Track orders through states: PLACED, CONFIRMED, SHIPPED, DELIVERED, CANCELLED.' },
                { label: 'Inventory', text: 'Real-time stock tracking with low-stock alerts and backorder handling.' },
                { label: 'Reviews & Ratings', text: 'Allow verified buyers to review products and rate sellers.' },
                { label: 'Discounts & Coupons', text: 'Apply percentage/flat discounts, promo codes, and bundle offers.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Scalability', text: 'Handle millions of products and concurrent users during sale events.' },
                { label: 'Inventory Accuracy', text: 'Prevent overselling with real-time inventory updates.' },
                { label: 'Fast Search', text: 'Product search should return results in under 100ms.' },
                { label: 'Cart Persistence', text: 'Cart should persist for logged-in users across devices.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Composite pattern for product categories and sub-categories.',
                'Implement Strategy pattern for different discount/pricing strategies.',
                'Apply State pattern for order lifecycle management.',
                'Design Observer pattern for inventory alerts and order notifications.',
                'Use Factory pattern for creating different payment processors.',
                'Implement cart as a session-based or database-persisted entity.',
                'Handle concurrent inventory updates during checkout to prevent overselling.',
                'Design proper class relationships: User, Product, Cart, CartItem, Order, OrderItem, Payment.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // E-Commerce Platform Implementation
        // Core entities: User, Product, Category, Cart, Order, Payment, Review
        
    }
}`
    }
};
