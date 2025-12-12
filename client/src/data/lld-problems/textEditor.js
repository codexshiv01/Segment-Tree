export const textEditorProblem = {
    id: 'text-editor',
    title: 'Design Text Editor with Undo/Redo',
    difficulty: 'Medium',
    companies: ['Google', 'Microsoft', 'Atlassian', 'Notion'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a text editor that supports basic text operations along with undo/redo functionality. Handle cursor movement, text selection, copy/paste, and find/replace operations with efficient memory management for version history.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Text Operations', text: 'Insert, delete, and replace text at cursor position.' },
                { label: 'Cursor Management', text: 'Move cursor, track position, support text selection.' },
                { label: 'Undo/Redo', text: 'Unlimited undo with redo support; clear redo stack on new edit.' },
                { label: 'Copy/Cut/Paste', text: 'Clipboard operations with selection support.' },
                { label: 'Find & Replace', text: 'Search text with replace single or replace all.' },
                { label: 'Word Count', text: 'Track character, word, and line counts.' },
                { label: 'Auto-Save', text: 'Periodic auto-save with version snapshots.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Memory Efficiency', text: 'Store diffs instead of full copies for history.' },
                { label: 'Performance', text: 'Fast insert/delete even for large documents.' },
                { label: 'Responsive', text: 'No lag while typing.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use Command pattern for encapsulating edit operations.',
                'Implement Memento pattern for saving/restoring editor state.',
                'Consider Rope data structure for efficient large text handling.',
                'Design proper undo stack with command objects.',
                'Handle grouped operations (e.g., paste as single undo unit).',
                'Consider collaborative editing extension with OT/CRDT.',
                'Handle edge cases: undo at beginning, redo after new edit.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Text Editor with Undo/Redo
        // Core: TextEditor, Command, UndoManager, Cursor, Selection
        
    }
}`
    }
};
