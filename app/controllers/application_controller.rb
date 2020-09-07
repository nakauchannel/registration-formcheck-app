class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    added_attrs = [
      :nickname, 
      :email, 
      :password, 
      :last_name, 
      :first_name, 
      :birthday, 
      :postcode, 
      :prefecture_code,
      :address_city,
      :address_street,
      :address_building
    ]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
  end
end
