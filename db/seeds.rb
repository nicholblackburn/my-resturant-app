100.times do
  Menu.create(
    description: Faker::Resturant.description,
    price: Faker::Commerce.price.to_f
  )
end 