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
  age: 41,
  image_url: "https://randomuser.me/api/portraits/men/47.jpg",
  contact_info: "(555) 321 9876"
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
  age: 24,
  image_url: "https://randomuser.me/api/portraits/men/54.jpg",
  contact_info: "Snapchat: SmashJoe93"
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
  age: 23,
  image_url: "https://randomuser.me/api/portraits/women/29.jpg",
  contact_info: "(555) 567 1234"
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
  age: 30,
  image_url: "https://randomuser.me/api/portraits/men/76.jpg",
  contact_info: "AIM: brawl4life"
)
e = User.create(
  email: "alfredo.cano@example.com",
  password: "password",
  display_name: "greenmouse378",
  description: "This is a description",
  game: "Melee",
  skill_level: "Average",
  main: "Fox",
  pronouns: "he/him/his",
  age: 21,
  image_url: "https://randomuser.me/api/portraits/men/89.jpg",
  contact_info: "(699)-322-1577"
)
f = User.create(
  email: "naomi.lemaire@example.com",
  password: "password",
  display_name: "lazybear524",
  description: "This is a description",
  game: "Melee",
  skill_level: "Average",
  main: "Fox",
  pronouns: "she/her/hers",
  age: 21,
  image_url: "https://randomuser.me/api/portraits/women/59.jpg",
  contact_info: "(627)-652-3885"
)
g = User.create(
  email: "niklas.koch@example.com",
  password: "password",
  display_name: "yellowfish797",
  description: "This is a description",
  game: "Melee",
  skill_level: "Average",
  main: "Fox",
  pronouns: "he/him/his",
  age: 21,
  image_url: "https://randomuser.me/api/portraits/men/49.jpg",
  contact_info: "(691)-342-1579"
)
h = User.create(
  email: "rachel.henry@example.com",
  password: "password",
  display_name: "beautifulpanda674",
  description: "This is a description",
  game: "Melee",
  skill_level: "Average",
  main: "Fox",
  pronouns: "she/her/hers",
  age: 21,
  image_url: "https://randomuser.me/api/portraits/women/17.jpg",
  contact_info: "(125)-363-2769"
)
i = User.create(
  email: "ethan.lawson@example.com",
  password: "password",
  display_name: "whiteladybug149",
  description: "This is a description",
  game: "Melee",
  skill_level: "Average",
  main: "Fox",
  pronouns: "he/him/his",
  age: 21,
  image_url: "https://randomuser.me/api/portraits/men/74.jpg",
  contact_info: "(621)-382-5229"
)
j = User.create(
  email: "antonin.francois@example.com",
  password: "password",
  display_name: "organicmouse880",
  description: "This is a description",
  game: "Melee",
  skill_level: "Average",
  main: "Fox",
  pronouns: "he/him/his",
  age: 21,
  image_url: "https://randomuser.me/api/portraits/men/72.jpg",
  contact_info: "(615)-782-5421"
)
k = User.create(
  email: "ella.taylor@example.com",
  password: "password",
  display_name: "whiteswan784",
  description: "This is a description",
  game: "Melee",
  skill_level: "Average",
  main: "Fox",
  pronouns: "she/her/hers",
  age: 21,
  image_url: "https://randomuser.me/api/portraits/women/75.jpg",
  contact_info: "(132)-917-0927"
)


NearbyPlayer.create(user_id: b.id, lat: 37.774929, lng: -122.419416)
NearbyPlayer.create(user_id: c.id, lat: 37.774671, lng: -122.411900)
NearbyPlayer.create(user_id: d.id, lat: 37.784768, lng: -122.420568)
NearbyPlayer.create(user_id: e.id, lat: 37.800778, lng: -122.405944)
NearbyPlayer.create(user_id: f.id, lat: 37.794198, lng: -122.406339)
NearbyPlayer.create(user_id: g.id, lat: 37.794885, lng: -122.409118)
NearbyPlayer.create(user_id: h.id, lat: 37.790072, lng: -122.406170)
NearbyPlayer.create(user_id: i.id, lat: 37.786429, lng: -122.412667)
NearbyPlayer.create(user_id: j.id, lat: 37.803555, lng: -122.406493)
NearbyPlayer.create(user_id: k.id, lat: 37.795506, lng: -122.396921)

NearbyEvent.create(
  event_name: "Pat's House",
  user_id: a.id,
  lat: 37.787075,
  lng: -122.403917,
  date: "Sat, 16 Dec 2017",
  start_time: "21:00:00",
  end_time: "23:00:00",
  game: "Melee",
  skill_level: "All skill levels welcome!",
  description: "This is a description",
  current_players: 2,
  max_players: 8,
  current_setup: "We have 2 setups and 8 GC controllers",
  photo: "https://res.cloudinary.com/lara-cloud1/image/upload/v1513545992/image-82907c1308b0a5d6d7936f3819bf1ef4_vepo6y.png"
)
