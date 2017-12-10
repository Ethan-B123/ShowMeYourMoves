# Show Me Your Moves

### Show Me Your Moves is a mobile app that allows Super Smash Bros players to connect with each other and play.

## Background and Overview (eb)

As students at App Academy who love playing Super Smash Brothers, we wanted to create an opportunity for Smash Brothers players to connect and meet up to play.

Currently there are only ways to organize for online play but not so much in person.

This app will hopefully serve that need because we know there are probably a lot of players in the Bay area who want to connect and play Smash together.

Our app will consist of two key features:
- A map that shows other smash players around you
- A way to connect and chat with those players

## Functionality & MVP (bw)

[ ] A map that shows other smash players around you
[ ] A message button that opens up a chat window
[ ] Login with FaceBook, Google, and regular login
[ ] A sidebar that shows all of your chat history
[ ] User profile settings
[ ] allowing you to choose if you're a host or a just a smash player

## Technologies & Technical Challenges (fl)

Backend: Ruby/Rails

Frontend: React.native/JavaScript/Redux

### Logging In with Oauth

- We'll need to figure out a way to incorporate Facebook/Google login with React native and also a Rails backend. At a quick Google search, we saw guides that are good for having a Node.js backend, but not Rails we'll need to figure this out.

### Location Challenges (Google Maps Integration)

- Figuring out how to integrate Google maps so that it's the main page that users are taken to as soon as they log in.
- User's personal privacy is important so we want a way to not broadcast their addresses publicly but still show their general location on the map (kind of like airbnb) with like a pin drop.
- We need a way to only show users within some radius of your location instead of all users in the world.

Making a clear easy to use interface on the map.
The main functionality will be the map so it's going to have to be really easy to use.

### Chat (WebSockets)
- Figuring out a way to get a live chat up and runnign via WebSockets
- figuring out a way to get notifications (also via websockets)

### User Flow
- HAving it so that users are taken to their user settings page immediately after they sign up for the first time, but then after they log in later, they're taken to the map instead.

### Git workflow
figure out a system to effectively collaborte even when we're working separately with Git.

## Wireframes (fl)
https://xd.adobe.com/view/ca63fccb-19f6-4d65-adbf-9bb6c189288c

## Accomplished over the Weekend (eb)

## Group Members & Work Breakdown (bw)

### Ethan Bjornsen, Francis Lara, Brillante Wang

Expectation is that with each thing done, CSS/styling will be 100% completed as well.

### Day 1
- figure out Git workflow (EB, FL, BW)
- integrate Backend auth with rails user auth

Frontend auth
  - Redux cycle for session (reducers, actions, api util) (FL)
  - Getting basic rails backend integrated with react.native (EB)
  - Redirecting to user settings page upon signup (BW)
- get Login page up and running with FB, Google, and regular login (BW)
- login form (EB)
- sign up form (FL)

### Day 2
- Integrate Google maps to start working on activity map (EB)
- app header (BW)
- hamburger menu (BW)
- Create user settings page (FL)
  - user settings form
  - image upload

### Day 3
- Finish Activity Map, user info, and host info pages general debugging. (EB)
- Start working on messaging (FL)
- create side bar menu (BW)
- Work on chat history backend setup (BW)

### Day 4
- Get heroku set up
- Polish

### Day 5
- try to find bugs and crash the App
- user testing
- improve UI/UX

### Day 6
- push to app store
- Create README
