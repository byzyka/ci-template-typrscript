import Cart from '../service/Cart';
import Book from '../domain/book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
const cart = new Cart();


test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
});

test("new card create", () => {
 
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  expect(cart.items).toEqual([{"author": "Leo Tolstoy", "id": 1001, "name": "War and Piece", "pages": 1225, "price": 2000}]);
});


test("new card total sum", () => {
  expect(cart.sum).toBe(2000);
});


test("new card total discount", () => {
 
  cart.calcDiscount(10);
  expect(cart.total).toBe(200);
});

test("new card delete id", () => {
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new Movie(123, 500, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'фантастика', 137));
  cart.deleteId(123);
  expect(cart.idDel).toEqual([{"author": "Leo Tolstoy", "id": 1001, "name": "War and Piece", "pages": 1225, "price": 2000}, 
                              {"author": "Leo Tolstoy", "id": 1001, "name": "War and Piece", "pages": 1225, "price": 2000}]);
});