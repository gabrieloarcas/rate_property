class Property < ApplicationRecord
  has_many :reviews, dependent: :destroy

  validates :address, presence: true, length: { minimum: 5 }
  accepts_nested_attributes_for :reviews
end
