// У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну безпосередньо інший змінної, якщо ми впевнені у її типі. У вас є наступний код:


let some: unknown;
some = 'Text';
let str: string;

// Тут ми робимо перевірку типу
if (typeof some === "string") {
  // TypeScript впевнений, що всередині цього блоку some є string
  str = some;
}
