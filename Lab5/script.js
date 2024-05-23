// Zadanie 1

let liczby = [];
for (let i = 0; i < 10; i++) {
    let liczba = parseInt(prompt("Podaj liczbę całkowitą: "));
    liczby.push(liczba);
}

console.log("Wprowadzone liczby: ", liczby);

let szukanaLiczba = parseInt(prompt("Podaj liczbę do znalezienia:"));
let wystapienia = liczby.filter(num => num === szukanaLiczba).length;
console.log(`Liczba ${szukanaLiczba} występuje ${wystapienia} razy w tablicy.`);

// Zadanie 2

let numery = [1, 2, 3, 4, 5, 6 ];
let indeks = parseInt(prompt("Podaj indeks do wstawienia liczby (0-5):"));
let nowaLiczba = parseInt(prompt("Podaj liczbę do wstawienia:"));
numery.splice(indeks, 0, nowaLiczba);
console.log("Zaktualizowana tablica: ", numery);

// Zadanie 3

let tekst = prompt("Wpisz tekst do odwrócenia:");
let odwroconyTekst = tekst.split('').reverse().join('');
console.log("Odwrócony tekst: ", odwroconyTekst);

// Zadanie 5

let liczby2 = [2, 4, 8, 16, 32];
console.log("Suma : ", liczby2.reduce((a, b) => a + b, 0));
console.log("Parzyste : ", liczby2.filter(x => x % 2 === 0));
console.log("Pomnożone : ", liczby2.map(x => x * 3));
liczby2.push(69851);
console.log("Indeks albumu: ", liczby2.indexOf(69860));
console.log("Średnia arytmetyczna: ", liczby2.reduce((a, b) => a + b, 0) / liczby2.length);
console.log("Największa : ", Math.max(...liczby2));
console.log("Ilość wystąpień liczby 20: ", liczby2.filter(x => x === 20).length);

// Zadanie 6

function generujFibonacci(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}
console.log(generujFibonacci(100));

// Zadanie 7

function sumaDwochNajwiekszych(liczby) {
    let posortowane = liczby.sort((a, b) => b - a);
    return posortowane[0] + posortowane[1];
}
let liczby3 = [2, 4, 6, 8, 10];
console.log("Suma dwóch największych liczb: ", sumaDwochNajwiekszych(liczby3));

// Zadanie 8

function usunDuplikaty(tablica) {
    return [...new Set(tablica)];
}
let liczby4 = [7, 7, 9, 15, 15, 5, 5, 8];
console.log("Tablica bez duplikatów: ", usunDuplikaty(liczby4));

// Zadanie 9

function czyPierwsza(liczba) {
    if (liczba <= 1) return false;
    for (let i = 2; i <= Math.sqrt(liczba); i++) {
        if (liczba % i === 0) return false;
    }
    return true;
}
let testowanaLiczba = 13;
console.log(`${testowanaLiczba} jest liczbą pierwszą? `, czyPierwsza(testowanaLiczba));