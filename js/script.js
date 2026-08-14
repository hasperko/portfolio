const text = document.querySelector('.console-text');

const string = "Hello, world!";

let index = 0;
let typingInterval = setInterval(type, 100);
function type() {
    if (index < string.length) {
        text.textContent += string[index];
        index++;
    } else {
        clearInterval(typingInterval);
        setTimeout(() => {
            typingInterval = setInterval(unType, 100);
        }, 1000);
    }
}

function unType() {
    text.textContent = text.textContent.slice(0, -1);
    index--;
    if (index < 0) {
        index = 0;
        text.textContent = '';
        clearInterval(typingInterval);
        setTimeout(() => {
            typingInterval = setInterval(type, 100);
        }, 1000);
    }
}