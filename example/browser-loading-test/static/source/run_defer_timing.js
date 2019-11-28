console.log('defer script run');
var element = document.querySelector('.text-color');
var color = window.getComputedStyle(element).color;
console.log(color);