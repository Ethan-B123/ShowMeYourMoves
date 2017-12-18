class NearbyEvent < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true
  validates :lat, :lng, :date, :start_time, :end_time, presence: true

  def self.all_near_spot(lat_lng_hash, range)
    NearbyEvent.all
    # NearbyEvent.where(
    #   lat: ((lat_lng_hash[:lat] - range/2)..(lat_lng_hash[:lat] + range/2))
    # ).where(
    #   lng: ((lat_lng_hash[:lng] - range/2)..(lat_lng_hash[:lng] + range/2))
    # ) COMMENT BACK IN AFTER SIMULATOR. THIS IS BECAUSE IT ORIGINATES IN NY.
  end

  belongs_to :user
end
