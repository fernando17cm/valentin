function handleYesClick() {
    alert("¡Sabía que dirías que sí! 💖🥰");
}

function moveButton() {
    let button = document.querySelector(".no-button");
    let maxX = window.innerWidth - 150;
    let maxY = window.innerHeight - 100;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
