contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
              ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]
contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}
fields = [:email, :address, :phone]


contacts.each_with_index do |(name, hash), idx|
  fields.each do |field| # Iterate over field array
  hash[field] = contact_data[idx].shift # This will remove and return first element of array repeatedly
 end
end

p contacts