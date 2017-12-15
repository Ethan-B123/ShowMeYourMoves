class NearbyEvent < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true
  validates :lat, :lng, :date, :start_time, :end_time, presence: true

  belongs_to :user
end
