@nearby_players.includes(:user)
@nearby_players.each do |player|
  json.set! player.id do
    json.id = player.user.id
    json.name = player.user.name
    json.game = player.user.game
    json.skill_level = player.user.skill_level
    json.set! :location do
      json.latitude player.lat
      json.longitude player.lng
    end
    json.set! :details do
      json.about_me = player.user.about_me
      json.age = player.user.age
      json.pronouns = player.user.pronouns
      json.main = player.user.main
      json.secondaries = player.user.secondaries
    end
  end
end
