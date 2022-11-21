const numDisplay = document.getElementById('window');
const addBtn = document.getElementById('add');
const reduceBtn = document.getElementById('reduce');
let num = 0;

addBtn.addEventListener("click", addNum);

function addNum() {
    numDisplay.innerText = num += 1;
    numDisplay.style.color = 'lime';
}

reduceBtn.addEventListener("click", reduceNum);

function reduceNum() {
    numDisplay.innerText = num -= 1;
    if (num === -1) {
        numDisplay.style.color = 'red';
    }
}