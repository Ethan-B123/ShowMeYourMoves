class AddGoogleUserIdColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :google_user_id, :string
  end
end
