@nearby_players.includes(:user)
@nearby_players.each do |player|
  json.set! player.id do
    json.id player.id
    json.display_name player.user.display_name
    json.game player.user.game
    json.skill_level player.user.skill_level
    json.set! :location do
      json.latitude player.lat
      json.longitude player.lng
    end
    json.set! :details do
      json.description player.user.description
      json.age player.user.age
      json.pronouns player.user.pronouns
      json.main player.user.main
    end
  end
end
