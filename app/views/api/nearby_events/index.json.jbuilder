@events.includes(:user)
@events.each do |event|
  json.set! event.id do
    json.id event.id
    json.host_id event.user.id
    json.event_name event.event_name
    json.game event.game
    json.skill_level event.user.skill_level
    json.set! :location do
      json.latitude event.lat
      json.longitude event.lng
    end
    json.set! :details do
      json.start_time event.start_time
      json.end_time event.end_time.strftime("%l:%M%p %Z")
      json.date event.date.strftime("%l:%M%p %Z")
      json.description event.description
      json.current_player_count event.current_players
      json.max_player_count event.max_players
      json.setup event.current_setup
      json.photo event.photo
    end
  end
end
