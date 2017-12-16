class AddSkillLvlColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :skill_level, :string
    add_column :nearby_events, :skill_level, :string
  end
end
