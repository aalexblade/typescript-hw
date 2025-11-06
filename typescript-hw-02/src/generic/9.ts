/*
//   У вас є тип Product, який містить інформацію про товар, включаючи унікальне поле id.
//   Ви хочете створити новий тип ProductDraft, який включає всі поля з Product, крім id.
*/

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
};

// Реалізуйте ProductDraft так, щоб унеможливити поле 'id' з типу Product
type ProductDraft = Omit<Product, 'id'>;

// TypeScript автоматично виведе тип ProductDraft як:
/*
{
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}
*/

// Приклад використання:
const newProduct: ProductDraft = {
  name: "Ноутбук",
  price: 1200,
  description: "Потужний і легкий ноутбук.",
  inStock: true
};

// Цей код спричинить помилку:
// const invalidProduct: ProductDraft = {
//   id: 101, // Помилка: 'id' не існує в типі 'ProductDraft'
//   name: "Телефон",
//   price: 800,
//   description: "Смартфон останнього покоління.",
//   inStock: true
// };

export {};