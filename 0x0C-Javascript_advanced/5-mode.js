// Changing DOM with closure
const body = document.querySelector("body");

function changeMode(size, weight, transform, background, color) {
    return () => {
        body.style.fontSize = size;
        body.style.fontWeight = weight;
        body.style.textTransform = transform;
        body.style.backgroundColor = background;
        body.style.color = color;
    };
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const p = document.createElement("p");
    p.textContent = "Welcome Holberton!";
    body.appendChild(p);

    const spookyBtn = document.createElement("button");
    spookyBtn.textContent = "Spooky";
    body.appendChild(spookyBtn);

    const darkBtn = document.createElement("button");
    darkBtn.textContent = "Dark mode";
    body.appendChild(darkBtn);

    const screamBtn = document.createElement("button");
    screamBtn.textContent = "Scream mode";
    body.appendChild(screamBtn);

    spookyBtn.onclick = spooky;
    darkBtn.onclick = darkMode;
    screamBtn.onclick = screamMode;
}

main();
