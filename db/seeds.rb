# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
a = User.create(
  email: "steveo@gmail.com", 
  password: "password", 
  display_name: "IntermediateSteve",
  description: "This is a description",
  game: "Melee",
  skill_level: "Intermediate",
  main: "Green Falco",
  pronouns: "he/him/his",
  age: 41
)
b = User.create(
  email: "joe@gmail.com", 
  password: "password", 
  display_name: "AverageJoe",
  description: "This is a description",
  game: "Melee",
  skill_level: "Average",
  main: "Falco",
  pronouns: "he/him/his",
  age: 24
)
c = User.create(
  email: "sally@gmail.com", 
  password: "password", 
  display_name: "SuperGoodSally",
  description: "This is a description",
  game: "Melee",
  skill_level: "Super Good",
  main: "Fox",
  pronouns: "she/her/hers",
  age: 23
)
d = User.create(
  email: "brawl4life@gmail.com", 
  password: "password", 
  display_name: "BoringBrawlPlayer",
  description: "This is a description",
  game: "Brawl",
  skill_level: "#1 Brawl Player",
  main: "Meta Knight",
  pronouns: "he/him/his",
  age: 30
)
NearbyPlayer.create(user_id: b.id, lat: 37.774929, lng: -122.419416)
NearbyPlayer.create(user_id: c.id, lat: 37.774671, lng: -122.411900)
NearbyPlayer.create(user_id: d.id, lat: 37.784768, lng: -122.420568)
NearbyEvent.create(
  user_id: a.id,  
  lat: 37.787075, 
  lng: -122.403917, 
  date: "Sat, 16 Dec 2017", 
  start_time: "21:05:02", 
  end_time: "21:35:02",
  game: "Melee",
  skill_level: "All skill levels welcome!",
  description: "This is a description",
  current_players: 2,
  max_players: 8,
  current_setup: "We have 2 setups and 8 GC controllers"
)

