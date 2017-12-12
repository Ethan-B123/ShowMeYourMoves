class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :access_token, null: false
      t.string :display_name
      t.text :description
      t.string :main
      t.string :pronouns
      t.integer :age

      t.timestamps
    end
  end
end
