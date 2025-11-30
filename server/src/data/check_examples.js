import { flipkartData } from './companies/flipkart.js';
import { swiggyData } from './companies/swiggy.js';
import { zomatoData } from './companies/zomato.js';
import { atlassianData } from './companies/atlassian.js';
import { intuitData } from './companies/intuit.js';
import { jpmorganData } from './companies/jpmorgan.js';
import { goldmansachsData } from './companies/goldmansachs.js';

const companies = [
    flipkartData, swiggyData, zomatoData, atlassianData,
    intuitData, jpmorganData, goldmansachsData
];

console.log('\nChecking example counts...');

companies.forEach(company => {
    console.log(`\n${company.name}`);
    company.assessments.forEach(a => {
        a.problems.forEach(p => {
            console.log(`  - ${p.title}: ${p.examples.length} examples`);
            if (p.examples.length < 2) {
                console.log(`    [WARNING] Needs more examples!`);
            }
        });
    });
});
