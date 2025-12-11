import { hrtData } from '../src/data/companies/hrt.js';
import { quadeyeData } from '../src/data/companies/quadeye.js';
import { optiverData } from '../src/data/companies/optiver.js';
import { towerResearchData } from '../src/data/companies/tower_research.js';

console.log('HRT:', hrtData.assessments[0].problems.length);
console.log('Quadeye:', quadeyeData.assessments[0].problems.length);
console.log('Optiver:', optiverData.assessments[0].problems.length);
console.log('Tower Research:', towerResearchData.assessments[0].problems.length);
