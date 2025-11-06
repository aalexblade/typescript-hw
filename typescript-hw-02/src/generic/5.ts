/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

const pair2: KeyValuePair<number, string> = {
  key: 1,
  value: "one",
};

const pair3: KeyValuePair<boolean, string[]> = {
  key: true,
  value: ["bob", "alice", "charlie"],
};

console.log(pair1);
console.log(pair2);
console.log(pair3);
export {};
