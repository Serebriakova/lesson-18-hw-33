let elements = document.querySelectorAll('li');
let arr = [];
let numOfElements = 0;
for (let elem of elements) {
    console.log(elem);
    numOfElements ++;
arr.push(elem.innerHTML);
}

console.log(numOfElements);
console.log(arr);
