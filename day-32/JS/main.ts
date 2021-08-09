// 1. Basic Types
let a: number = 10
let s: string = 'hello'
let b: boolean = true
let nu: null = null
let un: undefined = undefined

// 2. Array
let arrayOfNumber: number[] = [1, 2, 3]
let arrayOfString: string[] = ['a', 'b', 'c']

//multiple types in array
let arrayofMixed: (number | string | boolean)[] = [1, 2, 'a', true]

// 3.Object
interface Users {
    name: string | number,
    age: number,
    addres: string
}

let user: Users = {
    name: 'Jhon',
    age: 28,
    addres: 'DL'
}

// 4.Class
class App {
    printHello() {
        console.log('Hello')
    }
}

const app = new App()
app.printHello()

// 5. Custom DataType
type Door = 'open' | 'close'

let door: Door = 'open'
door = 'close'

// 6. for store any datatype
let any: any
any = true
any = [1, 3, 4]

// 7. function
function add(a: number, b: number): number {
    return a + b
}

add(1, 3)

function printHello(): string {
    return 'Hello'
}

printHello()

export {}