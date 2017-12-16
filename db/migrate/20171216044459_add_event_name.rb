class AddEventName < ActiveRecord::Migration[5.1]
  def change
    add_column :nearby_events, :event_name, :string
  end
end
