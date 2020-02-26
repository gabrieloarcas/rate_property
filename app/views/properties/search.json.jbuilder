json.properties do
  json.array!(@properties) do |property|
    json.address property.address
    json.url property_path(property)
  end
end