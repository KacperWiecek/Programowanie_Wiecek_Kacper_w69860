// Zadanie 1

// Pętla for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("Happy New Year!");

// Pętla while
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log("Happy New Year!");

// Zadanie 2

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

let number = prompt("Podaj liczbę, dla której chcesz obliczyć silnię: ");
console.log(factorial(Number(number)));

// Zadanie 3

function openWin() {
    let age = prompt("Podaj ile masz lat: ");
    if (age >= 18) {
        window.open("", "_self");
    } else {
        window.open("https://www.gry.pl/");
    }
}

openWin();

// Zadanie 4

function changeColor(clickedButton) {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        if (button !== clickedButton) {
            button.classList.remove('active');
        }
    });
    
    clickedButton.classList.toggle('active');
}

// Zadanie 5

function toggleVisibility() {
    var element = document.getElementById('hiddenElement');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
  }
  
  // Zadanie 6
  
  function addItem() {
    var input = document.getElementById('itemInput');
    var newItem = input.value;
    if (newItem) {
        var listItem = document.createElement('li');
        listItem.textContent = newItem;
        document.getElementById('itemList').appendChild(listItem);
        input.value = '';
    }
  }
  
  // Zadanie 7
  
  function addToTable() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    if (firstName && lastName) {
        var table = document.getElementById('tableBody');
        var row = table.insertRow();
        var firstNameCell = row.insertCell(0);
        var lastNameCell = row.insertCell(1);
        firstNameCell.textContent = firstName;
        lastNameCell.textContent = lastName;
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
    }
  }
  
  // Zadanie 8
  
  function convertToFahrenheit() {
    var celsius = document.getElementById('temperatureInput').value;
    var fahrenheit = celsius * 9/5 + 32;
    document.getElementById('result').textContent = `${fahrenheit} °F`;
  }
  
  function convertToCelsius() {
    var fahrenheit = document.getElementById('temperatureInput').value;
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('result').textContent = `${celsius} °C`;
  }
  
  // Zadanie 10
  
  function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;
    switch(operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '**': result = Math.pow(num1, num2); break;
    }
    document.getElementById('calcResult').textContent = "Wynik: " + result;
  }
  