window.onload = function () {
    bromaChuckNorris();
};

async function bromaChuckNorris() {
    try {
        let respuesta = await fetch("https://api.chucknorris.io/jokes/random");
        let datos = await respuesta.json();
        creartarjeta(datos.value);
    } catch (error) {
        console.error("Error al obtener la broma:", error);
    }
}

function creartarjeta(chiste) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    const broma = document.createElement("p");
    broma.innerHTML = chiste;
    broma.className = "joke-text";

    const boton = document.createElement("button");
    boton.innerText = "Nova Broma";
    boton.className = "joke-button";
    boton.onclick = bromaChuckNorris;

    tarjeta.appendChild(broma);
    tarjeta.appendChild(boton);

    const contenidor = document.getElementById("contenidor");
    contenidor.innerHTML = '';
    contenidor.appendChild(tarjeta);
}
