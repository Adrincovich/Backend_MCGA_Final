const router = require('express').Router();

const {
        loginUser,
        getUsers,
        validateUser,
        createUser,
        updateUser,
        activateUser,
        deleteUser
    } = require('../controllers/Users')

const authMiddleware = require('../Middlewares/Auth');

router.post('/login', loginUser);

router.get('/', getUsers);

router.post('/', authMiddleware, validateUser);

router.post('/add', authMiddleware, createUser);

router.put('/update/:id', authMiddleware, updateUser);

router.put('/activate/:id', authMiddleware, activateUser);

router.delete('/delete/:id', authMiddleware, deleteUser);

module.exports = router;