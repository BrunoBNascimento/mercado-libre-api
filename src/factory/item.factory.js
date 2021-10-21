const itemFactory = ({
  id,
  title,
  price,
  currency_id,
  thumbnail,
  condition,
  sold_quantity,
  shipping
}) => ({
  id,
  title,
  price: {
      currency: currency_id,
      amount: price,
      decimals: 2,
  },
  picture: thumbnail,
  condition,
  free_shipping: shipping.free_shipping,
  sold_quantity,
})

module.exports = itemFactory;
