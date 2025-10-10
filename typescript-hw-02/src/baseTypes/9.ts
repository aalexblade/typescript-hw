// // /*
// //   Створіть новий тип даних, який підходить для цих двох об'єктів.
// // */

// // interface Page {
// //   title: string;
// //   likes: number;
// //   accounts: string[];
// //   status: "open" | "close";
// //   details?:  {
// //     createAt: Date;
// //     updateAt: Date;
// //   };
// // }

// // const page1: Page = {
// //   title: "The awesome page",
// //   likes: 100,
// //   accounts: ["Max", "Anton", "Nikita"],
// //   status: "open",
// //   details: {
// //     createAt: new Date("2021-01-01"),
// //     updateAt: new Date("2021-05-01"),
// //   },
// // };

// // const page2: Page = {
// //   title: "Python or Js",
// //   likes: 5,
// //   accounts: ["Alex"],
// //   status: "close",
// // };

// // export {};

// // --- Початок файлу ---

// interface Page {
//   title: string;
//   readonly likes: number;
//   readonly accounts: ReadonlyArray<string>;
//   status: "open" | "closed";
//   details?: {
//     readonly createdAt: Date;
//     readonly updatedAt: Date;
//   };
// }

// const page1: Page = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createdAt: new Date("2021-01-01T00:00:00Z"),
//     updatedAt: new Date("2021-05-01T12:00:00Z"),
//   },
// };

// const page2: Page = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "closed",
// };

// export {}; // Цей рядок може бути причиною, якщо ви очікуєте глобальної доступності

// // --- Кінець файлу ---
// export {};