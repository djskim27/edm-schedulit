const express = require('express');
const User = require('../models/user');
const Show = require('../models/show')
const router = express.Router({mergeParams: true});

//Get List of Users
router.get('/', (req,res) => {
    User.find().then((Users) => {
        res.json(Users)
    }).catch(err => console.log(err))
});

//User's individual show page
router.get('/:userId', (req,res)=> {
    User.findById(req.params.userId).then((user) => {
        res.json(user);
    }).catch(err => console.log(err))
})

//Get User's Events
router.get('/:userId/showsList',(req,res)=> {
    User.findById(req.params.userId).then((user)=> {
        const showsList = user.showsList
        res.json(showsList);
    })


})

//Show Specific User Event
router.get('/:userId/showsList/:showId', (req,res) => {
    User.findById(req.params.userId).then((user)=> {
        // const showsList = user.showsList
        const foundShow = user.showsList.find((show)=>{
            return show.id === req.params.showId
        })
        console.log(foundShow);
        res.json(foundShow)
    }).catch(err => console.log(err))
})

//Delete Specific User Event
router.get('/:userId/showsList/:showId/delete', (req,res) => {
    User.findById(req.params.userId).then((user)=> {
        // const showsList = user.showsList
        const Index = user.showsList.findIndex((show)=>{
            return show.id === req.params.showId
        })
        
       user.showsList.splice(Index, 1);
       user.save();
      
    }).catch(err => console.log(err))
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