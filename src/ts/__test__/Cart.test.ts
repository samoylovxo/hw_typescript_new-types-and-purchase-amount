import Cart from '../Cart';
import Movie from '../Movie';

let cart: Cart;
let movieAvengers: Movie;
let movieBlackWidow: Movie;
let movieCruella: Movie;
let movieQuietPlace2: Movie;

beforeEach(() => {
  cart = new Cart();

  movieAvengers = new Movie(
    1,
    'Мстители',
    'The Avengers',
    2012,
    ['США'],
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    0,
    true
  );

  movieBlackWidow = new Movie(
    2,
    'Чёрная Вдова',
    'Black Widow',
    2021,
    ['США'],
    'Shes Done Running From Her Past',
    ['фантастика', 'боевик', 'приключения'],
    133,
    100,
    true
  );

  movieCruella = new Movie(
    3,
    'Круэлла',
    'Cruella',
    2021,
    ['США', 'Великобритания'],
    'Hello cruel world',
    ['комедия', 'криминал', 'драма'],
    134,
    50,
    true
  );

  movieQuietPlace2 = new Movie(
    4,
    'Тихое место 2',
    'A Quiet Place Part II',
    2021,
    ['США'],
    'Silence is Not Enough',
    ['ужасы', 'фантастика', 'драма'],
    97,
    100,
    true
  );
});

test('add()', () => {
  cart.add(movieAvengers);

  expect(cart.items).toContainEqual({
    country: ['США'],
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    id: 1,
    imax: true,
    name: 'Мстители',
    nameEn: 'The Avengers',
    price: 0,
    tagline: 'Avengers Assemble!',
    time: 137,
    year: 2012,
  });
});

test('removeItem()', () => {
  cart.add(movieAvengers);
  cart.add(movieBlackWidow);
  cart.add(movieCruella);
  cart.add(movieQuietPlace2);

  cart.removeItem(2);

  expect(cart.items).not.toContain(movieBlackWidow);
});

test('amount()', () => {
  cart.add(movieAvengers);
  cart.add(movieBlackWidow);
  cart.add(movieCruella);
  cart.add(movieQuietPlace2);

  expect(cart.amount()).toBe(250);
});

test('removeItem() and amount()', () => {
  cart.add(movieAvengers);
  cart.add(movieBlackWidow);
  cart.add(movieCruella);
  cart.add(movieQuietPlace2);

  cart.removeItem(2);

  expect(cart.amount()).toBe(150);
});

test('discountedAmount()', () => {
  cart.add(movieAvengers);
  cart.add(movieBlackWidow);
  cart.add(movieCruella);
  cart.add(movieQuietPlace2);

  expect(cart.discountedAmount(10)).toBe(225);
});
