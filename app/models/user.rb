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
  validates :access_token, presence: true
  validates :access_token, uniqueness: true
  validates :email, :password_digest, presence: true, unless: :fb_or_google_login?
  validates :email, uniqueness: true, allow_nil: true #skips this validation if email is blank. see https://stackoverflow.com/questions/18496223/possible-to-specify-unique-index-with-nulls-allowed-in-rails-activerecord for more info
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_access_token

  has_many :nearby_players

  has_many :nearby_events

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    pass_hash = BCrypt::Password.new(self.password_digest)
    pass_hash.is_password?(password)
  end

  def reset_access_token!
    self.access_token = SecureRandom::urlsafe_base64
    self.save!
    self.access_token
  end

  def ensure_access_token
    self.access_token ||= SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  private

  def fb_or_google_login?
    self.fb_user_id || self.google_user_id
  end
end
