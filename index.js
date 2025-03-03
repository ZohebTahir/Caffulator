const timeInput = document.getElementById('input-time');
const read = document.querySelector('.read');

timeInput.addEventListener(
    "input", 
    () => {
        read.innerText = timeInput.value;
    },
    false,
);

console.log(timeInput.value);