const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//es6 promise
mongoose.Promise = global.Promise;

const artistSchema = new Schema({
    name: String,
    imgUrl: String,
    soundCloud: String,
    youtubeUrl: String
});

const showSchema = new Schema({
    name: String,
    date: Date,
    city: String,
    state: String,
    venue: String,
    eventPage: String,
    artistList: [artistSchema]

});

const userSchema = new Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    showsList: [showSchema]
    
});

userSchema.pre('save', (next)=>{
    now = new Date();
    this.updated_at = now;
    if ( !this.create_at) {
        this.created_at = now;
    }
    next();
});

const Artist = mongoose.model('Artist', artistSchema);
const Show = mongoose.model('Event', showSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Artist,
    Show,
    User
};