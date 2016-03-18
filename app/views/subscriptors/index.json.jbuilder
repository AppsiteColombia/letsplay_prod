json.array!(@subscriptors) do |subscriptor|
  json.extract! subscriptor, :id, :name, :mail
  json.url subscriptor_url(subscriptor, format: :json)
end
