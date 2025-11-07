/*
//   У вас є тип User, який містить інформацію про користувача, включаючи поле password. 
//   Ви хочете створити новий тип PublicUser, який включає всі поля з User, крім password.
*/

type UserRole = 'admin' | 'editor' | 'viewer';

/**
 * Повний тип користувача, як він може зберігатися в базі даних.
 */
type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string; // <-- Це поле ми хочемо виключити
  role: UserRole;
  createdAt: Date;
};

// Реалізуйте PublicUser так, щоб унеможливити поле 'password' з типу User
/**
 * Тип користувача, який можна безпечно передавати на клієнтську частину.
 */
type PublicUser = Omit<User, 'password' | 'createdAt'>; 
// Ми також можемо виключити кілька полів одночасно

// Приклад використання:
const publicUserInfo: PublicUser = {
  id: 101,
  email: 'jane.doe@example.com',
  firstName: 'Jane',
  lastName: 'Doe',
  role: 'editor',
  // password: 'hashedpassword123', // <-- Присвоєння 'password' викличе помилку
  // createdAt: new Date(),         // <-- Присвоєння 'createdAt' викличе помилку
};

// Приклад використання з повним об'єктом User:
const databaseUser: User = {
  id: 202,
  email: 'admin@system.com',
  firstName: 'Super',
  lastName: 'User',
  password: 'securehash',
  role: 'admin',
  createdAt: new Date(),
};

// Ми можемо легко створити PublicUser з User, видаливши заборонені поля
const safeUser: PublicUser = {
  id: databaseUser.id,
  email: databaseUser.email,
  firstName: databaseUser.firstName,
  lastName: databaseUser.lastName,
  role: databaseUser.role,
};


// TypeScript автоматично виведе тип PublicUser як:
// {
//   id: number;
//   email: string;
//   firstName: string;
//   lastName: string;
//   role: UserRole;
// }

export {};