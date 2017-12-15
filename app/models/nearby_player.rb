class NearbyPlayer < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true
  validates :lat, :lng, presence: true

  belongs_to :user
end
