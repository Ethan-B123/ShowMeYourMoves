class CreateNearbyEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :nearby_events do |t|
      t.integer :user_id, null: false
      t.decimal :lat, null: false, precision: 10, scale: 6
      t.decimal :lng, null: false, precision: 10, scale: 6
      t.date :date, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.text :description
      t.integer :current_players
      t.integer :max_players
      t.text :current_setup
      t.string :photo

      t.timestamps
    end
    
    add_index :nearby_events, :user_id, unique: true
  end
end
