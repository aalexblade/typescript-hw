interface User {
  username: string;
  age: number;
  isActive: boolean;
}

interface Admin extends User {
  permissions: string[];
}

let users: User[] = [
  { username: "Vlad", age: 22, isActive: true },
  { username: "Anna", age: 19, isActive: false },
];

let superAdmin: Admin = {
  username: "Oleh",
  age: 30,
  isActive: true,
  permissions: ["manage-users", "edit-products"],
};
export {};

// ========================================
