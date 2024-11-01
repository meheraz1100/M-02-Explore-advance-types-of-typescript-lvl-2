{

// generic type

type GenericArray<T> = Array<T>

// const rollNumbers : number[] = [3,4,5]
const rollNumbers : GenericArray<number> = [3,4,5]

// const mentors : string[] = ['Mr. x', 'Mr Y', 'Mr. Z'];
const mentors : GenericArray<string> = ['Mr. x', 'Mr Y', 'Mr. Z'];


// const boolArray : boolean[] = [true, false, true]
const boolArray : GenericArray<boolean> = [true, false, true];

interface User {
    name: string;
    age: number
}


const user : GenericArray<{name: string, age: number}> = [
    {
        name: 'Meheraz',
        age: 100
    },
    {
        name: 'Noman',
        age: 1020
    }
]


const add = (x: number, y: number) => x + y


add(20, 30);



// generic tuple

type GenericTuple<X,Y> = [X, Y]

const manus : GenericTuple<string,string> = ['Mr. X', 'Mr. Y']

const UserWithId : GenericTuple<number, {name: string, email: string}> = [1234, {name: 'Meheraz', email: 'm@gmail.com'}]



















}