class CreateNearbyPlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :nearby_players do |t|
      t.integer :user_id, null: false
      t.decimal :lat, null: false, precision: 10, scale: 6
      t.decimal :lng, null: false, precision: 10, scale: 6

      t.timestamps
    end

    add_index :nearby_players, :user_id, unique: true
  end
end
