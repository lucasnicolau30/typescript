const numero: number = 10;
const nome: string = 'Lucas';
const verdadeiro: boolean = true;

console.log(numero);
console.log(nome);
console.log(verdadeiro);

const arrNum: number[] = [10, 20, 30];
const arrNome: string[] = ["Lucas", "Nicolle"];

console.log(arrNum);
console.log(arrNome);

const obj: { name: string; age: number; arr: (number | string)[] } = {
    "name": "Lucas",
    "age": 21,
    "arr": [20, "Nicolle"]
}

console.log(obj);

interface User {
    name: string,
    age: number,
    car?: string | boolean
}

const user1: User = {
    name: "Lucas",
    age: 21
}

const user2: User = {
    name: "Nicolle",
    age: 20,
    car: "Mobi"
}

console.log(`Olá, ${user1.name}`);
console.log(`${user1.age}`);
console.log(`Olá, ${user2.name}`);
console.log(`${user2.age}`);
console.log(`${user2.car}`);

enum Status {
    Ativo = "Ativo",
    Inativo = "Inativo",
    Pendente = "Pendente"
}

let status: Status = Status.Pendente;

console.log(status);

let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

console.log(strLength);

interface UserGenerico<T> {
    name: T,
    age: number,
    car?: string | boolean
}

const userGenerico1: UserGenerico<string> = {
    name: "Lucas",
    age: 21
}

const userGenerico2: UserGenerico<number> = {
    name: 123,
    age: 20,
    car: "Mobi"
}       

console.log(`Olá, ${userGenerico1.name}`);
console.log(`${userGenerico1.age}`);
console.log(`Olá, ${userGenerico2.name}`);
console.log(`${userGenerico2.age}`);
console.log(`${userGenerico2.car}`);