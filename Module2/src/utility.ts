{

// Utility Type

// Pick
type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
}

type NameAge = Pick<Person, "name" | "age">

// Omit 
type ContactInfo = Omit<Person, "name" | "age">

// Required
type PersonRequired = Required<Person>

// Pertial 
type PersonPartial = Partial<Person>

// ReadOnly
type PersonReadOnly = Readonly<Person>

const person1 : Person = {
    name: "Mr. X",
    age: 20,
    contactNo: '7423874638'
}



person1.name = "Mr. Y"


// Record 
// type MyObj = {
//     a: string,
//     b: string
// };

type MyObj = Record<string, string>

const EmptyObj : Record<string, unknown> = {}


const obj1 : MyObj = {
    a: 'aa',
    b: 'bb',
    c: "cc"
}




















}