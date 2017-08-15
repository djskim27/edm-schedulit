const express = require('express');
const User = require('../models/user');
const Show = require('../models/show')
const router = express.Router({mergeParams: true});

router.get('/', (req,res) => {
    User.find().then((Users) => {
        res.json(Users)
    });
});

router.get('/:id', (req,res)=> {
    User.findById(req.params.id).then((user) => {
        res.json(user);
    });
})

router.post('/signup', (req,res) => {
    const userName = req.body.userName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const newUser = new User();
    newUser.userName = userName;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email

    newUser.save().then((user)=>{
        res.json(user);
    }).catch((err)=> {
        console.log(err)
    })

});

//Add Show Object into User's ShowList
router.post('/:userId/add/:showId', (req,res)=>{
    const userId = req.params.userId;
    const showId = req.params.showId;
    
    Show.findById(showId).then((show)=>{
        const newShow = show;
        
        
        User.findById(userId).then((user)=>{
        user.showsList.push(newShow);
        user.save();
        console.log(user);
        
    }).catch((err)=>{
        console.log(err)
    })
    }).catch((err)=>{
        console.log(err)
    });
    
})

//edit route
router.put('/:id', (req,res) => {
    User.findByIdAndUpdate(req.params.id ,{userName: req.body.userName}).then((user)=>{
       
        res.json(user);
        
    }).catch((err) => {
        console.log(err);
    })
})

//delete
router.get('/:userId/delete', (req,res) =>{
    User.findByIdAndRemove(req.params.userId).then((user) => {
        console.log('success');

    }).catch((err) => {
        console.log(err)
    })
})



module.exports = router;