import './style.css'

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(1, 2))

//boolean
// let isDone: boolean = false;
// console.log(isDone)

//number
// let decimal: number = 6;//десяткові
// console.log(decimal)
// let float: number = 3.14//числа з плавачою крапкою
// console.log(float)
// let hex: number = 0xf00d
// console.log(hex)
// // Шістнадцяткова система використовує 16 символів: цифри
// //  від 0 до 9 та літери від A до F, де A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.
// let binary: number = 0b1010//двійкове
// console.log(binary)
// let octal: number = 0o744  //Вісімкова система використовує лише цифри від 0 до 7.
// console.log(octal)

// //string
// let color: string = 'blue'
// console.log(color)

// //null and undefined
// let empty: null = null;
// console.log(empty)
// let notParam: undefined = undefined;
// console.log(notParam)
   
////////////**********Object  {} ***********/
//object може виникнути помилка, якщо не передати вірно данні
// let user: {name: string, age: number} = {
//   name: "Tom",
//   age: 25
// }
// console.log(user)


//використовуючи type  intersection (&)щоб поєднати два типи з різними іменами
// type User = {
//   name: string,
//   age: number
// }
// let user: {name: string, age: number} = {
//   name: "Tom",
//   age: 25
// }
// console.log(user)


// interface дозволяє додавати багато обєктів використовуючи interface як шаблон
// interface User {
//   name: string;
//   age: number;
// }
// let user: User = {
//   name: 'Tom',
//   age: 25,
// }
// console.log(user)


//////////////********** Array  [] **********/

// let arrString: string[];// масив рядків
// let arrNumner: number[];// масив чисел
// let mixed: (number | string)[] = [1, 'two']//масив різних типів
// let matrix: number[][] = [[1,2], [3,4]]//багатовимірні масиви
// console.log(matrix)
// let numbers: Array<number> = [1, 2, 3, 4, 5]//масив узагальнення (generic):
// console.log(numbers)


//Cувора типізація не дає зробити помилку
// type User = {
//   name: string,
//   age: number,
// }

// let users: User[] = [
//   {name: "Tom", age: 25},
//   {name: "Jack", age: 30}
// ]
// console.log(users)//масив обєктів


///////////////////// Any //////////////
// let arrAny: any[];
// arrAny = [123, "Text", {name: "Tom"}, [1, 2, 3]]
// console.log(arrAny)// тип данних any дозволяє зберігати будь-що.

//відсутність суворої типізації. 
// let notSure: any = 4;
// notSure = 'maybe a string instead'
// notSure= false;
// notSure = {}

// let num: number;
// num = notSure;

// console.log(notSure)

// function fetchUserData(id: string, callback: (data: any) => void): void{
//   const responseData = {name: "Tom"}
//   callback(responseData)
// }

// fetchUserData('123', (data) => {
//   console.log(data.name)
// })
// Це дозволяє нам працювати з даними, не знаючи їхньої точної структури. Однак це також означає, що TypeScript не зможе
//  надати нам підказки про те, які властивості та методи доступні для об'єкта data.


///////// unknown ////////

// let notSure: unknown = 4;
// notSure = "maybe a string instead"
// notSure = true

// let num: number;

// num = notSure
// console.log(notSure)
// присвоїти значення змінної типу unknown іншій змінній з конкретним 
// типом без явного приведення типів, TypeScript видасть помилку



// function fetchUserData(){
//   return "Tom"
// }

// let userData: unknown = fetchUserData();
// if(typeof userData === 'string'){
//   console.log(userData.toUpperCase())// дізналась що це рядок
// }



/////////////////  Tuple (кортеж) -  незмінний масив ////////////////
// let tupleType: [string, boolean];
// tupleType = ['hello', true]//OK
// tupleType = ['true', hello]//error
// tupleType = ['hello', true, true]//error більше значень ніж у tupleType
// console.log(tupleType)

// let fixed: [string, number]
// fixed = ['Text', 10]
// fixed.push('Add this text')
// console.log(fixed)// додамо елемент у кортеж через метод push,
// то TypeScript не заперечуватиме, він не відстежує реальний вміст масиву.

//оператор розширення (...)
// let tuple: [string, ...number[]]
// tuple = ['hello', 42, 40, 100]
// console.log(tuple)



//////////// enum (імена змінних цього типу мають починатися з великої літери.)//////////

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// }
// if(person.role === Role.ADMIN){
//   console.log('Role:', Role.ADMIN)// має індексацію з 0
// }


// enum UserStatus{
//   Active = 'ACTIVE',
//   Inactive = 'INACTIVE',
//   Banned = "BANNED"
// }
// let status: UserStatus = UserStatus.Active
// console.log(status)// можна задавати свої значення


// enum HttpCodes{
//   OK = 200,
//   BadRequest = 400,
//   Unaauthorized = 401,
// }

// function respond(status: HttpCodes){

// }
// respond(HttpCodes.OK)//угруповання взаємопов'язаних значень



///////////const enum видаляється під час транспіляції/////////
// const enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// const status = HttpCodes.OK;


//////////////Union Type//////////////
// let mixedType: string | number | boolean;
// mixedType = 'string';// ok
// mixedType = 10;// ok
// mixedType = {};// error  тому що ми не передали обєкт в union type
// console.log(mixedType)



// function combine(param1: number | string, param2: number | string) {
//   if(typeof param1 === 'number' && typeof param2 === 'number'){
//     return param1 + param2
//   }else{
//     return param1.toString() + param2.toString()
//   }
// }

//  console.log(combine(1, 2))//3
//  console.log(combine("Hello",  " world!"))//Hello world!
 

// type Dog = {
//   legs: 4;
//   bark: () => void;
// }

// type Fish = {
//   fins: 2;
//   swim: () => void;
// }

// let pet: Dog | Fish;

// function isDog(pet: Dog | Fish): pet is Dog {
//   return 'bark' in pet;
// }

// if(isDog(pet)){
//   pet.bark()
// }else{
//   pet.swim()
// }

// console.log(pet)

/////////////////////////& /////////////////
// type Employee = {
//   name: string;
//   id: number;
// };

// type Manager = {
//   employees: Employee[];
// };

// type CEO = Employee & Manager;

// const ceo: CEO = {
//   name: 'Alice',
//   id: 1,
//   employees: [
//     {
//       name: 'Bob',
//       id: 2,
//     },
//   ],
// };


// console.log(ceo)/// CEO є intersection тип Employee і Manager. Це означає, що об'єкт типу CEO повинен містити всі 
//властивості, визначені в Employee та Manager.


/////////////// Literal type |
// type OneotTwo  = 1 | 2;
// let values: OneotTwo;
// values = 1;
// values = 2;
// values = 3;//error
// console.log(values)

// type ButtonsSize = 'small' | 'medium' | 'large'

// function getButtonsSize(size: ButtonsSize) {
//   switch(size) {
//     case 'small' :
//       return{fontSize: '10px', padding: '5px'};
//     case 'medium':
//       return {fontSize: '14px', padding: '10px'};
//     case 'large':
//       return {fontSize: '20px', padding: '15px'}
//   }
// }

// let myButtonStyle = getButtonsSize('medium')
// console.log(myButtonStyle)//ok
// myButtonStyle = getButtonsSize('extra-large')//error



///////////// REturn type

// function greet(): string{//гарантуємо що тут буде рядок
//   return "hello world"//якщо тут передати число буде помилка
// }
// let result = greet()
// console.log(result)

// type User = {
//   id: number;
//   name: string;
// }

// const getUserNames = (users: User[]): string[] => {
//   return users.map((user) => user.name)
// }
// const users: User[] = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bob'},
//   {id: 3, name: 'Jacob'}
// ]
// let result = getUserNames(users);
// console.log(result)


///////////////////////// Void type

// function logMessage(message: string): void{
//   console.log(message)
// }
// logMessage('Hello World')//функція не повертають значення


// function doSomething(callback: () => void) {
//   callback();
// }
// doSomething(() => {
//   console.log('Callback function')
// })
//У цьому прикладі функція doSomething приймає функцію зворотного виклику callback, що не повертає жодного значення.

///////////// Never

//Функція яка завжди повертає помилку
//Це коли функція ніколи не закінчується та нічого не повертає.
// function throwError(message: string): never {
//   throw new Error(message)
// }
// function infiniteLoop(): never{
//   while(true) {}
// }

///////////Function type
//описуємо функцію як тип
// let myFunc: (firstArg: string, secondArg: number) => void;
// myFunc = (first: string, second: number) => {
//   console.log(`First: ${first}, Second: ${second}`);
// }
// myFunc('Hello', 24)


// type CallbackType = (num1: number, num2: number) => number;

// function calc(param1: number, param2: number, callback: CallbackType): void {
//   console.log('Result:', callback(param1,param2));
// }
// calc(1, 1, (num1, num2) => num1 + num2)

//////////// Custom type
//Custom Types, або типи даних користувача, — це потужний інструмент у TypeScript, 
//що дозволяє вам визначати власні структури даних.
// type Coordinate = [number, number]

// type UserWithCoords = {
//   id: number;
//   name: string;
//   coords: Coordinate;
// }
// const userWithCoords: UserWithCoords = {
//   id: 1,
//   name: 'Alice',
//   coords: [10,20],
// }
// console.log(userWithCoords)


// enum AnimalTypes{
//   cat = 'cat',
//   dog = 'dog',
//   fish = 'fish',
// }
// type Animal = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   };
//   [AnimalIds.dog]: {
//     bark: () => string
//   };
//   [AnimalIds.fish]: {
//     swim: () => undefined
//   }
// };
// // Створення об'єктів типу Animal
// let cat: Animal[AnimalIds.cat] = {
//   meow: () => "Meow! I am a cat"
// }
// let dog: Animal[AnimalIds.dog] ={
//   bark: () => "Bark! I am a dog"
// }
// let fish: Animal[AnimalIds.fish] = {
//   swim:() => undefined,
// }

// console.log(fish)

////////////// символ ?, можна пропусти параментр якщо його не зазнаечно
// function greet(name?: string) {
//   if(name){
//     return `Hello, ${name}`
//   }else{
//     return 'Hello'
//   }
// }
// console.log(greet('Alice'))
// console.log(greet())


//////////// type inrterface,  схожий до типу type, але без =, якщо вказати два однакових інтерфейси то вони злиються в один
// interface Animal {
//   name: string;
// }
// interface Animal{
//   age: number;
// }
// let dog: Animal = {
//   name: 'Barsik',
//   age: 5,
// }
// console.log(dog)
//якщо ми хочемо розширити інтерфейси в якиї різні імена використовуєьбся оператор extends

// interface Animal {
//   name: string;
// }
// interface Dog extends Animal {
//   bark: string;
// }
// class MyDog implements Dog {
// name: "Fido";
// bark: 'Woof!';
// };
// class OtherDog implements Dog{
//   bark: 'Woof!'
// }

//Інтерфейси дозволяють використовувати модифікатор readonly
// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
// interface IPilot extends IPerson{
//   flyMessage(): void
// }
// let user: IPerson;

// user = {
//   name: "Manny",
//   age: 21,
//   greet(phrase){
//     console.log(phrase + '' + this.name)
//   }
// }
// user.greet('Hi everyone, I am ')

////////////////////Type Casting або Type Conversion перетворення об'єкта одного типу на об'єкт іншого типу
// let someValue: unknown = "this is a string"
// let strLength1: number = (<string>someValue).length//<>
// let strLength2: number = (someValue as string).length//as
// let strLength3: number = someValue.length//error
// console.log(strLength2)

// const input = <HTMLInputElement>document.getElementById('inputEmail')
// input.value = 'test@2024.mail'//<>

// const input = document.getElementById('inputEnail') as HTMLInputElement;
// input.value = 'test2023@mail.com'//as


//////////Index Properties
// type Person = {
//   name: string;
//   [x:string]:string;//типу, prop: string вказує, що ключі мають бути рядками, 
//   //а string після двокрапки вказує, що значення мають бути рядками
// }
// const user: Person = {
//   name: 'Alex',
//   gender: "MAN",
//   country: "Ukraine",
// }
// console.log(user)

// type User = {
//   id: string;
//   name: string;
//   email: string;
// }

// type Users = {
//   [id: string]: User;
// }
// let users: Users = {};
// let user:  User = {
//   id: '1',
//   name: 'Alex',
//   email: 'qwert292@mail.com'
// }
// users[user.id] = user;
// console.log(user)



//////////////////////узагальнених типів Generics
// const promise: Promise<string> = new Promise((resolve) => {
//   setInterval(() => {
//     resolve('Done');
//   }, 1000)
// })
// promise.then((data) => {
//   console.log(data)
// })
//Якщо ми не вкажемо тип, він буде позначений як 'any'



//////////Generic function/method
// function firstElement<T>(arr: T[]){
//   return arr[0]
// }
// let numbers =[1, 2, 3, 4, 5]
// let firstNum = firstElement(numbers);
// console.log(firstNum)

// let strings = ['a', 'b', 'c', 'd', 'e'];
// let firstStr = firstElement(strings)
// console.log(firstStr)
// //функцію, що приймає масив та повертає його перший елемент


// function merge<T, U>(objA: T, objB: U){
//   return Object.assign(objA, objB)
// }
// const merged = merge({name: 'Alisa'}, {age: 28})
// merge.name;
// console.log(merged)
//Ми передали два типи T та U, що будуть застосовані до аргументів 
//функції, і тепер у нас немає помилки. Ми отримуємо об'єднаний тип.


// type Person = {
//   name: string;
// }
// type AdditionFeilds = {
//   age: number;
// }
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB)
// }
// const merged = merge<Person, AdditionFeilds>({name: "Alisa"}, {age: 24});
// merged.name;

// console.log(merged)



////////////////////Extends   використовується для визначення обмежень на типи, які можуть бути використані з узагальненим типом. 

// type Length = {
//   length: number;
// }

// function getLength<T extends Length>(str: T) {
//   return str.length
// }
// getLength('text')
// getLength([1, 2, 3])
// getLength(100)


////////////////keyof оператор у TypeScript, що повертає типізований набір ключів для заданого типу

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// }
// type PersonKeys = keyof Person;;
// function getPersonInfo(person: Person, key: PersonKeys) {
//   return person[key]
// }

// const people: Person = {
//   name: 'John',
//   age: 25,
//   location: 'USA',
// }
// console.log(getPersonInfo(people, 'age'))
// console.log(getPersonInfo(people, 'name'))
// console.log(getPersonInfo(people, 'location'))

//generik + keyof

// function extractValue<T extends object, U extends keyof T>(obj: T, key: U){
//   return obj[key]
// }
// extractValue({name: 'Jonh'}, 'name')
// console.log(extractValue({name: 'Jonh'}, 'name'))


////////Generic Classes Узагальнені класи в TypeScript дозволяють визначити клас з типами, що можуть бути 
//встановлені під час створення екземпляра класу.

// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T){
//     this.data.push(item)
//   }

//   getItems(){
//     return[...this.data]
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('hello')
// textStorage.addItem("world")
// console.log(textStorage.getItems())
// //якщо додати число буде помилка
// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1);
// numberStorage.addItem(2)
// console.log(numberStorage.getItems())
// //якщо додати текст то буде помилка


///// Partial<T> 
//Утилітний тип Partial<T> створює новий тип на основі типу T, але робить всі його властивості необов'язковими
//У цьому прикладі Partial<User> дозволяє нам створювати користувачів, надаючи лише дані, які відомі на момент створення.
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   registered: boolean;
// }
// function createUser(data: Partial<User>): User {
//   //деякі значенння за замовчувванням
//   const defaultUser: User = {
//     id: Date.now(),
//     name: '',
//     email: '',
//     registered: false,
//   };
//   //Зєднуємо дані користувача та значення за замовчуванням
//   return{...defaultUser, ...data}
// }

// const newUser = createUser({name: 'Alice', email: 'alise@mail.com'})
// console.log(newUser)



/////////Readonly<T>
//Утилітний тип, що робить усі властивості у типі T тільки для читання. Це означає, що після того, як об'єкт буде створений, його властивості не можна буде змінити.
// type User = {
//   name: string;
//   email: string;
//   id: number;
// }
// let user1: User ={
//   id: 1,
//   name: 'Alice',
//   email: 'alice@mail.com'
// }
// // user1.name = 'Bob';//ok
// // console.log(user1)

// let user1ReadOnly: Readonly<User> = {
//   id: 1,
//   name: 'Alice',
//   email: 'alice@mail.com',
// }
// user1.name = "bob"
// console.log(user1ReadOnly)//error



///////Pick<T, K>
//Pick — це утилітний тип у TypeScript, що дозволяє вам обрати набір властивостей з існуючого типу і створити новий тип на основі цих властивостей.
// type User = {
//   name: string;
//   id: number;
//   email: string;
// }
// type UserBasicInfo = Pick<User, 'id' | 'name'>;

// let userBacisInfo: UserBasicInfo = {
//   id: 1,
//   name: 'Alice',
//   email: 'alice@mail.com'//error  так як ми не перадали сюди email
// }


////////////////Record<K, T>
//Record<K, T> — це утилітний тип, що дозволяє створювати типи із заздалегідь відомими властивостями
// type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
// type Weekend = 'Sat' | 'Sun';
// type Day = Weekdays | Weekend;

// type DayTranslations = Record<Day, string>;
// const translations: DayTranslations = {
//   Mon: 'Понеділок',
//   Tue: 'Вівторок',
//   Wed: 'Середа',
//   Thu: 'Четверг',
//   Fri: "П'ятниця",
//   Sat: 'Субота',
//   Sun: 'Неділя',
// };
// console.log(translations)


/////////////Omit<T, K>
//Це Pick, але навпаки. Дозволяє створити новий тип на основі типу T шляхом виключення набору властивостей, зазначених у K.
// type Person = {
//   name: string;
//   age: number;
//   location: string;
// }
// type PersonWithOutLocation = Omit<Person, 'location'>;
// const user: PersonWithOutLocation = {
//   name: 'Alice',
//   age: 12,
//   location: 'Alabama',//error бо ми виключили локацію
// }



/////////ReturnType<T> 
//Дозволяє отримати тип функції, що повертається. Для функцій він має використовуватися з typeof.
// function greeting() {
//   return ' Hello World'
// }
// type Greeting = ReturnType<typeof greeting>//string

// function multiply(a:number, b: number){
//   return a * b;
// }
// type MultiplyResult = ReturnType<typeof multiply>//number


// type Callback = (...args: unknown[]) => unknown;

// function createLoggedFunction<T extends Callback>(func: T) {
//   let funcRef = func;

//   const loggedFunction = (...args: Parameters<T>) => {
//     console.log(`Function ${func.name} was called with arguments`, args);
//     const result = funcRef(...args) as ReturnType<T>;
//     return result
//   }
//   return loggedFunction
// }
//Тепер loggedFunction приймає функцію як аргумент і повертає нову функцію, яка всередині 
//себе викликає вихідну функцію. Тип вихідної функції, що повертається, зберігається завдяки використанню ReturnType<T>.



//////////// Parameters<T>
//Витягує типи параметрів типу функції T. Вона повертає кортеж, що містить типи всіх параметрів функції T у тому порядку, в якому вони оголошені.
// type MyFunction = (a: string, b :number,
//   c: boolean
// ) => void;

// type MyParameters = Parameters<MyFunction>
// const logParameters = (...args: MyParameters) => {
//   console.log('Parameters', args)
// }
// console.log(logParameters('hello', 42, true))



/////////////////////NonNullable<T>
//Утилітний тип, що приймає тип T та виключає з нього null та undefined. 
//Цей тип корисний, коли ви хочете гарантувати, що значення не буде null чи undefined.
// type SomeType = string | null | undefined;
// type NoNullType = NonNullable<SomeType>//just string