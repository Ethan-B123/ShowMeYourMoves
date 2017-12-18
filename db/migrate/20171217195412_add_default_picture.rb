class AddDefaultPicture < ActiveRecord::Migration[5.1]
  def change
    change_column_default :users, :image_url, "http://res.cloudinary.com/lara-cloud1/image/upload/v1513540313/default-profile-picture_gs9kae.png"
  end
end
