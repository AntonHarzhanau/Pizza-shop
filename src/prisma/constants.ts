export const categories = [
  {
    name: '🍕 Pizzas',
  },
  {
    name: '🧆 Appetizers',
  },
  {
    name: '🍹 Cocktails',
  },
  {
    name: '☕ Coffee',
  },
  {
    name: '🍋 Drinks',
  },
  {
    name: '🍰 Desserts',
  },
  {
    name: '🧂 Sauces',
  },
];

export const _ingredients = [
  {
    name: 'Cheese border',
    price: 2.5,
    imageUrl: '/products_images/ingredients/cheese_border.png',
  },
  {
    name: 'Spicy beef',
    price: 3.2,
    imageUrl: '/products_images/ingredients/spicy_beef.png',
  },
  {
    name: 'Bacon',
    price: 2.4,
    imageUrl: '/products_images/ingredients/bacon.png',
  },
  {
    name: 'Bavarian sausages',
    price: 2.8,
    imageUrl: '/products_images/ingredients/bavarian_sausages.png',
  },
  {
    name: 'Tender chicken',
    price: 3.0,
    imageUrl: '/products_images/ingredients/tender_chicken.png',
  },
  {
    name: 'Mozzarella',
    price: 1.6,
    imageUrl: '/products_images/ingredients/mozzarella.png',
  },
  {
    name: 'Cheddar and Parmesan',
    price: 1.9,
    imageUrl: '/products_images/ingredients/cheddar_and_parmesan.png',
  },
  {
    name: 'Hot jalapeño pepper',
    price: 1.5,
    imageUrl: '/products_images/ingredients/jalapeño.png',
  },
  {
    name: 'Champignons',
    price: 1.3,
    imageUrl: '/products_images/ingredients/champignons.png',
  },
  {
    name: 'Spicy pepperoni',
    price: 2.6,
    imageUrl: '/products_images/ingredients/pepperoni.png',
  },
  {
    name: 'Spicy chorizo',
    price: 2.8,
    imageUrl: '/products_images/ingredients/chorizo.png',
  },
  {
    name: 'Pickled cucumbers',
    price: 1.0,
    imageUrl: '/products_images/ingredients/pickled_cucumbers.png',
  },
  {
    name: 'Fresh tomatoes',
    price: 1.1,
    imageUrl: '/products_images/ingredients/fresh_tomatoes.png',
  },
  {
    name: 'Red onion',
    price: 0.9,
    imageUrl: '/products_images/ingredients/red_onion.png',
  },
  {
    name: 'Juicy pineapples',
    price: 1.8,
    imageUrl: '/products_images/ingredients/juicy_pineapples.png',
  },
  {
    name: 'Italian herbs',
    price: 1.0,
    imageUrl: '/products_images/ingredients/italian_herbs.png',
  },
  {
    name: 'Sweet pepper',
    price: 1.4,
    imageUrl: '/products_images/ingredients/sweet_pepper.png',
  },
  {
    name: 'Shrimps',
    price: 4.5,
    imageUrl: '/products_images/ingredients/shrimps.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const pizzas = [
  {
    name: 'Teriyaki',
    imageUrl: '/products_images/pizzas/teriyaki.avif',
    categoryId: 1,
    description: 'Chicken, bell peppers, red onion, mozzarella, teriyaki sauce, signature Alfredo sauce',
    variants: [
      { pizzaType: 1, size: 20, price: 10.5 },
      { pizzaType: 2, size: 30, price: 14.9 },
      { pizzaType: 2, size: 40, price: 18.9 },
    ],
  },
  {
    name: 'Four cheeses',
    imageUrl: '/products_images/pizzas/four_cheeses.avif',
    categoryId: 1,
    description: 'Blue cheese, a blend of cheddar and parmesan cheeses, mozzarella, signature alfredo sauce',
    variants: [
      { pizzaType: 1, size: 20, price: 9.8 },
      { pizzaType: 1, size: 30, price: 13.9 },
      { pizzaType: 1, size: 40, price: 17.5 },
      { pizzaType: 2, size: 20, price: 10.4 },
      { pizzaType: 2, size: 30, price: 14.7 },
      { pizzaType: 2, size: 40, price: 18.4 },
    ],
  },
  {
    name: 'Fresh chorizo',
    imageUrl: '/products_images/pizzas/fresh_chorizo.avif',
    categoryId: 1,
    description: 'Spicy chorizo ​​sausages, bell peppers, mozzarella, signature tomato sauce',
    variants: [
      { pizzaType: 1, size: 20, price: 10.9 },
      { pizzaType: 2, size: 30, price: 15.4 },
      { pizzaType: 2, size: 40, price: 19.9 },
    ],
  },
  {
    name: 'Garlic chicken',
    imageUrl: '/products_images/pizzas/garlic_chicken.avif',
    categoryId: 1,
    description: 'Chicken, tomatoes, garlic, mozzarella, signature Alfredo sauce',
    variants: [
      { pizzaType: 1, size: 20, price: 10.2 },
      { pizzaType: 1, size: 30, price: 14.2 },
      { pizzaType: 1, size: 40, price: 18.2 },
      { pizzaType: 2, size: 20, price: 10.8 },
      { pizzaType: 2, size: 30, price: 14.9 },
      { pizzaType: 2, size: 40, price: 18.9 },
    ],
  },
  {
    name: 'Ham and cheese',
    imageUrl: '/products_images/pizzas/ham_and_cheese.avif',
    categoryId: 1,
    description: 'Ham, mozzarella, signature Alfredo sauce',
    variants: [
      { pizzaType: 1, size: 20, price: 9.9 },
      { pizzaType: 1, size: 30, price: 13.8 },
      { pizzaType: 1, size: 40, price: 17.9 },
      { pizzaType: 2, size: 20, price: 10.5 },
      { pizzaType: 2, size: 30, price: 14.6 },
      { pizzaType: 2, size: 40, price: 18.6 },
    ],
  },
  {
    name: 'Hawaiian',
    imageUrl: '/products_images/pizzas/hawaiian.avif',
    categoryId: 1,
    description: 'Chicken, pineapple, mozzarella, signature Alfredo sauce',
    variants: [
      { pizzaType: 1, size: 20, price: 9.5 },
      { pizzaType: 1, size: 30, price: 13.5 },
      { pizzaType: 1, size: 40, price: 17.2 },
      { pizzaType: 2, size: 20, price: 10.1 },
      { pizzaType: 2, size: 30, price: 14.3 },
      { pizzaType: 2, size: 40, price: 18.1 },
    ],
  },
  {
    name: 'Hunting',
    imageUrl: '/products_images/pizzas/hunting.avif',
    categoryId: 1,
    description: 'Classic sausages, red onions, tomatoes, barbecue sauce, mozzarella, signature tomato sauce',
    variants: [
      { pizzaType: 1, size: 20, price: 10.8 },
      { pizzaType: 1, size: 30, price: 15.2 },
      { pizzaType: 1, size: 40, price: 19.4 },
      { pizzaType: 2, size: 20, price: 11.4 },
      { pizzaType: 2, size: 30, price: 15.9 },
      { pizzaType: 2, size: 40, price: 20.1 },
    ],
  },
  {
    name: 'Meat mix',
    imageUrl: '/products_images/pizzas/meat_mix.avif',
    categoryId: 1,
    description: 'Spicy beef, classic sausage, spicy pepperoni, bacon, mozzarella and signature tomato sauce',
    variants: [
      { pizzaType: 1, size: 20, price: 10.7 },
      { pizzaType: 1, size: 30, price: 15.0 },
      { pizzaType: 1, size: 40, price: 19.2 },
      { pizzaType: 2, size: 20, price: 11.3 },
      { pizzaType: 2, size: 30, price: 15.7 },
      { pizzaType: 2, size: 40, price: 19.9 },
    ],
  },
  {
    name: 'Spicy sausages',
    imageUrl: '/products_images/pizzas/spicy_sausages.avif',
    categoryId: 1,
    description: 'Classic sausages, red onion, mozzarella, signature tomato sauce',
    variants: [
      { pizzaType: 1, size: 20, price: 10.0 },
      { pizzaType: 1, size: 30, price: 14.5 },
      { pizzaType: 1, size: 40, price: 18.4 },
      { pizzaType: 2, size: 20, price: 10.6 },
      { pizzaType: 2, size: 30, price: 15.2 },
      { pizzaType: 2, size: 40, price: 19.1 },
    ],
  },
];



export const products = [
  // 🧆 Appetizers
  {
    name: 'Beef Danwich',
    imageUrl: '/products_images/appetizers/beef_danwich.avif',
    categoryId: 2,
    price: 8.9,
    description:
      'Juicy beef slices with melted cheese, fresh lettuce and signature sauce in a warm sandwich bun.',
  },
  {
    name: 'Chicken roll',
    imageUrl: '/products_images/appetizers/chicken_roll.avif',
    categoryId: 2,
    price: 7.5,
    description:
      'Tender chicken fillet wrapped in pita bread with fresh vegetables and creamy garlic sauce.',
  },
  {
    name: 'Country-style potatoes',
    imageUrl: '/products_images/appetizers/country-style_potatoes.avif',
    categoryId: 2,
    price: 5.2,
    description:
      'Golden baked potato wedges seasoned with herbs and served with a side of creamy dip.',
  },
  {
    name: 'French fries',
    imageUrl: '/products_images/appetizers/french_fries.avif',
    categoryId: 2,
    price: 4.8,
    description:
      'Crispy French fries made from fresh potatoes, lightly salted and perfectly fried.',
  },
  {
    name: 'Ham and mushrooms omelet in pita',
    imageUrl: '/products_images/appetizers/ham_and_mushroom_omelette_in_pita.avif',
    categoryId: 2,
    price: 6.9,
    description:
      'Soft pita filled with omelet, ham, mushrooms and cheese — a warm and hearty snack.',
  },
  {
    name: 'Omelet with tomatoes in pita',
    imageUrl: '/products_images/appetizers/omelet_with_tomatoes_in_pita.avif',
    categoryId: 2,
    price: 6.5,
    description:
      'Fluffy omelet with juicy tomatoes wrapped in pita bread with a touch of herbs.',
  },
  {
    name: 'Shrimp pasta and pesto',
    imageUrl: '/products_images/appetizers/shrimp_pasta_and_pesto.avif',
    categoryId: 2,
    price: 9.2,
    description:
      'Delicate pasta with shrimp, aromatic basil pesto and grated parmesan cheese.',
  },
  {
    name: 'Teriyaki shrimp',
    imageUrl: '/products_images/appetizers/teriyaki_shrimp.avif',
    categoryId: 2,
    price: 9.5,
    description:
      'Grilled shrimp glazed in sweet teriyaki sauce, topped with sesame and green onion.',
  },

  // 🍹 Cocktails
  {
    name: 'Chocolate milkshake',
    imageUrl: '/products_images/cocktails/chocolate_milkshake.avif',
    categoryId: 3,
    price: 5.9,
    description:
      'Rich chocolate milkshake made with cocoa ice cream and fresh milk, topped with whipped cream.',
  },
  {
    name: 'Oreo milkshake',
    imageUrl: '/products_images/cocktails/oreo_milkshake.avif',
    categoryId: 3,
    price: 6.3,
    description:
      'Creamy milkshake blended with crunchy Oreo cookies and vanilla ice cream.',
  },
  {
    name: 'Peach milkshake',
    imageUrl: '/products_images/cocktails/peach_milkshake.avif',
    categoryId: 3,
    price: 5.5,
    description:
      'Refreshing peach milkshake with natural fruit puree and a hint of vanilla.',
  },
  {
    name: 'Strawberry milkshake',
    imageUrl: '/products_images/cocktails/strawberry_milkshake.avif',
    categoryId: 3,
    price: 5.8,
    description:
      'Classic strawberry milkshake made with ripe berries and creamy vanilla ice cream.',
  },

  // ☕ Coffee
  {
    name: 'Americano',
    imageUrl: '/products_images/coffee/americano.avif',
    categoryId: 4,
    price: 2.8,
    description:
      'Strong and aromatic black coffee prepared with freshly ground espresso beans.',
  },
  {
    name: 'Cappuccino',
    imageUrl: '/products_images/coffee/cappuccino.avif',
    categoryId: 4,
    price: 3.9,
    description:
      'Espresso with steamed milk and a layer of milk foam, finished with a sprinkle of cocoa.',
  },
  {
    name: 'Cherry chocolate latte',
    imageUrl: '/products_images/coffee/cherry_chocolate_latte.avif',
    categoryId: 4,
    price: 4.5,
    description:
      'Sweet cherry syrup mixed with chocolate and espresso, topped with milk foam and cocoa powder.',
  },
  {
    name: 'Ice coffee',
    imageUrl: '/products_images/coffee/ice_coffee.avif',
    categoryId: 4,
    price: 3.7,
    description:
      'Cold-brew coffee with ice cubes and a touch of milk — smooth, refreshing and energizing.',
  },

  // 🍋 Drinks
  {
    name: 'Grapefruit-strawberry lemonade',
    imageUrl: '/products_images/drinks/grapefruit-strawberry_lemonade.avif',
    categoryId: 5,
    price: 4.8,
    description:
      'Bright mix of grapefruit and strawberry juice with sparkling water and mint leaves.',
  },
  {
    name: 'Homemade lemonade',
    imageUrl: '/products_images/drinks/homemade_lemonade.avif',
    categoryId: 5,
    price: 4.5,
    description:
      'Classic lemonade made from fresh lemons, sugar and still or sparkling water.',
  },
  {
    name: 'Strawberry mojito',
    imageUrl: '/products_images/drinks/strawberry_mojito.avif',
    categoryId: 5,
    price: 5.2,
    description:
      'Refreshing non-alcoholic mojito with strawberries, lime, mint and crushed ice.',
  },
  {
    name: 'Sunrise grapefruit-strawberry',
    imageUrl: '/products_images/drinks/sunrise_grapefruit-strawberry.avif',
    categoryId: 5,
    price: 5.0,
    description:
      'Layered citrus-strawberry drink with grapefruit juice, strawberry syrup and soda water.',
  },

  // 🍰 Desserts
  {
    name: 'Blueberry muffin',
    imageUrl: '/products_images/desserts/blueberry_muffin.avif',
    categoryId: 6,
    price: 3.8,
    description:
      'Soft muffin filled with juicy blueberries and topped with a golden crust.',
  },
  {
    name: 'Cheesecake',
    imageUrl: '/products_images/desserts/cheesecake.avif',
    categoryId: 6,
    price: 4.9,
    description:
      'Classic creamy cheesecake on a crunchy biscuit base, lightly baked to perfection.',
  },
  {
    name: 'Chocolate cookies',
    imageUrl: '/products_images/desserts/chocolate_cookies.avif',
    categoryId: 6,
    price: 3.5,
    description:
      'Freshly baked soft chocolate cookies with melting chocolate chips inside.',
  },

  // 🧂 Sauces
  {
    name: 'BBQ',
    imageUrl: '/products_images/sauces/bbq.avif',
    categoryId: 7,
    price: 1.2,
    description:
      'Smoky and sweet barbecue sauce — a perfect match for meat and fries.',
  },
  {
    name: 'Cheese',
    imageUrl: '/products_images/sauces/cheese.avif',
    categoryId: 7,
    price: 1.3,
    description:
      'Warm creamy cheese sauce made from cheddar and mozzarella for dipping.',
  },
  {
    name: 'Garlic',
    imageUrl: '/products_images/sauces/garlic.avif',
    categoryId: 7,
    price: 1.0,
    description:
      'Fragrant garlic sauce with herbs and light cream — ideal for pizzas and chicken.',
  },
  {
    name: 'Thousand islands',
    imageUrl: '/products_images/sauces/thousand_islands.avif',
    categoryId: 7,
    price: 1.1,
    description:
      'Creamy mayonnaise-based sauce with herbs, tomato and a hint of pickle flavor.',
  },
];

