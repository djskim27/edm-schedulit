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
    youtubeUrl: 'https://www.youtube.com/embed/JDMfpeUWS3Q'
});

adventureClub.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const slander = new Artist({
    name: 'Slander',
    imgUrl: 'http://i.imgur.com/pcTPWYE.png',
    soundCloud: 'https://soundcloud.com/slanderofficial',
    youtubeUrl: 'https://www.youtube.com/embed/bPJEykXiJgk'
});

slander.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const rlGrime = new Artist({
    name: 'RL Grime',
    imgUrl: 'http://i.imgur.com/1dOXN1y.png',
    soundCloud: 'https://soundcloud.com/rlgrime',
    youtubeUrl: 'https://www.youtube.com/embed/5ICoA-NT9oQ'
});

rlGrime.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const krewella = new Artist({
    name: 'Krewella',
    imgUrl: 'http://i.imgur.com/pQGxzCQ.png',
    soundCloud: 'https://soundcloud.com/krewella',
    youtubeUrl: 'https://www.youtube.com/embed/76jARSWqcdM'
});

krewella.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const alanWalker = new Artist({
    name: 'Alan Walker',
    imgUrl: 'http://i.imgur.com/gvyXeJ9.png?1',
    soundCloud: 'https://soundcloud.com/alanwalker',
    youtubeUrl: 'https://www.youtube.com/embed/2i2khp_npdE'
});

alanWalker.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const floss = new Artist({
    name: 'Flosstradamus',
    imgUrl: 'http://www.billboard.com/files/media/flosstradamus-2017-cr-justin-hollar-billboard-1548.jpg',
    soundCloud: 'https://soundcloud.com/flosstradamus',
    youtubeUrl: 'https://www.youtube.com/embed/OcvunrplrZc'
});

floss.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const martinGarrix = new Artist({
    name: 'Martin Garrix',
    imgUrl: 'https://images7.alphacoders.com/713/713304.jpg',
    soundCloud: 'https://soundcloud.com/martingarrix',
    youtubeUrl: 'https://www.youtube.com/embed/pNNMr5glICM'

});

martinGarrix.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const marshmello = new Artist({
    name: 'Marshmello',
    imgUrl: 'http://www.thenocturnaltimes.com/wp-content/uploads/2016/10/marshmello-1.jpg',
    soundCloud: 'https://soundcloud.com/marshmellomusic',
    youtubeUrl: 'https://www.youtube.com/embed/YnwsMEabmSo'

});

marshmello.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});

const lilJon =  new Artist({
    name: 'lilJon',
    imgUrl: 'data:image/jpeg;base64,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',
    soundCloud: 'https://soundcloud.com/lil_jon',
    youtubeUrl: 'https://www.youtube.com/embed/HMUDVMiITOU'

});

lilJon.save(function(err) {
    if (err) console.log(err);
    console.log('artist created!');
});


//create new shows
const adventureClubAtlanta = new Show({
    name: 'Adventure Club',
    date: moment('10/24/2017', 'MM/DD/YYYY', true).format(), 
    stringDate:'TUES, OCT 24',
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

const alanWalkerOrlando = new Show({
    name: 'Alan Walker',
    date: moment('11/10/2017', 'MM/DD/YYYY', true).format(), 
    stringDate: 'FRI, NOV 10',
    city: 'Orlando',
    state: 'Florida',
    venue: 'Tinker Field',
    eventPage: 'https://orlando.electricdaisycarnival.com/tickets/',
    artistList: [alanWalker]


});

alanWalkerOrlando.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

const krewellaAtlanta = new Show({
    name: 'Krewella',
    date: moment('10/19/2017', 'MM/DD/YYYY', true).format(),
    stringDate: 'THU, OCT 19', 
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

const slanderVegas = new Show({
    name: 'Slander',
    date: moment('11/03/2017', 'MM/DD/YYYY', true).format(),
    stringDate:'FRI, NOV 03', 
    city: 'Las Vegas',
    state: 'Nevada',
    venue: 'Intrigue',
    eventPage: 'https://www.ticketfly.com/purchase/event/1566249?utm_medium=946393&q=ef20336c-f862-4a29-8176-db7bf8c7deac&p=75296579-9d92-4f28-a9c0-98999d939557&ts=1506538667&c=ticketfly&e=007323&rt=Safetynet&h=1c745fc3d217c54abc303e258456d65d',
    artistList: [slander]


});

slanderVegas.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

const rlGrimeAtlanta = new Show({
    name: 'RL Grime',
    date: moment('10/31/2017', 'MM/DD/YYYY', true).format(), 
    stringDate: 'TUES, OCT 31',
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

const flossAtlanta = new Show({
    name: 'Flosstradamus',
    date: moment('10/12/2017', 'MM/DD/YYYY', true).format(), 
    stringDate: 'THU, OCT 12',
    city: 'Atlanta',
    state: 'Georgia',
    venue: 'Opera Nightclub',
    eventPage: 'https://www.eventbrite.com/e/flosstradamus-thursday-october-12th-2017-atlanta-tickets-36971905966',
    artistList: [floss]


});

flossAtlanta.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

const martinVegas = new Show({
    name: 'Martin Garrix',
    date: moment('10/14/2017', 'MM/DD/YYYY', true).format(), 
    stringDate: 'WED, OCT 14',
    city: 'Las Vegas',
    state: 'Nevada',
    venue: 'Wet Republic',
    eventPage: 'https://edmtrain.com/nevada?event=62167&tickets',
    artistList: [martinGarrix]


});

martinVegas.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

const marshmelloVegas = new Show({
    name: 'Marshmello',
    date: moment('09/30/2017', 'MM/DD/YYYY', true).format(), 
    stringDate: 'SAT, SEP 30',
    city: 'Las Vegas',
    state: 'Nevada',
    venue: 'Surrender Nightclub',
    eventPage: 'https://edmtrain.com/nevada?event=64859&tickets',
    artistList: [marshmello]


});

marshmelloVegas.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

const lilJonVegas = new Show({
    name: 'lil Jon',
    date: moment('11/18/2017', 'MM/DD/YYYY', true).format(), 
    stringDate: 'SAT, NOV 18',
    city: 'Las Vegas',
    state: 'Nevada',
    venue: 'Jewel Nightclub',
    eventPage: 'https://www.wantickets.com/Events/224560/Lil-Jon-At-JEWEL-Nightclub/?affCode=cba4a14ab7fb40039803',
    artistList: [lilJon]


});

lilJonVegas.save(function(err) {
    if (err) console.log(err);
    console.log('show created!');
});

//new User

const DizzDee = new User ({
    userName: 'DizzDEE',
    firstName: 'David',
    lastName: 'Kim',
    email: 'djs.kim27@gmail.com',
    password:'october27',
    showsList: []

})

DizzDee.save((err)=> {
    if (err) console.log(err);
    console.log('user created!');
})

mongoose.connection.close();