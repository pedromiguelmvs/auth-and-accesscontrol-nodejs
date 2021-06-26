const { Router } = require('express');
const router = Router();

const UserController = require('./controllers/UserController');

router.get('/', (req, res) => {
    res.json({ ok: true });
});

router.get('/users', UserController.index);
router.get('/users/:username', UserController.show);
router.post('/create', UserController.store);

module.exports = router;