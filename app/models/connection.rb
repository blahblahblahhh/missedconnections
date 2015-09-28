class Connection < ActiveRecord::Base

  belongs_to :user

  def self.search(search)
    where("train ILIKE ?", "%#{search}")
  end
  
end
