import fetch from 'node-fetch';

const testRegistration = async () => {
    try {
        console.log('Testing registration endpoint...');
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'test@example.com',
                password: 'test123',
                username: 'testuser',
                fullName: 'Test User'
            })
        });

        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Response:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Test error:', error.message);
    }
};

testRegistration();
