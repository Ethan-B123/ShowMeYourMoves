class RemovePasswordDigestNotNullConstraintAndAddFbIdColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :password_digest, :string, null: true
    add_column :users, :fb_user_id, :string
  end
end
