{

// function with generics

const createArray = (param: string): string[] => {
    return [param]
}

const createArrayWithGeneric = <T>(param: T) : T[] => {
    return [param]
}

const res1 = createArray('Bangladesh');
// const resGeneric = createArrayWithGeneric<boolean>(true)
const resGeneric = createArrayWithGeneric<string>('Thailand')

type User = {id: number; name: string}


const resGenericObject  = createArrayWithGeneric<User>({id: 222, name: 'Mr. X'})




const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T, Q] => {
    return [param1, param2]
}

const res10 = createArrayWithTuple<string, number>('Bangladesh', 222);
// const resGeneric = createArrayWithGeneric<boolean>(true)
const resGeneric10 = createArrayWithTuple<string, {name: string}>('Thailand', {name: 'Europe'})


const adCourseToStudent = <T>(student : T) => {
    const course = 'Next Level Web Development'
    return {
        ...student,
        course
    }
}

const student1 = adCourseToStudent({name: 'Mr. X', email: 'x@gmail.com', devType: 'NLWD'})
const student2 = adCourseToStudent({name: 'Mr. Y', email: 'y@gmail.com', hasWatch: 'Apple Watch'})

























}