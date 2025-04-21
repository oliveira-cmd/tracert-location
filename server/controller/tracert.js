const tracertService = require('../service/tracert')
const tracertController = {
    async getTracertLocation(req, res){
        try {
            const ip = req.body.ip
            const tracertLocation = await tracertService.getTracert(ip)
            const ipLocation = await tracertService.locationByIp(tracertLocation)
            res.status(201).send(ipLocation)
            

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = tracertController