class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = User.find(params[:id])
    if @user && @user.update_attributes(user_params)
      render :show
    elsif !@user
      render json: ['Unable to find user'], status: 404
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private

  def user_params
    params[:user] = JSON.parse(params[:user])
    params.require(:user).permit(
      :display_name,
      :email,
      :password,
      :fb_user_id,
      :google_user_id,
      :description,
      :main,
      :pronouns,
      :age,
      :game,
      :image_url
    )
  end
end
