class AddDefaultContact < ActiveRecord::Migration[5.1]
  def change
    change_column_default :users, :contact_info, "(555) 321 9876"
  end
end
