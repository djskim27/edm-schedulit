const express = require('express');
const User = require('../models/user');
const Show = require('../models/show')
const router = express.Router({mergeParams: true});

//Get List of Users
router.get('/', (req,res) => {
    User.find().then((Users) => {
        res.json(Users)
    });
});

router.get('/:userId', (req,res)=> {
    User.findById(req.params.userId).then((user) => {
        res.json(user);
    });
})

//Create a new user
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
        res.send(200)
        
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

//Edit User
router.put('/:userId', (req,res) => {
    User.findByIdAndUpdate(req.body._id, req.body).then((user)=>{
       
        console.log('success!')
        res.json(user);
    }).catch((err) => {
        console.log(err);
    })
})

//Delete User
router.get('/:userId/delete', (req,res) =>{
    User.findByIdAndRemove(req.params.userId).then((user) => {
        console.log('success');
        res.send(200)
    }).catch((err) => {
        console.log(err)
    })
})



module.exports = router;