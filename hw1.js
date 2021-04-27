let name = prompt('Как тебя зовут?');
alert ('Привет,' + name + '!');

let summa = (a,b) => {
    a = prompt(`${name}, пожалуйста, введите первое число`);
    b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(Number(a) + Number(b));
}

let minus = (a,b) => {
    a = prompt(`${name}, пожалуйста, введите первое число`);
    b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(a - b);
}

let multiplication = () => {
    a = prompt(`${name}, пожалуйста, введите первое число`);
    b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(a * b);
}

let division = () => {
    a = prompt(`${name}, пожалуйста, введите первое число`);
    b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(a / b);
}

