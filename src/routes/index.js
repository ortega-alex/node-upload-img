const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    console.log(req.file);
    res.render('index');
});

module.exports = router;