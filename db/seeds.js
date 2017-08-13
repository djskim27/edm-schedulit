require('dotenv').config();
const mongoose = require('mongoose');
const moment = require('moment');
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://localhost/edm-schedulit');

const Artist = require('../models/artist');
const Show = require('../models/show');
const User = require('../models/user');

//es6 promises
mongoose.Promise = global.Promise;

//clear the database of existing artists, events, and users
Artist.remove({}, function(err){
  console.log(err);
});

Show.remove({}, function(err){
  console.log(err);
});


User.remove({}, function(err){
  console.log(err);
});

//create new artists
const adventureClub = new Artist({
    name: 'Adventure Club',
    imgUrl: 'http://i.imgur.com/hX4YLQW.png',
    soundCloud: 'https://soundcloud.com/adventureclub',
    youtubeUrl: 'https://www.youtube.com/watch?v=Oszb5beM4UM'
});

adventureClub.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const slander = new Artist({
    name: 'Slander',
    imgUrl: 'http://i.imgur.com/pcTPWYE.png',
    soundCloud: 'https://soundcloud.com/slanderofficial',
    youtubeUrl: 'https://www.youtube.com/watch?v=2MrsVQ12xao'
});

slander.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const rlGrime = new Artist({
    name: 'RL Grime',
    imgUrl: 'http://i.imgur.com/1dOXN1y.png',
    soundCloud: 'https://soundcloud.com/rlgrime',
    youtubeUrl: 'https://www.youtube.com/watch?v=ElWTWoCSIk0'
});

rlGrime.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const krewella = new Artist({
    name: 'Krewella',
    imgUrl: 'http://i.imgur.com/pQGxzCQ.png',
    soundCloud: 'https://soundcloud.com/krewella',
    youtubeUrl: 'https://www.youtube.com/watch?v=MP6QDwozwiE'
});

krewella.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const alanWalker = new Artist({
    name: 'Alan Walker',
    imgUrl: 'http://i.imgur.com/gvyXeJ9.png',
    soundCloud: 'https://soundcloud.com/alanwalker',
    youtubeUrl: 'https://www.youtube.com/watch?v=DSn0GIuVbBs'
});

alanWalker.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

//create new shows
const adventureClubAtlanta = new Show({
    name: 'Adventure Club',
    date: moment('10/24/2017', 'MM/DD/YYYY', true).format(), 
    city: 'Atlanta',
    state: 'Georgia',
    venue: 'The Tabernacle',
    eventPage: 'https://concerts1.livenation.com/event/0E0052FBFB3BA5CF?irgwc=1&clickid=whdQHE26SRruxbwxdgRt6xXnUkmxkQ2ps1tnXw0&camefrom=CFC_BUYAT_254533&impradid=254533&REFERRAL_ID=tmfeedbuyat254533&wt.mc_id=aff_BUYAT_254533&utm_source=254533-EDM%2520Train%2520LLC&impradname=EDM%2520Train%2520LLC&utm_medium=affiliate',
    artistList: [adventureClub]


});

adventureClubAtlanta.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

const alanWalkerAtlanta = new Show({
    name: 'Alan Walker',
    date: moment('09/01/2017', 'MM/DD/YYYY', true).format(), 
    city: 'Atlanta',
    state: 'Georgia',
    venue: 'Opera Night Club',
    eventPage: 'https://www.eventbrite.com/e/alan-walker-illuminate-090117-tickets-34809662638',
    artistList: [alanWalker]


});

alanWalkerAtlanta.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

const krewellaAtlanta = new Show({
    name: 'Krewella',
    date: moment('10/19/2017', 'MM/DD/YYYY', true).format(), 
    city: 'Atlanta',
    state: 'Georgia',
    venue: 'Tabernacle',
    eventPage: 'https://concerts1.livenation.com/event/0E0052D6AFEE3D25?irgwc=1&clickid=whdQHE26SRruxbwxdgRt6xXnUkmxkj09s1tnXw0&camefrom=CFC_BUYAT_254533&impradid=254533&REFERRAL_ID=tmfeedbuyat254533&wt.mc_id=aff_BUYAT_254533&utm_source=254533-EDM%2520Train%2520LLC&impradname=EDM%2520Train%2520LLC&utm_medium=affiliate',
    artistList: [krewella]


});

krewellaAtlanta.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

// const imagineFestivalDayOne = new Show({
//     name: 'Imagine Festival',
//     date: moment('09/22/2017', 'MM/DD/YYYY', true).format(), 
//     city: 'Hampton',
//     state: 'Georgia',
//     venue: 'Atlanta Motor Speedway',
//     eventPage: 'http://www.imaginefestival.com/',
//     artistList: []


// });

// imagineFestivalDayOne.save(function(err) {
//     if (err) console.log(err);
//     console.log('show created!');
// });

// const imagineFestivalDayTwo = new Show({
//     name: 'Imagine Festival',
//     date: moment('09/23/2017', 'MM/DD/YYYY', true).format(), 
//     city: 'Hampton',
//     state: 'Georgia',
//     venue: 'Atlanta Motor Speedway',
//     eventPage: 'http://www.imaginefestival.com/',
//     artistList: []


// });

// imagineFestivalDayTwo.save(function(err) {
//     if (err) console.log(err);
//     console.log('show created!');
// });

// const imagineFestivalDayThree = new Show({
//     name: 'Imagine Festival',
//     date: moment('09/24/2017', 'MM/DD/YYYY', true).format(), 
//     city: 'Hampton',
//     state: 'Georgia',
//     venue: 'Atlanta Motor Speedway',
//     eventPage: 'http://www.imaginefestival.com/',
//     artistList: []


// });

// imagineFestivalDayThree.save(function(err) {
//     if (err) console.log(err);
//     console.log('show created!');
// });

const slanderAtlanta = new Show({
    name: 'Slander',
    date: moment('09/15/2017', 'MM/DD/YYYY', true).format(), 
    city: 'Atlanta',
    state: 'Georgia',
    venue: 'Opera Night Club',
    eventPage: 'https://edmtrain.com/georgia?event=64475&tickets',
    artistList: [slander]


});

slanderAtlanta.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

const rlGrimeAtlanta = new Show({
    name: 'RL Grime',
    date: moment('10/31/2017', 'MM/DD/YYYY', true).format(), 
    city: 'Atlanta',
    state: 'Georgia',
    venue: 'Tabernacle',
    eventPage: 'https://concerts1.livenation.com/event/0E0052BFC3612E37?irgwc=1&clickid=whdQHE26SRruxbwxdgRt6xXnUkmxklz5s1tnXw0&camefrom=CFC_BUYAT_254533&impradid=254533&REFERRAL_ID=tmfeedbuyat254533&wt.mc_id=aff_BUYAT_254533&utm_source=254533-EDM%2520Train%2520LLC&impradname=EDM%2520Train%2520LLC&utm_medium=affiliate',
    artistList: [rlGrime]


});

rlGrimeAtlanta.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

//new User

const DizzDee = new User ({
    userName: 'DizzDEE',
    firstName: 'David',
    lastName: 'Kim',
    showsList: []

})

DizzDee.save((err)=> {
    if (err) console.log(err);
    console.log('user created!');
})

mongoose.connection.close();