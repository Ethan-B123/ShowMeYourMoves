class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:access_token]
    @current_user ||= User.find_by(session_token: session[:access_token])
  end

  def log_in!(user)
    session[:access_token] = user.reset_access_token!
  end

  def log_out!
    current_user.reset_access_token!
    session[:access_token] = nil
  end

  def logged_in?
    !!current_user
  end
end
