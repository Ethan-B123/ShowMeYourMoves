class AddIndexToEmailAndAccessToken < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :email, unique: true
    add_index :users, :access_token, unique: true
  end
end
