export const spreadsheetProblem = {
    id: 'spreadsheet',
    title: 'Design Excel/Google Sheets',
    difficulty: 'Hard',
    companies: ['Google', 'Microsoft', 'Apple', 'Notion'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a spreadsheet application like Excel or Google Sheets that supports cells with values and formulas, cell references, formula dependency graphs, and automatic recalculation when dependencies change.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Cell Operations', text: 'Set and get cell values by row/column address (A1, B2).' },
                { label: 'Data Types', text: 'Support numbers, text, dates, and boolean values.' },
                { label: 'Formulas', text: 'Support formulas like =A1+B2, =SUM(A1:A10), =IF(A1>0,B1,C1).' },
                { label: 'Cell References', text: 'Formulas can reference other cells; updates propagate.' },
                { label: 'Auto Recalculation', text: 'When a cell changes, recalculate all dependent cells.' },
                { label: 'Circular Detection', text: 'Detect and prevent circular references.' },
                { label: 'Copy/Paste', text: 'Copy cells with relative reference adjustment.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Performance', text: 'Efficient recalculation, only recompute affected cells.' },
                { label: 'Memory', text: 'Handle large sheets efficiently (sparse storage).' },
                { label: 'Correctness', text: 'Formula evaluation must be accurate.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use DAG (Directed Acyclic Graph) for formula dependencies.',
                'Implement topological sort for recalculation order.',
                'Apply Observer pattern for dependency notifications.',
                'Use Interpreter pattern for formula parsing and evaluation.',
                'Design sparse matrix for memory-efficient cell storage.',
                'Detect cycles using DFS/graph coloring.',
                'Handle edge cases: self-reference, invalid formulas, type mismatches.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Spreadsheet Application
        // Core: Sheet, Cell, Formula, DependencyGraph, FormulaEvaluator
        
    }
}`
    }
};
