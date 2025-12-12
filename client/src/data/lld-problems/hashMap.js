export const hashMapProblem = {
    id: 'hash-map',
    title: 'Design HashMap from Scratch',
    difficulty: 'Medium',
    companies: ['Google', 'Amazon', 'Meta', 'Apple', 'Microsoft'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design and implement a HashMap data structure from scratch that supports get, put, and remove operations. Handle collisions using chaining or open addressing, implement dynamic resizing, and ensure O(1) average time complexity.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Put Operation', text: 'Insert key-value pair, update if key exists.' },
                { label: 'Get Operation', text: 'Retrieve value by key, return null if not found.' },
                { label: 'Remove Operation', text: 'Delete key-value pair by key.' },
                { label: 'Contains Key', text: 'Check if key exists in map.' },
                { label: 'Size & Empty', text: 'Return current size and check if empty.' },
                { label: 'Dynamic Resize', text: 'Automatically resize when load factor exceeds threshold.' },
                { label: 'Iteration', text: 'Support iterating over all key-value pairs.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Time Complexity', text: 'O(1) average for get, put, remove operations.' },
                { label: 'Space Efficiency', text: 'Reasonable load factor (0.75) to balance speed and memory.' },
                { label: 'Collision Handling', text: 'Gracefully handle hash collisions.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Implement hash function with good distribution.',
                'Use chaining (linked list) or open addressing (linear/quadratic probing).',
                'Design dynamic resizing with rehashing when load factor exceeded.',
                'Handle null keys and values appropriately.',
                'Compare chaining vs open addressing trade-offs.',
                'Consider thread-safe version with ConcurrentHashMap concepts.',
                'Handle edge cases: negative hash codes, resize during iteration.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // HashMap Implementation
        // Core: HashMap<K,V>, Entry<K,V>, hash(), resize()
        
    }
}`
    }
};
