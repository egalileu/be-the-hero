const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, resposnse) {
        const ongs = await connection('ongs').select('*');
    
        return resposnse.json(ongs);
    },

    async create (request, resposnse) {
        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        }) 
        
        return resposnse.json({id});
    }
};