const { Router } = require('express');
const router = Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

router.get('/', (req, res) => {
    res.json({ ok: true });
});

router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.post('/create', UserController.store);
router.put('/edit/:id', UserController.update);

router.post('/login', SessionController.create);

module.exports = router;