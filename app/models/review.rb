class Review < ApplicationRecord
  belongs_to :property
  belongs_to :user

  validates :body, presence: true
  validates :stayed_from, presence: true
  validates :stayed_to, presence: true
end
