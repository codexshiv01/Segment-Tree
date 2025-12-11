import { tcsData } from '../src/data/companies/tcs.js';

console.log('Successfully imported tcsData');
console.log('Assessments:', tcsData.assessments.length);
console.log('First assessment problems:', tcsData.assessments[0].problems.length);
