const logo = new Image();
logo.src = "logo.png";

function ajustarTexto(ctx, texto, maxWidth, tamañoInicial, x, y) {
    let fontSize = tamañoInicial;
    ctx.font = "bold " + fontSize + "px Arial";

    while (ctx.measureText(texto).width > maxWidth && fontSize > 25) {
        fontSize -= 2;
        ctx.font = "bold " + fontSize + "px Arial";
    }

    ctx.fillText(texto, x, y);
}

function generarImagen() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const materia = document.getElementById("materiaInput").value;
    const sigla = document.getElementById("siglaInput").value;
    const grupo = document.getElementById("grupoInput").value;
    let gestion = document.getElementById("gestionInput").value;
if (!gestion.trim()) {
    gestion = "1/2026";
}
    const extra = document.getElementById("extraInput").value;

    ctx.clearRect(0,0,1080,1080);

    // Fondo blanco
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 1080, 1080);

    // Marco circular azul exterior
    ctx.fillStyle = "#0b1f4b";
    ctx.beginPath();
    ctx.arc(540, 540, 520, 0, Math.PI * 2);
    ctx.fill();

    // Interior blanco
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(540, 540, 480, 0, Math.PI * 2);
    ctx.fill();

    // Logo MÁS GRANDE
    ctx.drawImage(logo, 340, 140, 400, 400);

    ctx.textAlign = "center";
    ctx.fillStyle = "#0b1f4b";

    let altura = 600;

    if (materia) {
        ajustarTexto(ctx, materia.toUpperCase(), 800, 70, 540, altura);
        altura += 90;
    }

    if (sigla) {
        ctx.fillStyle = "#1d3c78";
        ajustarTexto(ctx, sigla.toUpperCase(), 800, 60, 540, altura);
        altura += 80;
        ctx.fillStyle = "#0b1f4b";
    }

    if (grupo) {
        ajustarTexto(ctx, grupo.toUpperCase(), 800, 90, 540, altura);
        altura += 100;
    }

    if (gestion) {
        ctx.font = "40px Arial";
        ctx.fillText("Gestión: " + gestion, 540, altura);
        altura += 60;
    }

    if (extra) {
        ctx.font = "35px Arial";
        ctx.fillText(extra, 540, altura);
    }
}

function descargarImagen(){
    const canvas = document.getElementById("canvas");
    const enlace = document.createElement("a");
    enlace.download = "perfil_whatsapp.png";
    enlace.href = canvas.toDataURL("image/png");
    enlace.click();
}

