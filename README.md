# gym-buddies

Welcome to the Gym, Buddy ;)

Let's turn the heat up by using <a href="firebase.com" target="_blank">Firebase</a> to start saving out our data and building a dynamic persistant chatting platform. 

Users should be able to share their workouts, recipies, and other bodybuilding tips for reaching health goals (AKA Get Awesome). Users should also be able to connect with each other through the global chatting program (Get Info)

The tasks ahead might get a bit tricky stick with it and take things on one at a time.

###Step 1 - Routing

You will notice if you take a look at the routes in `app/config/routes.js` that we are using ui-router and nested routes. The first couple routes have been setup for you.  You will need to setup the other two routes You will want to continue to keep them nested.

```javascript
.state('auth.chat'. {...})
.state('auth.share'. {...})
```

Notice after you get these other two routes setup keeping them nested under the `auth` route will ensure that the top navbar is in place for all its sub routes. 

