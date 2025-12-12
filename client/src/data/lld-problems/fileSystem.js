export const fileSystemProblem = {
    id: 'file-system',
    title: 'Design In-Memory File System',
    difficulty: 'Hard',
    companies: ['Google', 'Dropbox', 'Amazon', 'Microsoft', 'Apple'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design an in-memory file system that supports creating, reading, and deleting files and directories. Implement operations like ls, mkdir, addContentToFile, readContentFromFile, and path resolution.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Directory Operations', text: 'Create directories (mkdir), list contents (ls), and delete empty directories.' },
                { label: 'File Operations', text: 'Create files, read content, write/append content, and delete files.' },
                { label: 'Path Resolution', text: 'Support absolute paths (/a/b/c) and navigate the directory tree.' },
                { label: 'List Contents', text: 'List directory contents in lexicographic order, distinguish files from folders.' },
                { label: 'Move/Copy', text: 'Move and copy files/directories between locations.' },
                { label: 'Search', text: 'Search for files by name or pattern within a directory tree.' },
                { label: 'Permissions', text: 'Basic read/write/execute permissions for files and directories.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Performance', text: 'Path lookups and directory listing should be efficient O(path_length).' },
                { label: 'Memory Efficiency', text: 'Store file contents efficiently, consider compression for large files.' },
                { label: 'Thread Safety', text: 'Handle concurrent read/write operations safely.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Composite pattern: File and Directory both implement FileSystemNode.',
                'Implement Trie-like structure for efficient path navigation.',
                'Apply Iterator pattern for directory traversal.',
                'Design proper exception handling for invalid paths and operations.',
                'Consider lazy loading for large directories.',
                'Handle edge cases: root directory, circular references, special characters in names.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // In-Memory File System
        // Core: FileSystem, Directory, File, FileSystemNode (interface)
        
    }
}`
    }
};
