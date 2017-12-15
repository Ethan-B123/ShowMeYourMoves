class AddGameColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :game, :string
    add_column :nearby_events, :game, :string
  end
end
