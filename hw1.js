let name = prompt('Как тебя зовут?');
alert ('Привет,' + name + '!');

let summa = () => {
    let a = prompt(`${name}, пожалуйста, введите первое число`);
    let b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(Number(a) + Number(b));
}

let minus = () => {
    let a = prompt(`${name}, пожалуйста, введите первое число`);
    let b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(a - b);
}

let multiplication = () => {
    let a = prompt(`${name}, пожалуйста, введите первое число`);
    let b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(a * b);
}

let division = () => {
    let a = prompt(`${name}, пожалуйста, введите первое число`);
    let b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(a / b);
}


