let name = prompt('Как тебя зовут?');
alert ('Привет,' + name + '!');

function summa() {
    let a = prompt(`${name}, пожалуйста, введите первое число`);
    let b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(Number(a) + Number(b));
}

function minus() {
    let a = prompt(`${name}, пожалуйста, введите первое число`);
    let b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(a - b);
}

function multiplication() {
    let a = prompt(`${name}, пожалуйста, введите первое число`);
    let b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(a * b);
}

function division() {
    let a = prompt(`${name}, пожалуйста, введите первое число`);
    let b = prompt(`${name}, пожалуйста, введите второе число`);
    alert(a / b);
}