export const taskSchedulerProblem = {
    id: 'task-scheduler',
    title: 'Design a Task Scheduler',
    difficulty: 'Hard',
    companies: ['Google', 'Amazon', 'Uber', 'LinkedIn', 'Netflix'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a distributed task scheduler that can schedule one-time and recurring tasks with priorities. The system should handle task dependencies, retries on failure, and provide task status tracking.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Task Creation', text: 'Create tasks with name, execution time, priority, and optional payload.' },
                { label: 'Scheduling Types', text: 'Support one-time tasks, recurring tasks (cron-like), and delayed tasks.' },
                { label: 'Priority Queue', text: 'Execute higher priority tasks first when multiple tasks are ready.' },
                { label: 'Dependencies', text: 'Define task dependencies - task B runs only after task A completes.' },
                { label: 'Retry Logic', text: 'Configure retry attempts with exponential backoff on failure.' },
                { label: 'Task Status', text: 'Track status: PENDING, RUNNING, COMPLETED, FAILED, CANCELLED.' },
                { label: 'Cancellation', text: 'Cancel pending or running tasks with cleanup.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Reliability', text: 'Tasks should not be lost; persist state for recovery.' },
                { label: 'Scalability', text: 'Handle millions of scheduled tasks efficiently.' },
                { label: 'Accuracy', text: 'Execute tasks at the scheduled time with minimal delay.' },
                { label: 'Isolation', text: 'One task failure should not affect other tasks.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Priority Queue (min-heap) for efficient next-task retrieval.',
                'Implement Command pattern for different task types.',
                'Apply Observer pattern to notify on task completion/failure.',
                'Design DAG (Directed Acyclic Graph) for task dependencies.',
                'Use Strategy pattern for different retry policies.',
                'Handle edge cases: missed execution due to downtime, overlapping runs.',
                'Consider worker pool design for parallel task execution.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Task Scheduler System
        // Core: Task, Scheduler, Worker, TaskQueue, RetryPolicy
        
    }
}`
    }
};
