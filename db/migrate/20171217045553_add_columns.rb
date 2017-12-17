class AddColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :image_url, :string
    add_column :users, :contact_info, :text
  end
end
