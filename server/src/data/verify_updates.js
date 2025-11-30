import { dropboxData } from './companies/dropbox.js';
import { sprinklrData } from './companies/sprinklr.js';
import { walmartData } from './companies/walmart.js';
import { visaData } from './companies/visa.js';

const companies = [dropboxData, sprinklrData, walmartData, visaData];

console.log('\nVerifying updated companies...');

companies.forEach(company => {
    console.log(`\n${company.name} (${company.id})`);
    console.log(`   Logo: ${company.logo}`);
    company.assessments.forEach(a => {
        console.log(`   - ${a.title}: ${a.problems.length} problems`);
        a.problems.forEach(p => {
            console.log(`     * ${p.title} [${p.difficulty}]`);
            console.log(`       Examples: ${p.examples.length}`);
            console.log(`       Test Cases: ${p.testCases.length}`);
        });
    });
});
