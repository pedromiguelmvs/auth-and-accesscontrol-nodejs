const Users = require('../models/User');

module.exports = {
    async store(req, res) {
        Users.sync().then(async () => {
            const { username, email } = req.body;

            if (!username || !email) {
                return res.status(422).json({ error: 'Preencha todos os campos necessários.' });
            }
            
            const userExists  = await Users.findOne({ where: { email } })
    
            if (userExists) {
                return res.status(409).json({ error: 'Usuário já existente' });
            }
    
            await Users.create({ username, email });
            
            return res.status(200).json({ username, email });
        });
    },
    async index(req, res) {
        Users.sync().then(async () => {
            const users = await Users.findAll();

            return res.status(200).json({ users });
        });
    },
    async show(req, res) {
        Users.sync().then(async () => {
            const { username } = req.params;

            const users = await Users.findOne({ where: { username } });

            return res.status(200).json({ users });
        });
    }
}