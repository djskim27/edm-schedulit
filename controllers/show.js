const express = require('express');
const Show = require('../models/show');
const router = express.Router();

router.get('/', (req,res) => {
    Show.find().then((shows) => {
        res.json(shows)
    });
});

router.get('/:id', (req,res)=> {
    Show.findById(req.params.id).then((show) => {
        res.json(show);
    });
})


module.exports = router;