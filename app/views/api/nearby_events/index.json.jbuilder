@events.includes(:user)
@events.each do |event|
  json.set! event.id do
    json.id = event.id
    json.host_id = event.user.id
    json.event_name = event.event_name
    json.game = event.game
    json.skill_level = event.user.skill_level
    json.set! :location do
      json.latitude event.lat
      json.longitude event.lng
    end
    json.set! :details do
      json.start_time = event.start_time
      json.end_time = event.end_time
      json.date = event.date
      json.description = event.description
      json.current_player_count = event.current_player_count
      json.max_player_count = event.max_player_count
      json.setup = event.setup
      json.photos = event.photos
    end
  end
end
