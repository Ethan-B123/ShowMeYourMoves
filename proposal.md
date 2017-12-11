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

- [ ] An activity map that shows other Smash Players and Hosts around the user
- [ ] A 'More Info' page for both Smash Players and Hosts
- [ ] A message button that opens up a chat window
- [ ] Login with FaceBook, Google, and regular login
- [ ] A sidebar that shows all of the user's previous chats
- [ ] User profile settings allows user to choose if they're a Host or just a Smash Player

### Bonus Features:

- [ ] A 'Report' button to report bad Smash Players/Hosts

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
- [ ] Figure out Git workflow (EB, FL, BW)
- [ ] Setup boiler plate code for Redux cycle for session (reducers, actions, api util) (FL)
  - Reducers
  - Actions
  - API Util
- [ ] Start getting basic Rails backend setup (BW)
  - User model
  - Users and Sessions controllers
  - Routes
  - Setup PostgreSQL
  - Run rails migrations
- [ ] Get login and signup forms functioning (BW)
  - FaceBook login
  - Google login
  - Regular login
  - Regular signup
- [ ] Start working on Google Maps integration (EB)

### Day 2
- [ ] Finish integrating with Google Maps (EB)
- [ ] Start building Activity Map functionality (EB)
  - Get Players and Host to show up on map based on user's location
  - Have modal thing slide up from bottom when you click on a Smash Player or Host with:
    - 'More Info' button (live link)
    - 'Message' button (doesn't do anything yet. dead link for now)
    - Skill level and main Smash game info
- [ ] Finish building Rails backend and smooth out login/signup bugs (BW)
- [ ] Build app header component (BW)
  - Header text
  - Hamburger menu
  - Back button depending on current page
- [ ] Start building side bar menu (BW)
  - list of previous chats (dead links for now)
  - link to User Settings (live link)
  - link to Activity Map (live link)
- [ ] Finish building session Redux cycle (FL)
- [ ] Start building User Settings component (FL)
  - user settings form
  - image upload functionality
- [ ] Start building 'More Info' component (FL)
  - Host
  - Smash Player

### Day 3
- [ ] Finish Activity Map (EB)
- [ ] Finish User Settings (FL)
- [ ] Finish More Info (FL)
- [ ] Finish Side Bar (BW)
- [ ] Start building Chat component (FL)
  - Websocket functionality
- [ ] Start setting up chat history backend (BW)
  - Run rails migration
    - Chats table

### Day 4
- [ ] Finish Chat component (FL)
- [ ] Finish Chat history backend setup (BW)
  - Add 'fetch chat' functionality within Side Bar component
- [ ] Work through Activity Map quirks (EB)
- [ ] Push app to Heroku (EB)
- [ ] Start working on demo page (all)

### Day 5
- [ ] Continue working through bugs (all)
- [ ] Finish demo page (all)
- [ ] User testing with friends and family (all)
- [ ] Polish UI/UX (all)

### Day 6
- [ ] Push to app store (all)
- [ ] Create README (all)
