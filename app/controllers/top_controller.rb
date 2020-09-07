class TopController < ApplicationController
  before_action :login_check

  def index
  end

  private

  def login_check
    unless user_signed_in?
      redirect_to new_user_session_path
    end
  end
  
end
