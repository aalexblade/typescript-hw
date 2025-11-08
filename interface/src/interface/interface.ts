// import { IPerson, IPilot } from "./type";

// class Pilot implements IPerson, IPilot {
//     constructor(public name: string, public age: number) {
//         if(this.age < 28) {
//             throw new Error('Пілот занадто молодий.');
//         }
//     }

//     greet(phrase: string): void {
//             console.log(phrase + ' ' + this.name    );

//     }
//     flyMessage(): void {
//         console.log('Літак набрав висоту, всм приємного польоту.')
//     }
// }

// const pilot = new Pilot('Anthony',32    );

// pilot.greet('Віс вітає капітан корабля');
// pilot.flyMessage();

// export {};

// ================================================

// можемо додати у Pilot функцію setAutopilot.

// import { IPerson, IPilot } from './type';

// class Pilot implements IPerson, IPilot {
//   constructor(public name: string, public age: number) {
//     if (this.age < 28) {
//       throw new Error('Pilot too young');
//     }
//   }

//   greet(phrase: string): void {
//     console.log(phrase + ' ' + this.name);
//   }

//   flyMessage(): void {
//     console.log('Літак набрав висоту, всім приємного польоту!');
//   }

//   setAutopilot(): void {
//     console.log('Автопілот увімкнено.');
//   }
// }

// export {};

// =========================================

// Тепер давайте подивимося, як усе це працює разом, додавши пілота до наших літаків.

import { IPerson, IPilot } from './type';

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error('No pilot in cabin');
    }
    // Розігріваємо реактивні турбіни.
    console.log('Запуск турбин');

    this.pilot.flyMessage();
    return true;
  }
}

const boeing = new Boeing();
const pilot = new Pilot('Anthony', 32);

// Капітан вітає пасажирів на трапі.
pilot.greet('Вас вітає капітан корабля');

// Займає місце пілота.
boeing.sitInPlane(pilot);

// Запускаємо двигуни.
boeing.startEngine();

export { Boeing };
