100.times do
  Menu.create(
    description: Faker::RickAndMorty.character,
    price: Faker::Commerce.price.to_f
  )
end 