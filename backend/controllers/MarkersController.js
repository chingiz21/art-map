const { Markers } = require("../models/models");

class MarkersController {

    async addMarker(req, res) {
        try {
            const { latitude, longitude } = req.body;
            
            const marker = Markers.create({ latitude, longitude })

            res.json(marker);

        } catch (error) {
            res.json(error);
        }
    }

    async fetchallMarkers(req, res) {
        try {
            const markers = await Markers.findAll();

            return res.json(markers);
        
        } catch (error) {
            console.error(e);
        }
    }
}

module.exports = new MarkersController();