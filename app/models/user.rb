# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  access_token    :string           not null
#  display_name    :string
#  description     :text
#  main            :string
#  pronouns        :string
#  age             :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :password_digest, :access_token, presence: true
  validates :password, minimum: { length: 6 }, allow_nil: true
end
