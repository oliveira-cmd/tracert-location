const axios = require('axios');
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
    },
    async locationByIp(tracert) {
        const data = []
        try {
            const ip_address = this.extractIp(tracert);
    
            for (const ip of ip_address) {
                const response = await axios.get(`https://ipwho.is/${ip}`);
                if(response.data.success){
                    data.push(response.data)
                }
            }
            return data
    
        } catch (error) {
            console.log(error.message);
        }
    },
    

    extractIp(hops){
        return hops.map(hop => {
            const match = hop.ip.match(/\b\d{1,3}(\.\d{1,3}){3}\b/);
            return match ? match[0] : null;
        }).filter(ip => ip !== null);
    }

};

module.exports = tracertService;
