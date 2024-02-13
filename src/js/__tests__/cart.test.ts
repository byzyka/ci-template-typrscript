import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


/*
let totalPrice: number = 0;

test("new card total sum", () => {
  const cart = new Cart();

  expect(cart.sum).toBe(totalPrice);
});*/