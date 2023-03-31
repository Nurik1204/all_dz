const num1 = document.getElementById('num1');const num2 = document.getElementById('num2');
const add = document.getElementById('add');const subtract = document.getElementById('subtract');
const divide = document.getElementById('divide');const multiply = document.getElementById('multiply');
const clear = document.getElementById('clear');const result = document.getElementById('result');
add.addEventListener('click', function() {
    const n1 = parseFloat(num1.value);    const n2 = parseFloat(num2.value);
    result.innerHTML = n1 + n2;});
subtract.addEventListener('click', function() {
    const n1 = parseFloat(num1.value);    const n2 = parseFloat(num2.value);
    result.innerHTML = n1 - n2;});
divide.addEventListener('click', function() {
    const n1 = parseFloat(num1.value);    const n2 = parseFloat(num2.value);
    result.innerHTML = n1 / n2;});

multiply.addEventListener('click', function() {    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);    result.innerHTML = n1 * n2;
});
clear.addEventListener('click', function() {    num1.value = '';
    num2.value = '';    result.innerHTML = '';
});
