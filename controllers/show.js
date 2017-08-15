const express = require('express');
const User = require('../models/user');
const Show = require('../models/show');
const router = express.Router({mergeParams: true});

//Display all shows
router.get('/', (req,res) => {
    Show.find().then((shows) => {
        res.json(shows)
    });
});

//Display Individual Show
router.get('/:id', (req,res)=> {
    Show.findById(req.params.id).then((show) => {
        res.json(show);
    });
})


module.exports = router;