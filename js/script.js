const audio = document.getElementById("intro-audio");
const muteBtn = document.getElementById("mute-btn");
const volumeSlider = document.getElementById("volume-slider");

if (audio) {
    audio.volume = 0.5;

    muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;
        muteBtn.textContent = audio.muted ? "🔇" : "🔊";
    });

    volumeSlider.addEventListener("input", () => {
        audio.volume = volumeSlider.value;
        audio.muted = false;
        muteBtn.textContent = "🔊";
    });
}

// LOGIN
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userFound = users.find(user => user.username === username && user.password === password);

        if (userFound) {
            alert("¡Bienvenido a Galaxy RP!");
            // Aquí puedes redirigir al usuario a la tienda o al panel principal
            // window.location.href = "tienda.html";
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
}
