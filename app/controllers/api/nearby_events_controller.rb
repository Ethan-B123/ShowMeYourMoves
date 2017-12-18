class Api::NearbyEventsController < ApplicationController
  def create
    if current_user
      @event = NearbyEvent.new(event_params)
      @event.user_id = current_user.id
      if @event.save
        @events = NearbyEvent.all_near_spot(event_params, 200)
        render :index
      else
        render json: @event.errors.full_messages, status: 422
      end
    else
      render json: ['Unable to find current user'], status: 404
    end

  end

  def destroy
    @event = selected_event
    if @event
      @event.destroy
      @events = NearbyEvent.all_near_spot(event_params, 200)
      render :index
    else
      render json: ['Unable to find event'], status: 404
    end

  end

  def update
    @event = selected_event
    if @event && @event.update_attributes(event_params)
      @events = NearbyEvent.all_near_spot(event_params, 200)
      render :index
    elsif !@event
      render json: ['Unable to find event'], status: 404
    else
      render json: @event.errors.full_messages, status: 401
    end

  end

  def index
    @events = NearbyEvent.all_near_spot(event_params, 200)
  end

  private

  def selected_event
    NearbyEvent.find_by(user_id: current_user.id)
  end

  def event_params
    params[:event] = JSON.parse(params[:event]) if params[:event].class == String
    params.require(:event).permit(
      :lat,
      :lng,
      :date,
      :start_time,
      :end_time,
      :description,
      :current_players,
      :max_players,
      :current_setup,
      :photo,
      :event_name,
      :game,
      :skill_level
    )
  end

end
