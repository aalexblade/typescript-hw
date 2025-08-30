/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// Спочатку визначаємо інтерфейс для властивостей, які буде містити наш клас Page
interface PageProps {
  title: string;
}

// Додаємо дженерік <T> до класу Component
// Обмежуємо T, щоб він був об'єктом, що гарантує наявність властивостей
class Component<T extends object> {
  constructor(public props: T) {}
}

// Клас Page успадковується від Component та передає PageProps в якості типу для дженеріка T
class Page extends Component<PageProps> {
  pageInfo() {
    // Тепер TypeScript знає, що this.props має властивість title
    console.log(this.props.title);
  }
}

// Приклад створення об'єкта
const myPage = new Page({ title: 'Мій заголовок' });
myPage.pageInfo(); // Виведе: Мій заголовок

export {};