const http = require('http');

const data = JSON.stringify({
    language: 'javascript',
    code: 'function merge(intervals) { return intervals; }',
    problemId: 'merge-intervals'
});

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/dsa/run',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

    res.setEncoding('utf8');
    let body = '';
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', () => {
        console.log('BODY:', body);
    });
});

req.on('error', (e) => {
    console.error(`REQUEST ERROR: ${e.message}`);
});

req.write(data);
req.end();
