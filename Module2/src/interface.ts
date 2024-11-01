{
// interface

type User1 = {
    name: string;
    age: number;
}

interface User2 {
    name: string;
    age: number;
}

type UserWithRole1 = User1 & { role : string };   //clean

interface UserWithRole2 extends User1 { 
    role: string
}

const user1: UserWithRole2 = {
    name: 'Meheraz',
    age: 100,
    role: 'manager'
};

type rollNumeber = number



// js --> object , array --> object function --> object


type Roll1 = number[]; // clean

interface Roll2 {
    [ index: number ] : number
}

const rollNUmber1 : Roll1 = [1,23,45]

type Add1 = (num1: number, num2:number)=> number
interface Add2 {
    (num1: number, num2: number) : number
}


const add = (num1: number, num2: number) : number => num1 + num2



























}