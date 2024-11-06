{

// conditional type
type a1 = number
type b1 = string

type x = a1 extends null ? true : false       // conditional type

type y = a1 extends null ? true : b1 extends  undefined ? undefined : any;


type Sheikh = {
    bike: string;
    car : string;
    ship: string;
    plane: string;
}

// keyof  Sheikh "bike" | 'car' | 'ship'

// car ase kina , bike ase kina, ship ase kina, tractor ase kina
type CheckVehicle<T> = T extends Sheikh ? true : false

type HasShip = CheckVehicle<"ship">

type HasTractor = CheckVehicle<"tractor">
type HasPlane = CheckVehicle<"plane">















}