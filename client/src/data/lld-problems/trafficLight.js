export const trafficLightProblem = {
    id: 'traffic-light',
    title: 'Design Traffic Light System',
    difficulty: 'Medium',
    companies: ['Google', 'Uber', 'Tesla', 'Waymo'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design a traffic light control system for a multi-way intersection. The system should manage light states, handle pedestrian crossing requests, implement emergency vehicle priority, and adapt timing based on traffic density.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Light States', text: 'Manage RED, YELLOW, GREEN states with configurable durations.' },
                { label: 'Multi-Way Control', text: 'Coordinate lights at 4-way intersection to prevent conflicts.' },
                { label: 'Pedestrian Crossing', text: 'Handle pedestrian button press and walk signals.' },
                { label: 'Emergency Override', text: 'Give green light priority to approaching emergency vehicles.' },
                { label: 'Turn Signals', text: 'Support dedicated left/right turn arrows.' },
                { label: 'Time-Based Patterns', text: 'Different timing for rush hour vs off-peak.' },
                { label: 'Sensor Input', text: 'Adjust timing based on traffic density sensors.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Safety', text: 'Never allow conflicting directions to have green simultaneously.' },
                { label: 'Responsiveness', text: 'Emergency override should trigger within seconds.' },
                { label: 'Reliability', text: 'Fail-safe to flashing red on system failure.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use State pattern for traffic light states (RED, YELLOW, GREEN).',
                'Implement Observer pattern for sensor/button event handling.',
                'Apply Strategy pattern for different timing algorithms.',
                'Design proper synchronization between intersecting roads.',
                'Use Timer/Scheduler for state transitions.',
                'Handle edge cases: stuck sensor, power failure, conflicting requests.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Traffic Light System
        // Core: TrafficLight, Intersection, Controller, Sensor, Timer
        
    }
}`
    }
};
