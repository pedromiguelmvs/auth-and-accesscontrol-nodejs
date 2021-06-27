const Users = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    async create(req, res) {
        const { email, password } = req.body;

        const user = await Users.findOne({ where: { email } });

        const verifyPassword = await bcryptjs.compare(password, user.password);

        if (!verifyPassword) {
            return res.status(403).json({ error: 'Usuário ou senha inválidos!' });
        }

        const token = jwt.sign({ email },
            'NyZFCZMZYgK6H4GYeLaNUubcWComZkZnyXzxbaTvUG8EvUTuDNWO2', {
                expiresIn: "2h" // validade de 2 horas
        });
        
        return res.status(200).json({ token });
    }
}