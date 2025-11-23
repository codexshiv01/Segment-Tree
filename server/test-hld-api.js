import fetch from 'node-fetch';

const testHldApi = async () => {
    try {
        console.log('Testing HLD API...');

        // 1. List all problems
        console.log('\nFetching all problems...');
        const listResponse = await fetch('http://localhost:5000/api/hld/problems');
        const problems = await listResponse.json();
        console.log(`Found ${problems.length} problems`);
        console.log('First problem:', problems[0]);

        // 2. Get problem details
        if (problems.length > 0) {
            const slug = problems[0].slug;
            console.log(`\nFetching details for ${slug}...`);
            const detailResponse = await fetch(`http://localhost:5000/api/hld/problems/${slug}`);
            const problem = await detailResponse.json();
            console.log('Problem details:', {
                title: problem.title,
                difficulty: problem.difficulty,
                companies: problem.companies,
                requirements: problem.functional_requirements.length
            });
        }

    } catch (error) {
        console.error('Test error:', error.message);
    }
};

testHldApi();
