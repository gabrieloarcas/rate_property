json.extract! review, :id, :body, :stayed_from, :stayed_to, :property_id, :created_at, :updated_at
json.url review_url(review, format: :json)
