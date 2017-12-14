class Api::SessionsController < ApplicationController
  def create
    params[:user] = JSON.parse(params[:user])
    if params[:user][:email]
      @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )
    elsif params[:user][:fb_user_id]
      @user = User.find_by(fb_user_id: params[:user][:fb_user_id])
    end

    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid credentials"], status: 404
    end
  end

  def destroy
    if current_user
      log_out!
      render json: {}
      # render 'api/users/show'
    else
      render json: ["User not found"], status: 404
    end
  end
end
