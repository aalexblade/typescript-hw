// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);


// export {};

class Key{
    private signature: number;

    constructor(){
        this.signature= Math.random()
    }

    public getSignature():number{
        return this.signature
    }
}

class Person {
  private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    public getKey():Key{
        return this.key
    }
}

abstract class House{
    protected door: boolean = false;

    protected key:Key;
    protected tenants: Person[]=[];

    constructor(key: Key){
        this.key=key;
    }
}

