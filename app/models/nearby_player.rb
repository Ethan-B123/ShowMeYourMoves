class NearbyPlayer < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true
  validates :lat, :lng, presnce: true

  belongs_to :user
end
