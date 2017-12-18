Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(create show update)
    resource :session, only: %i(create destroy)
    resources :nearby_players, only: %i(index create destroy update)
    resources :nearby_events, only: %i(index create destroy update)
  end

  # post "api/nearby_players_index",
  #   to: "api/nearby_players#index",
  #   defaults: { format: :json }
  #
  # post "api/nearby_events_index",
  #   to: "api/nearby_events#index",
  #   defaults: { format: :json }
end
