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

const eventSchema = new Schema({
    name: String,
    date: Date,
    city: String,
    state: String,
    venue: String,
    artistList: [artistSchema]

});

const userSchema = new Schema({
    userName: String,
    firstName: String,
    lastName: String,
    eventsList: [eventSchema]
    
});

userSchema.pre('save', (next)=>{
    now = new Date();
    this.updated_at = now;
    if ( !this,create_at) {
        this.created_at = now;
    }
    next();
});

const Artist = mongoose.model('Artist', artistSchema);
const Event = mongoose.model('Event', eventSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Artist,
    Event,
    User
};