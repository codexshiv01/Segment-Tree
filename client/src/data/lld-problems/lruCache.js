export const lruCacheProblem = {
    id: 'lru-cache',
    title: 'Design LRU Cache',
    difficulty: 'Medium',
    companies: ['Google', 'Amazon', 'Meta', 'Microsoft', 'Apple', 'Netflix'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a Least Recently Used (LRU) Cache with fixed capacity that supports get and put operations in O(1) time. When the cache reaches capacity, the least recently used item should be evicted before inserting a new item.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Get Operation', text: 'Retrieve value by key in O(1). Return -1 if key not found. Mark as recently used.' },
                { label: 'Put Operation', text: 'Insert or update key-value pair in O(1). Evict LRU item if at capacity.' },
                { label: 'Capacity Management', text: 'Initialize cache with fixed capacity. Never exceed this limit.' },
                { label: 'Eviction Policy', text: 'When full, remove the least recently used item before adding new one.' },
                { label: 'Update on Access', text: 'Both get and put operations should mark the item as most recently used.' },
                { label: 'Delete Operation', text: 'Optional: Remove a specific key from cache.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'O(1) Time', text: 'Both get and put must be constant time operations.' },
                { label: 'Thread Safety', text: 'Handle concurrent access in multi-threaded environment.' },
                { label: 'Memory Efficiency', text: 'Minimal overhead beyond stored key-value pairs.' },
                { label: 'Extensibility', text: 'Easy to implement other eviction policies (LFU, FIFO).' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use HashMap + Doubly Linked List for O(1) operations.',
                'HashMap stores key → node reference for O(1) lookup.',
                'Doubly Linked List maintains access order (head = MRU, tail = LRU).',
                'Implement move-to-head operation for marking as recently used.',
                'Handle edge cases: cache size 0, duplicate puts, get non-existent key.',
                'Consider generic types for key-value flexibility.',
                'Extend design to support TTL (time-to-live) for entries.',
                'Compare with LFU cache and discuss when to use each.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // LRU Cache Implementation
        // Core: LRUCache, DoublyLinkedList, Node<K,V>
        // Use: HashMap<K, Node> + DoublyLinkedList
        
    }
}`
    }
};
