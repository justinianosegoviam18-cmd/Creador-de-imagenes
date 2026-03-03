const logo = new Image();
logo.src = "logo.png";

function ajustarTexto(ctx, texto, maxWidth, tamañoInicial, x, y, lineHeight) {
    let fontSize = tamañoInicial;
    ctx.font = "bold " + fontSize + "px Arial";

    while (ctx.measureText(texto).width > maxWidth && fontSize > 20) {
        fontSize -= 2;
        ctx.font = "bold " + fontSize + "px Arial";
    }

    // Dividir en líneas si aún es muy largo
    const palabras = texto.split(" ");
    let linea = "";
    let lineas = [];

    for (let i = 0; i < palabras.length; i++) {
        let prueba = linea + palabras[i] + " ";
        if (ctx.measureText(prueba).width > maxWidth) {
            lineas.push(linea);
            linea = palabras[i] + " ";
        } else {
            linea = prueba;
        }
    }
    lineas.push(linea);

    for (let i = 0; i < lineas.length; i++) {
        ctx.fillText(lineas[i], x, y + (i * lineHeight));
    }

    return fontSize;
}

function generarImagen() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const materia = document.getElementById("materiaInput").value;
    const grupo = document.getElementById("grupoInput").value;
    const docente = document.getElementById("docenteInput").value;
    const carrera = document.getElementById("carreraInput").value;
    const gestion = document.getElementById("gestionInput").value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fondo blanco
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ondas azules decorativas
    ctx.fillStyle = "#0b1f4b";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(1080, 200, 1080, 0);
    ctx.fill();

    ctx.fillStyle = "#1d3c78";
    ctx.beginPath();
    ctx.moveTo(0, 1080);
    ctx.quadraticCurveTo(0, 850, 400, 1080);
    ctx.fill();

    // Círculos decorativos
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = "#0b1f4b";
    ctx.beginPath();
    ctx.arc(900, 200, 150, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(200, 900, 200, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;

    // Logo
    ctx.drawImage(logo, 390, 130, 300, 300);

    ctx.textAlign = "center";
    ctx.fillStyle = "#0b1f4b";

    // Materia responsive
    ajustarTexto(ctx, materia.toUpperCase(), 900, 80, 540, 520, 90);

    // Grupo responsive
    ctx.fillStyle = "#1d3c78";
    ajustarTexto(ctx, grupo.toUpperCase(), 900, 100, 540, 650, 100);

    // Información opcional
    ctx.fillStyle = "#333";
    ctx.font = "40px Arial";

    let y = 780;

    if (docente) {
        ajustarTexto(ctx, "Docente: " + docente, 900, 40, 540, y, 50);
        y += 60;
    }

    if (carrera) {
        ajustarTexto(ctx, "Carrera: " + carrera, 900, 40, 540, y, 50);
        y += 60;
    }

    if (gestion) {
        ajustarTexto(ctx, "Gestión: " + gestion, 900, 40, 540, y, 50);
    }
}

function descargarImagen() {
    const canvas = document.getElementById("canvas");
    const enlace = document.createElement("a");
    enlace.download = "grupo_whatsapp.png";
    enlace.href = canvas.toDataURL("image/png");
    enlace.click();
}
