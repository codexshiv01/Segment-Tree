export const pizzaPricingProblem = {
    id: 'pizza-pricing',
    title: 'Design Pizza Ordering System',
    difficulty: 'Easy',
    companies: ['Amazon', 'Dominos', 'Swiggy'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a pizza ordering system for a restaurant chain that handles menu management, customizable pizzas with toppings, combo deals, and dynamic pricing. The system should calculate final prices including all customizations and applicable discounts.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Base Pizzas', text: 'Manage different pizza types (Margherita, Pepperoni, BBQ Chicken) with base prices.' },
                { label: 'Crust Options', text: 'Choose crust type: thin, regular, cheese-stuffed, with price variations.' },
                { label: 'Size Selection', text: 'Select size: Personal, Medium, Large, Extra Large with multipliers.' },
                { label: 'Toppings', text: 'Add extra toppings (mushrooms, olives, jalapenos) with individual pricing.' },
                { label: 'Combo Deals', text: 'Create combos (pizza + sides + drink) with bundled pricing.' },
                { label: 'Price Calculation', text: 'Calculate total price including base, size, crust, and toppings.' },
                { label: 'Discounts', text: 'Apply percentage or flat discounts, BOGO offers.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Extensibility', text: 'Easy to add new pizza types, toppings, or crust options.' },
                { label: 'Flexibility', text: 'Support different pricing rules per location.' },
                { label: 'Transparency', text: 'Show price breakdown to customer.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Decorator pattern for adding toppings to base pizza.',
                'Apply Builder pattern for constructing customized pizzas.',
                'Implement Strategy pattern for different discount calculations.',
                'Use Factory pattern for creating pizza variants.',
                'Design proper class hierarchy: Pizza base with topping decorators.',
                'Handle edge cases: max toppings limit, unavailable items.',
                'Consider meal customization with multiple items.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Pizza Ordering System
        // Core: Pizza (abstract), ToppingDecorator, PizzaBuilder, PriceCalculator
        // Asked at: Amazon
        
    }
}`
    }
};
