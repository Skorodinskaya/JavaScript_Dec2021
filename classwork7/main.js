// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacture, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacture = manufacture;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const carKey in this) {
            if (typeof this[carKey] !== "function") {
                console.log(`${carKey} - ${this[carKey]}`)
            }
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log(`New speed is ${this.maxSpeed}`)
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`The new year of production is ${this.year}`)
    };
    this.addDriver = function (driver) {
        console.log(this.driver = driver);
    }
}

let car = new Car('bmw', 'Korea', '2011', 250, 100);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2022);
car.addDriver({name: 'Ivan', age: '30', sex: 'male'});
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarSecond {
    constructor(model, manufacture, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const carSecondKey in this) {
            console.log(`${carSecondKey} - ${this[carSecondKey]}`)
        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed + this.maxSpeed;
        console.log(`The new max speed is ${this.maxSpeed}`)
    };

    changeYear(newValue) {
        this.year = newValue;
        console.log(`The new year of production is ${this.year}`)
    };

    addDriver(driver) {
        console.log(this.driver = driver);
    }
}

const secondCar = new CarSecond('audi', 'USA', 2005, 200, 3);
console.log(secondCar);
secondCar.drive();
secondCar.increaseMaxSpeed(20);
secondCar.changeYear(2010);
secondCar.addDriver({name: 'Iryna', age: 25, sex: 'female'});
console.log(secondCar);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const cinderellasArray = [
    new Cinderella('Anna', 20, 37),
    new Cinderella('Maria', 23, 36),
    new Cinderella('Iryna', 30, 35),
    new Cinderella('Sofia', 12, 37),
    new Cinderella('Nadia', 40, 38),
    new Cinderella('Sasha', 29, 38),
    new Cinderella('Olya', 40, 39),
    new Cinderella('Alina', 10, 17),
    new Cinderella('Tania', 20, 39),
    new Cinderella('Lola', 27, 49),
];
console.log(cinderellasArray);

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const prince = new Prince('Adrian', 25, 35);
console.log(prince);

for (const cinderella of cinderellasArray) {
    if (cinderella.shoeSize === prince.shoeSize) {
        console.log(`You found your Cinderella. Her name is ${cinderella.name}`)
    }
}

const findCinderella = cinderellasArray.find((value) => value.shoeSize === prince.shoeSize);
console.log(findCinderella);

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lng, lat, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street,
            suite,
            city,
            zipcode,
            geo: {
                lat,
                lng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase,
            bs

        }
    }
}

let user = new User(1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets');

console.log(user);
