// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User('12', 'Ana', 'Skorodynska', 'ana@gmail.com', 123456);
let user2 = new User('20', 'Maria', 'Burkova', 'maria@gmail.com', 123456);
let user3 = new User('3', 'Ivan', 'Gavras', 'ivan@gmail.com', 123456);
let user4 = new User('4', 'Sophia', 'Stuzhyk', 'sofia@gmail.com', 123456);
let user5 = new User('5', 'Max', 'Mamix', 'max@gmail.com', 123456);
let user6 = new User('87', 'Sasha', 'Posnova', 'sasha@gmail.com', 123456);
let user7 = new User('9', 'Alisson', 'Argent', 'argent@gmail.com', 123456);
let user8 = new User('1', 'Iryna', 'Pupkina', 'ira@gmail.com', 123456);
let user9 = new User('11', 'Denis', 'Ivanov', 'denya@gmail.com', 123456);
let user10 = new User('54', 'Lana', 'Solo', 'lana@gmail.com', 123456);

const usersArray = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(usersArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(usersArray.filter(value => !(value.id % 2)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(usersArray.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clientsList = [
    new Client('12', 'Ana', 'Skorodynska', 'ana@gmail.com', 123456, ['lipstick', 'book', 'mansion', 'laptop', 'car']),
    new Client('20', 'Maria', 'Burkova', 'maria@gmail.com', 123456, ['horse', 't-shirt', 'phone']),
    new Client('3', 'Ivan', 'Gavras', 'ivan@gmail.com', 123456, ['goat milk', 'hair brush']),
    new Client('4', 'Sophia', 'Stuzhyk', 'sofia@gmail.com', 123456, ['certificate', 'salad', 'skirt']),
    new Client('5', 'Max', 'Mamix', 'max@gmail.com', 123456, ['coca', 'mentos']),
    new Client('87', 'Sasha', 'Posnova', 'sasha@gmail.com', 123456, ['contact license', 'make up items']),
    new Client('9', 'Alisson', 'Argent', 'argent@gmail.com', 123456, ['bullet', 'gun', 'wolfsbane']),
    new Client('1', 'Iryna', 'Pupkina', 'ira@gmail.com', 123456, ['computer', 'bici', 'bubblegum']),
    new Client('11', 'Denis', 'Ivanov', 'denya@gmail.com', 123456, ['ball', 'flowers', 'pan', 'soap']),
    new Client('54', 'Lana', 'Solo', 'lana@gmail.com', 123456, ['headphones']),
]
console.log(clientsList);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientsList.sort((a, b) => a.order.length - b.order.length));