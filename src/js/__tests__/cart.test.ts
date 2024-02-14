import Cart from '../service/Cart';
import { totalPrice, totalDiscount, result} from '../service/Cart';


test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test("new card total sum", () => {
  const cart = new Cart();
  expect(cart.sum).toBe(totalPrice);
});

test("new card total discount", () => {
  const cart = new Cart();
  expect(cart.discount).toBe(totalDiscount);
});

test("new card delete id", () => {
  const cart = new Cart();
  expect(cart.idDel).toBe(result);
});