const tracertService = require('../service/tracert')
const tracertController = {
    async getTracertLocation(req, res){
        try {
            const ip = req.body.ip
            const tracertLocation = await tracertService.getTracert(ip)
            
            res.status(201).send({tracertLocation})

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = tracertController