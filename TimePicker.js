function getTimePartsFromPickable(timePickable) {
    // 12:45 pm
    const pattern = /^(\d+):(\d+) (am|pm)$/; 
    // const [hour, minute, meridiem] = Array.from(timePickable.value.match(pattern))

    const [hour, minute, meridiem] = Array.from(timePickable.value.match(pattern)).splice(1);

return {
    hour,
    minute,
    meridiem
}
}

function getSelectsFromTimeSelect(timePicker) {

}

const exampleTimePickable = document.querySelector(".time-pickable");
const exampleTimePicker = document.querySelector(".time-pickable")

console.log(getTimePartsFromPickable(exampleTimePickable));