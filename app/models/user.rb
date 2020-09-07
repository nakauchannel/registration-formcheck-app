class User < ApplicationRecord
  include JpPrefecture
  jp_prefecture :prefecture_code
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  VALID_EMAIL_REGEX = /\w+@\w+\.{1}[a-zA-Z]{2,}/
  VALID_PASSWORD_REGEX = /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i
  VALID_KATAKANA_REGEX = /[\p{katakana}　ー－&&[^ -~｡-ﾟ]]+/

  validates :nickname,         presence: true, length: { maximum: 10 }
  validates :email,            presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }
  validates :password,         presence: true, length: { minimum: 7 }, format: { with: VALID_PASSWORD_REGEX }
  validates :birthday,         presence: true
  validates :first_name,       presence: true, length: { maximum: 20 }
  validates :last_name,        presence: true, length: { maximum: 20 }
  validates :postcode,         presence: true, length: { maximum: 10 }

  def prefecture_name
    JpPrefecture::Prefecture.find(code: prefecture_code).try(:name)
  end
  
  def prefecture_name=(prefecture_name)
    self.prefecture_code = JpPrefecture::Prefecture.find(name: prefecture_name).code
  end
  
end