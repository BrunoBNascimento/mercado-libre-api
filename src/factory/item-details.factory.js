const itemDetailsFactory = ({
  id,
  title,
  price,
  currency_id,
  thumbnail,
  condition,
  sold_quantity,
  shipping,
  description
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
  description: description.data.plain_text
})

module.exports = itemDetailsFactory;
