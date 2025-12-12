export const loggerSystemProblem = {
    id: 'logger-system',
    title: 'Design a Logging Framework',
    difficulty: 'Medium',
    companies: ['Amazon', 'Google', 'Microsoft', 'Splunk', 'Datadog'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a flexible logging framework like Log4j that supports multiple log levels, various output destinations (console, file, database), log formatting, and filtering. The framework should be thread-safe and extensible.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Log Levels', text: 'Support DEBUG, INFO, WARN, ERROR, FATAL levels with filtering by level.' },
                { label: 'Multiple Appenders', text: 'Output to console, file, database, or remote server simultaneously.' },
                { label: 'Log Formatting', text: 'Customizable format with timestamp, level, class name, thread, message.' },
                { label: 'Filtering', text: 'Filter logs by level, package/class, or custom criteria.' },
                { label: 'File Rotation', text: 'Rotate log files by size or time with configurable retention.' },
                { label: 'Async Logging', text: 'Support asynchronous logging to not block application threads.' },
                { label: 'Configuration', text: 'Configure via code or external config file (JSON/XML).' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Thread Safety', text: 'Handle concurrent logging from multiple threads safely.' },
                { label: 'Performance', text: 'Minimal overhead on application performance.' },
                { label: 'Reliability', text: 'No log loss, especially for ERROR and FATAL levels.' },
                { label: 'Extensibility', text: 'Easy to add new appenders, formatters, and filters.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Apply Singleton pattern for Logger instance management.',
                'Use Strategy pattern for different appenders (Console, File, Database).',
                'Implement Chain of Responsibility for log filtering.',
                'Apply Template Method for log formatting.',
                'Use Producer-Consumer pattern for async logging with queue.',
                'Design Builder pattern for Logger configuration.',
                'Handle edge cases: disk full, database connection failure, log flooding.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Logging Framework
        // Core: Logger, LogLevel, Appender, Formatter, Filter, LogMessage
        
    }
}`
    }
};
