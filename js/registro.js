const createBtn = document.getElementById("create-account-btn");

createBtn.addEventListener("click", () => {
    const username = document.getElementById("new-username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("new-password").value;
    const confirm = document.getElementById("confirm-password").value;

    if (!username || !password || !confirm) {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (password !== confirm) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Verifica si ya existe el usuario
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find(user => user.username === username);

    if (userExists) {
        alert("Ese nombre de usuario ya está registrado.");
        return;
    }

    // Guarda el nuevo usuario
    existingUsers.push({ username, password });
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("¡Cuenta creada con éxito!");
    window.location.href = "index.html"; // Redirige al login
});
