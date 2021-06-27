const bcryptjs = require('bcryptjs');
const Users = require('../models/Users');
const Posts = require('../models/Posts');
const auth = require('../middlewares/auth');

module.exports = {
    async store(req, res) {
        Users.sync().then(async () => {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(422).json({ error: 'Preencha todos os campos necessários.' });
            }
            
            const userExists  = await Users.findOne({ where: { email } })
    
            if (userExists) {
                return res.status(409).json({ error: 'Usuário já existente' });
            }

            bcryptjs.hash(password, 10, async (err, hash) => {
                if (err) {
                    return res.status(500).json({ error: 'Erro ao criptografar a senha' })
                }

                await Users.create({ email, password: hash });
            });
            
            return res.status(200).json({ email });
        });
    },
    async index(req, res) {
        const { token } = req.headers;

        await auth(token, req, res);

        Users.sync().then(async () => {
            const users = await Users.findAll();

            return res.status(200).json({ users });
        });
    },
    async show(req, res) {
        Users.sync().then(async () => {
            const { id } = req.params;

            const user = await Users.findOne({ where: { id } });
            const posts = await Posts.findAll({ where: { UserId: id } });

            return res.status(200).json({ user, posts });
        });
    },
    async update(req, res) {
        const { id } = req.params;
        const { email, password } = req.body;

        let user = await Users.findOne({ where: { id } });

        bcryptjs.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao criptografar a senha' })
            }

            user.email = email;
            user.password = hash;

            await user.save();
        });

        return res.status(200).json({ email });
    }
}