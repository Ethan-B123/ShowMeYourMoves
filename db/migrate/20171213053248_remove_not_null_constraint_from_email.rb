class RemoveNotNullConstraintFromEmail < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :email, :string, null: true
  end
end
