class Api::NearbyPlayersController < ApplicationController
  def create
    params[:nearby_player] = JSON.parse(params[:nearby_player])
    @nearby_player = NearbyPlayer.new(nearby_players_params)
    if current_user
      @nearby_player.user_id = current_user.id
      @nearby_player.save
    end
    @nearby_players = NearbyPlayer.all_near_spot(
      nearby_players_params, 20)
    render :index
  end

  def index
    params[:nearby_player] = JSON.parse(params[:nearby_player])
    @nearby_players = NearbyPlayer.all_near_spot(
      nearby_players_params, 20)
  end

  private

  def nearby_players_params
    params.require(:nearby_player).permit(
      :lat,
      :lng
    )
  end
end
