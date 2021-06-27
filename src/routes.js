const { Router } = require('express');
const router = Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const PostController = require('./controllers/PostController');

router.get('/', (req, res) => {
    res.json({ ok: true });
});

router.get('/users', UserController.index);
router.post('/user/create', UserController.store);
router.get('/user/:id', UserController.show);
router.put('/user/edit/:id', UserController.update);

router.post('/login', SessionController.store);

router.post('/posts/create/:id', PostController.store);
router.get('/post/:id', PostController.show);

module.exports = router;