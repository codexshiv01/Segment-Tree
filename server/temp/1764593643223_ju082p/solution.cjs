/**
 * @param {number} spot_price
 * @param {number} strike_price
 * @param {number} up_factor
 * @param {number} down_factor
 * @param {number} risk_free_rate
 * @param {number} periods
 * @return {number}
 */
function priceOption(spot_price, strike_price, up_factor, down_factor, risk_free_rate, periods) {
    // Your code here
}
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
let lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
    const spot_price = parseFloat(lines[0]);
    const strike_price = parseFloat(lines[1]);
    const up_factor = parseFloat(lines[2]);
    const down_factor = parseFloat(lines[3]);
    const risk_free_rate = parseFloat(lines[4]);
    const periods = parseInt(lines[5]);
    console.log(priceOption(spot_price, strike_price, up_factor, down_factor, risk_free_rate, periods).toFixed(2));
});