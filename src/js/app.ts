import Cart from './service/Cart';
import Book from './domain/book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();

console.log(cart.items.length)

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

cart.add(new Movie(123, 500, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', 137));


cart.totalSum(cart.items);
cart.calcDiscount(50);
cart.deleteId(1008);


