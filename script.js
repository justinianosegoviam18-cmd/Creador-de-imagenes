const logo = new Image();
logo.src = "logo.png"; // Logo fijo

function generarImagen() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const materia = document.getElementById("materiaInput").value;
    const grupo = document.getElementById("grupoInput").value;

    // Fondo azul institucional
    const gradiente = ctx.createLinearGradient(0, 0, 900, 500);
    gradiente.addColorStop(0, "#0b1f4b");
    gradiente.addColorStop(1, "#1d3c78");

    ctx.fillStyle = gradiente;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Línea decorativa
    ctx.fillStyle = "#ffcc00";
    ctx.fillRect(0, 80, canvas.width, 10);

    // Logo centrado arriba
    ctx.drawImage(logo, 325, 100, 250, 250);

    // Texto Materia
    ctx.fillStyle = "white";
    ctx.font = "bold 40px Arial";
    ctx.textAlign = "center";
    ctx.fillText(materia.toUpperCase(), canvas.width / 2, 400);

    // Texto Grupo
    ctx.font = "bold 60px Arial";
    ctx.fillStyle = "#ffcc00";
    ctx.fillText(grupo.toUpperCase(), canvas.width / 2, 460);
}

function descargarImagen() {
    const canvas = document.getElementById("canvas");
    const enlace = document.createElement("a");
    enlace.download = "grupo_facultad.png";
    enlace.href = canvas.toDataURL();
    enlace.click();
}