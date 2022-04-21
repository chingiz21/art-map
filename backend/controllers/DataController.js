const { Data } = require('../models/models');
const path = require('path');
const generateId = require('../utils/generateRandom');

class DataController {

    async getOne(req, res) {
        try {
            const {id} = req.query;
            const art = await Data.findOne(
                {
                    where: { id }
                }
            );
            return res.json(art);
        } catch (error) {
            console.error(error);
        }

    }

    async addArtObject(req, res) {
        try {
            const { title, description, imgs, wikiLink, mapsLink, authorInfo } = req.body;
            // const { image } = req.files;
            // let fileName = generateId(10) + '.jpg';

            // image.mv(path.resolve(__dirname, '..', 'static', fileName));

            const artObject = Data.create({ title, description, imgs, wikiLink, mapsLink, authorInfo }).catch(e => console.error(e));

            return res.json(artObject);

        } catch (error) {
            return res.json(error + 'bad');
        }

    }

    async fetchAll(req, res) {
        const brands = await Data.findAll();
        return res.json(brands);
    }
}

module.exports = new DataController();