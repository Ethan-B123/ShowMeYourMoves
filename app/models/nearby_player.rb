class NearbyPlayer < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true
  validates :lat, :lng, presence: true

  def self.all_near_spot(lat_lng_hash, range)
    NearbyPlayer.all
    # NearbyPlayer.where(
    #   lat: ((lat_lng_hash[:lat] - range/2)..(lat_lng_hash[:lat] + range/2))
    # ).where(
    #   lng: ((lat_lng_hash[:lng] - range/2)..(lat_lng_hash[:lng] + range/2))
    # ) COMMENT BACK IN. THIS IS JUST FOR SIMULATOR BECAUSE IT ORIGINATES IN NEW YORK.
  end

  belongs_to :user
end
