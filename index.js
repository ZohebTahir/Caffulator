const time = document.querySelector('.input');
const read = document.querySelector('.read');

time.addEventListener(
    "input", 
    () => {
        read.innerText = time.value;
    },
    false,
);