// convenção -> declarar interface sempre antes
interface User {
    name: string,
    age: number,
    car?: string | boolean
}

interface UserArrow {
    name?: string,
    age: number
}

const user1: User = {
    name: "Lucas",
    age: 21,
    car: false
}

const user2: UserArrow = {
    name: "Lucas",
    age: 21
}

const user3: UserArrow = {
    age: 22
}


function soma(a: number, b: number): number{
    return a + b;
}

console.log(soma(1, 3));

function greetingUser(user1: User): string{
    return "Hello, " + user1.name;
}

console.log(greetingUser(user1));

function voidTester() :void{
    console.log("Teste void");
}

voidTester();

const somaResultado: (a: number, b: number) => number = soma;

console.log(somaResultado(2, 3));

const arrow = (): void => {
    console.log("Teste arrow");
};

arrow(); 

const arrowGreeting = (user: UserArrow): void => {
    // operador nullish coalescing
    const nome = user.name ?? "Anônimo";
    console.log(`Ola, ${nome}`);
}

arrowGreeting(user2);
arrowGreeting(user3);

function greet(name: string = "Anônimo"): void{
    console.log(`Ola, ${name}`);
}

greet();        
greet("Lucas");   

function generics<T>(tipo: T): T{
    return tipo;
}

console.log("Atribuição em generics: " + generics(10));
console.log("Atribuição em generics: " + generics("Lucas"));

function primeiro<T>(tipo: T[]): T{
    // ! garante que nao eh undefined
    return tipo[0]!;
}

const arrGenericsNums = [1, 2, 3];
const arrGenericsStr = ["a", "b", "c"];

console.log("Primeiro: " + primeiro(arrGenericsNums));
console.log("Primeiro: " + primeiro(arrGenericsStr));

// conjunto de valores permitidos
type Status = "ativo" | "inativo" | "pendente";

let status: Status = "ativo";
console.log(status);

status = "inativo";
console.log(status);

status = "pendente";
console.log(status);

interface User3 {
    name: string,
    age: number,
    car?: string | boolean,
    status: Status;
}

const user4: User3 = {
    name: "user 4",
    age: 4,
    status: "ativo"
}

const user5: User3 = {
    name: "user 5",
    age: 5,
    status: "inativo"
}

const user6: User3 = {
    name: "user 6",
    age: 6,
    status: "pendente"
}

console.log(user4);
console.log(user5);
console.log(user6);

// Pick -> criar um novo tipo a partir de outro, escolhendo apenas algumas propriedades
type userSimplificado = Pick<User, "name" | "age">;

const user7: userSimplificado = {
    name: "user 7",
    age: 7
}

console.log(user7);

// Omit -> criar um novo tipo a partir de outro, omitindo algumas propriedades
type userSemCarro = Omit<User, "car">;

const user8: userSemCarro = {
    name: "user 8",
    age: 8
}

console.log(user8);