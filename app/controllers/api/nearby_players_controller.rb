class Api::NearbyPlayersController < ApplicationController
  def create
    params[:nearby_player] = JSON.parse(params[:nearby_player])
    @nearby_player = NearbyPlayer.new(nearby_players_params)
    if current_user &&
      @nearby_player.user_id = current_user.id &&
      @nearby_player.save
      @nearby_players = NearbyPlayer.all_near_spot({
        lat: nearby_players_params[:lat],
        lng: nearby_players_params[:lng]
        }, 20)
      render :index
    end
  end

  def index
    @nearby_players = NearbyPlayer.all_near_spot({
      lat: nearby_players_params[:lat],
      lng: nearby_players_params[:lng]
      }, 20)
  end

  private

  def nearby_players_params
    params.require(:nearby_player).permit(
      :lat,
      :lng
    )
  end
end
