function handleYesClick() {
    alert("¡Sabía que dirías que sí! 💖🥰");
}

function moveButton() {
    let button = document.querySelector(".no-button");
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    button.style.transform = `translate(${x}px, ${y}px)`;
}
