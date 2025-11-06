function kleur_aanpassen() {
    const h1 = document.getElementById("title");

    if (h1.textContent === "Hallo wereld") {
        h1.style.color = "blue";
        h1.textContent = "Inhoud aangepast!";
    } else {
        h1.style.color = "black";
        h1.textContent = "Hallo wereld";
    }
}
