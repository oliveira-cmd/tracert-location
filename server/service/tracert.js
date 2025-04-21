const { exec } = require('child_process');

function parseTracertOutput(output) {
    const lines = output.split('\n').slice(1); // Ignora a primeira linha
    const hops = [];

    lines.forEach(line => {
        const match = line.trim().match(/^(\d+)\s+(.+?)\s+(.+?)\s+(.+?)\s+(.*)$/);

        if (match) {
            const [, hop, time1, time2, time3, ip] = match;
            hops.push({
                hop: parseInt(hop),
                times: [time1, time2, time3],
                ip: ip.trim()
            });
        }
    });

    return hops;
}

const tracertService = {
    async getTracert(ip) {
        return new Promise((resolve, reject) => {
            exec(`tracert ${ip}`, { encoding: 'utf8' }, (error, stdout, stderr) => {
                if (error) return reject(error);
                if (stderr) return reject(stderr);

                const result = parseTracertOutput(stdout);
                resolve(result);
            });
        });
    }
};

module.exports = tracertService;
