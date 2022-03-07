// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

const {name, age} = document.forms.infoForm;
const btn = document.getElementById('btn');
const key = 'user';

const send = (name, age) => {
    const user = {
        name: name,
        age: age,
    };
    localStorage.setItem(key, JSON.stringify(user));
}

btn.onclick = () => {
    send(name.value, age.value)
};
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const {model, type, volume} = document.forms.carForm;
const button = document.getElementById('button');
const keyItem = 'cars';

const save = (model, type, volume) => {
    const cars = JSON.parse(localStorage.getItem(keyItem)) || [];

    cars.push({model, type, volume});
    localStorage.setItem(keyItem, JSON.stringify(cars));
}

button.onclick = () => {
    save(model.value, type.value, volume.value);
}