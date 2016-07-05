test('Order WITH unintentional side effect.', function () {

   var cartProto = {
     items: [],
     addItem: function addItem(item) {
       this.items.push(item);
     }
   },

  createCart = function (items) {
    var cart = Object.create(cartProto);
    cart.items = items; //should be cart.items = Object.create(items) to avoid side-effects
    return cart;
  },

  // Load cart with stored items.
  savedCart = createCart(["apple", "pear", "orange"]),

  session = {
      get: function get() {
          return this.cart;
      },
      // Grab the saved cart.
      cart: createCart(savedCart.items) //pass the same Items reference to the new cart
  };

  // to avoid unintentional side-effects, if a function receives an ouside variable
  // always returns a copy from then instead of the original
  // using Object.create for example

  session.cart.addItem('grapefruit');

  ok(session.cart.items.indexOf('grapefruit') !== -1, 'Passes: Session cart has grapefruit.');
  ok(savedCart.items.indexOf('grapefruit') === -1, 'Fails: The stored cart is unchanged.');
});
