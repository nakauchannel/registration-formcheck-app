class DeviseCreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      # Users
      t.string     :nickname,            null: false
      t.string     :email,               null: false, default: "", unique:true
      t.string     :encrypted_password,  null: false, default: ""
      t.string     :last_name,           null: false
      t.string     :first_name,          null: false
      t.date       :birthday,            null: false
      t.integer    :postcode,            null: false
      t.integer    :prefecture_code,     null: false
      t.string     :address_city,        null: false
      t.string     :address_street,      null: false
      t.string     :address_building

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      t.timestamps null: false
    end

    add_index :users, :nickname, unique: true
    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
  end
end

