Heroku Deployment: https://edm-schedulit.herokuapp.com/

# ScheduLIT

Atlanta has become a booming scene for the Electronic Dance Music industry! Being a huge fan of dubstep, house, and trap myself, I wanted to build a platform that allowed users to keep track of every EDM event in the world! Because so many different events are advertised and sold on different platforms (Eventbrite, Tickmaster,etc), it has become extremely tedious to keep up with EVERY single show. In order to alleviate this problem, I attempted to build ScheduLIT!

This MERN CRUD app is a basic model for how I (as a frequent EDM event attendant) would want to keep track of AND schedule all EDM events of personal interest. On the homepage, users can see several events listed in order of date and add them to their personal event schedule. ScheduLIT also has Soundcloud and Youtube links for specific DJs/artists for users to help influence themselves in adding shows!

##Features of ScheduLIT

* User can log in
* User can log out
* User can delete account AND create new account
* User can view event details AND add events to their personal schedule in profile
* User can view each event in their profile; if user isn't feeling the event then he or she can delete event off of page
* User can view youtube video of each artist; see event details and go to artist;s SoundCloud/event page.
* BUG*** Refreshing the page resets the LOGGED IN state of the APP.JS component so do not reset :)

## Project Planning

* ERD 
![alt text](http://i.imgur.com/7HGDiCg.jpg)

* Wireframe
![alt text](http://i.imgur.com/QoA7vDU.jpg) 


* Trello: https://trello.com/b/ffHOfTxH/schedulit




##Technologies Used

* MERN (Mongoose/ExpressJS/ReactJS/NodeJs)
* React-Bootstrap

##Future Development

* Add a search function for events so users can search by Location OR Artist
* Geolocation so local events pop up first for every user
* Integrate EDM Train API for database of every EDM event in North America
* Use Soundcloud API for authentication AND build a custom Soundcloud client 
* User Authentication!!!!!


