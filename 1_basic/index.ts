// ?Everyday Types
// string
// number
// boolean
// null
// undefined
// any and unknown

let userName: string = '';
let hasLoggedIn: boolean = true;

// ?Built-In Complex Types
// Date and RegExp

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(' ');

// ?Arrays
// Add brackets to the end of the type
const numbers: number[] = [1, 2, 3];
// <number> Generic Type
const mtValue: Array<number> = [1, 2, 3];

// ?Typing Objects
interface Person {
  first: string;
  surname: string;
}

const myPerson: Person = {
  first: 'kitravee',
  surname: 'siwatkittisuk',
};

myPerson.first;

// ?Objects as Maps

const idsNotGood: {
  10: string;
  20: string;
} = {
  10: 'a',
  20: 'b',
};

// Utility Type Record
const idsRecord: Record<number, string> = {
  10: 'a',
  20: 'b',
};

// Utility Type Map
const idsMap = new Map<number, string>();
idsMap.set(10, 'a');
idsMap.set(20, 'b');

// let typescript infer type
for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 3, 3].forEach((v) => console.log(v));
const out: number[] = [4, 5, 6].map((v) => v * 10);

//? S.F.I.A.T
//? Simply Find an Interface for the Any Type

// Explicit casting
let item1 = <any>{ id: 1, name: 'item1' };
let item2 = { id: 1, name: 'item1' } as any;

// let keyword
