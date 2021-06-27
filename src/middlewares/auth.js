const jwt = require('jsonwebtoken');

const auth = (token, req, res) => {
    if (!token) {
        return res.status(403).json({ error: 'Usuário não autenticado!' });
    }

    jwt.verify(token, 'NyZFCZMZYgK6H4GYeLaNUubcWComZkZnyXzxbaTvUG8EvUTuDNWO2', function (err, decoded) {
        if (err) {
            return res.status(403).json({ error: 'Erro ao verificar o token de acesso!' });
        }
    });
}

module.exports = auth;