class Review < ApplicationRecord
  belongs_to :property

  validates :body, presence: true
  validates :stayed_from, presence: true
  validates :stayed_to, presence: true
end
