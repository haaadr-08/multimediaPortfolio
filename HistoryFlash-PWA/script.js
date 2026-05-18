fetch("data.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {

    const container = document.getElementById("eventContainer");

    data.events.forEach(function(event) {

        container.innerHTML += `

        <div class="card">

            <h2>${event.title}</h2>

            <div class="year">${event.year}</div>

            <img src="${event.image}" alt="${event.title}">

            <p>${event.description}</p>

            <audio controls>
                <source src="${event.audio}" type="audio/mpeg">
            </audio>

        </div>

        `;
    });

});

let deferredPrompt;

const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", function(e) {

    e.preventDefault();

    deferredPrompt = e;

    installBtn.style.display = "inline-block";

});

installBtn.addEventListener("click", function() {

    if (deferredPrompt) {

        deferredPrompt.prompt();

        deferredPrompt = null;

    }

});

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js");

}