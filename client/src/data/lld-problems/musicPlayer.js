export const musicPlayerProblem = {
    id: 'music-player',
    title: 'Design Spotify Music Player',
    difficulty: 'Medium',
    companies: ['Spotify', 'Apple', 'Amazon Music', 'YouTube Music'],
    sections: [
        {
            title: 'Problem Statement',
            content: 'Design the music player component for Spotify that handles playlists, song playback, queue management, and playback controls. Focus on the core player logic including shuffle, repeat modes, and seamless transitions between songs.'
        },
        {
            title: 'Functional Requirements',
            items: [
                { label: 'Playback Controls', text: 'Play, pause, stop, next, previous, seek to position.' },
                { label: 'Playlist Management', text: 'Create playlists, add/remove songs, reorder tracks.' },
                { label: 'Queue System', text: 'Manage play queue with ability to add songs to "play next" or end.' },
                { label: 'Shuffle Mode', text: 'Random playback without repeating until all songs played.' },
                { label: 'Repeat Modes', text: 'Support repeat off, repeat playlist, and repeat single song.' },
                { label: 'Recently Played', text: 'Track and display recently played songs.' },
                { label: 'Cross-Device Sync', text: 'Sync playback state across multiple devices.' }
            ]
        },
        {
            title: 'Non-Functional Requirements',
            items: [
                { label: 'Gapless Playback', text: 'No silence gaps between consecutive songs.' },
                { label: 'State Persistence', text: 'Remember playback position and queue on app restart.' },
                { label: 'Low Latency', text: 'Controls should respond instantly.' },
                { label: 'Memory Efficient', text: 'Handle playlists with thousands of songs.' }
            ]
        },
        {
            title: 'Expectations',
            bullets: [
                'Use State pattern for player states (PLAYING, PAUSED, STOPPED, BUFFERING).',
                'Implement Strategy pattern for shuffle algorithms (Fisher-Yates shuffle).',
                'Apply Observer pattern to notify UI of playback state changes.',
                'Use Command pattern for playback controls (play, pause, next, etc.).',
                'Design efficient queue with O(1) next/previous operations.',
                'Handle edge cases: empty playlist, single song playlist, interrupted playback.',
                'Consider offline mode with downloaded songs.'
            ]
        }
    ],
    initialFiles: {
        "Main.java": `public class Main {
    public static void main(String[] args) {
        // Spotify Music Player
        // Core: MusicPlayer, Playlist, Song, Queue, PlaybackState
        // Asked at: Spotify
        
    }
}`
    }
};
