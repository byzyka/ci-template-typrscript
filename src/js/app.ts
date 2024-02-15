import Cart from './service/Cart';
import Book from './domain/book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();



cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

cart.add(new Movie(123, 500, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'фантастика', 137));

console.log(cart.items)
console.log(cart.sum)

cart.calcDiscount(10);
console.log(cart.total)
cart.deleteId(123);
console.log(cart.idDel)

