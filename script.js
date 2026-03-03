const logo = new Image();
logo.src = "logo.png";

function generarImagen() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const materia = document.getElementById("materiaInput").value;
    const grupo = document.getElementById("grupoInput").value;
    const docente = document.getElementById("docenteInput").value;
    const carrera = document.getElementById("carreraInput").value;
    const gestion = document.getElementById("gestionInput").value;

    // Fondo blanco
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Diseño azul decorativo (esquina)
    ctx.fillStyle = "#0b1f4b";
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(500,0);
    ctx.lineTo(0,300);
    ctx.closePath();
    ctx.fill();

    // Línea inferior azul
    ctx.fillRect(0, 1000, 1080, 80);

    // Logo centrado arriba
    ctx.drawImage(logo, 390, 150, 300, 300);

    // Texto principal
    ctx.fillStyle = "#0b1f4b";
    ctx.font = "bold 70px Arial";
    ctx.textAlign = "center";
    ctx.fillText(materia.toUpperCase(), 540, 550);

    ctx.font = "bold 90px Arial";
    ctx.fillText(grupo.toUpperCase(), 540, 650);

    // Información opcional
    ctx.font = "40px Arial";
    let y = 750;

    if(docente){
        ctx.fillText("Docente: " + docente, 540, y);
        y += 60;
    }

    if(carrera){
        ctx.fillText("Carrera: " + carrera, 540, y);
        y += 60;
    }

    if(gestion){
        ctx.fillText("Gestión: " + gestion, 540, y);
    }
}

function descargarImagen() {
    const canvas = document.getElementById("canvas");
    const enlace = document.createElement("a");
    enlace.download = "grupo_whatsapp.png";
    enlace.href = canvas.toDataURL("image/png");
    enlace.click();
}
