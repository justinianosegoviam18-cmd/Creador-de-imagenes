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
    const grupo = document.getElementById("grupoInput").value;
    const extra = document.getElementById("extraInput").value;

    ctx.clearRect(0,0,1080,1080);

    // Fondo blanco
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 1080, 1080);

    // Círculo azul decorativo central
    ctx.fillStyle = "#0b1f4b";
    ctx.beginPath();
    ctx.arc(540, 540, 520, 0, Math.PI * 2);
    ctx.fill();

    // Círculo blanco interno (marco)
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(540, 540, 480, 0, Math.PI * 2);
    ctx.fill();

    // Logo centrado
    ctx.drawImage(logo, 390, 180, 300, 300);

    ctx.textAlign = "center";
    ctx.fillStyle = "#0b1f4b";

    ajustarTexto(ctx, materia.toUpperCase(), 800, 80, 540, 600);
    ajustarTexto(ctx, grupo.toUpperCase(), 800, 100, 540, 700);

    if(extra){
        ctx.font = "40px Arial";
        ctx.fillText(extra, 540, 780);
    }
}

function descargarImagen(){
    const canvas = document.getElementById("canvas");
    const enlace = document.createElement("a");
    enlace.download = "perfil_whatsapp.png";
    enlace.href = canvas.toDataURL("image/png");
    enlace.click();
}
