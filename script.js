// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

const specArr = Object.values(numbers).filter((el) => el >= 3);
console.log(specArr);

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
// const firstCommentOfPosts = ;
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

function sale(someProduct) {
  const productsForSale = someProduct.map((obj) => ({ ...obj }));
  productsForSale.forEach((el) => (el.price *= 0.85));
  return productsForSale;
}

console.table(sale(products));
console.table(products);

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const productsNew = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const choise = prompt(`Приветствую путник! что вы хотите сделать с массивом? /n
Введите '1' если хотите вывести товары, у которых есть фотографии /n
Введите '2' если хотите отсортировать товары по возрастанию цены.`);

switch (choise) {
  case "1":
    const productsNewFiltred = productsNew.filter(
      (el) => el.photos && el.photos.length > 0
    );
    console.log(productsNewFiltred);
    const array = productsNewFiltred.map((el) => el.id);
    alert(`у этих товаров с этими айди есть фотки: ${array}
        Все подробности в консоли`);
    break;
  case "2":
    const sortedProductNew = productsNew.sort((a, b) => a.price - b.price);
    console.log(sortedProductNew);
    const array2 = sortedProductNew.map((el) => el.id);
    alert(`id товаров по возрастанию их цены: ${array2}
        Все подробности в консоли`);
  default:
    break;
}

// **Задание 5**
// Дано 2 массива. Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const weekTranslater = {};

for (let index = 0; index < en.length; index++) {
  weekTranslater[en[index]] = ru[index];
}

console.log(weekTranslater);
