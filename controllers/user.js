const express = require('express');
const User = require('../models/user');
const router = express.Router();

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

// router.post('/login'),(req,res) => {
//     const username = req.body.userName;
//     const password = req.body.password;
    

//     User.find().then((users) => {
//         const foundUser = users.find((user)=>{
//             return user.username === username;
//         });
//         if (foundUser.password === password){
//             res.json(foundUser)
//         } else {
//             res.send('INCORRECT PASSWORD');
//         }
//         res.json(foundUser);
        
//     }).catch((err)=>{
//         res.send('username does not exist')
//     })
// }
module.exports = router;