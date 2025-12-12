export const findCommandProblem = {
    id: 'find-command',
    title: 'Design Unix Find Command',
    difficulty: 'Medium',
    companies: ['Amazon', 'Google'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design the Unix "find" command that searches for files in a directory hierarchy. The command should support multiple search criteria like file name, extension, size, and modification time. Criteria should be combinable using logical operators (AND, OR, NOT).'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Directory Traversal', text: 'Recursively traverse directory tree starting from a given path.' },
                { label: 'Name Filter', text: 'Filter files by name pattern (exact match, contains, regex).' },
                { label: 'Extension Filter', text: 'Filter by file extension (.java, .txt, .pdf, etc.).' },
                { label: 'Size Filter', text: 'Filter by file size (greater than, less than, equals).' },
                { label: 'Date Filter', text: 'Filter by modification/creation date (before, after, between).' },
                { label: 'Logical Operators', text: 'Combine filters using AND, OR, NOT operators.' },
                { label: 'Type Filter', text: 'Filter by type: file, directory, or symbolic link.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Performance', text: 'Efficient traversal of large directory structures.' },
                { label: 'Extensibility', text: 'Easy to add new filter criteria without changing existing code.' },
                { label: 'Memory', text: 'Handle deep directory structures without stack overflow.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Specification pattern for composable filter criteria.',
                'Apply Composite pattern for AND/OR combinations of filters.',
                'Implement Iterator pattern for directory traversal.',
                'Use Strategy pattern for different matching algorithms.',
                'Design for lazy evaluation to handle large file systems.',
                'Handle edge cases: permission denied, symbolic link cycles.',
                'Consider parallel traversal for performance optimization.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Unix Find Command
        // Core: FileFinder, Filter (interface), AndFilter, OrFilter, NameFilter, SizeFilter
        // Asked at: Amazon, Google
        
    }
}`
    }
};
