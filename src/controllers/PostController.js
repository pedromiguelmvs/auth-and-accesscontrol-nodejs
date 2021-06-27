const Posts = require('../models/Posts');
const Users = require('../models/Users');

module.exports = {
    async store(req, res) {
        const { title, description } = req.body;
        const { id } = req.params;

        if (!title || !description) {
            return res.status(422).json({ error: 'Preencha todos os campos necessários.' });
        }

        const user = await Users.findOne({ where: { id } });

        Posts.sync().then(async () => {
            await Posts.create({ title, description, UserId: user.id });
        });

        return res.status(200).json({ title, description });
    },
    async show(req, res) {
        const { id } = req.params;

        const post = await Posts.findOne({ where: { id } });

        return res.status(200).json({ post })
    }
}