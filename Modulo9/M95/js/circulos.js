/************* CORE PROGRAM *************/

/* Crea los dos círculos */

function calcular() {
    const x1 = parseInt(document.getElementById("x1").value),
          y1 = parseInt(document.getElementById("y1").value),
          r1 = parseInt(document.getElementById("r1").value),
          x2 = parseInt(document.getElementById("x2").value),
          y2 = parseInt(document.getElementById("y2").value),
          r2 = parseInt(document.getElementById("r2").value);
    
    const centro1 = new Punto(x1, y1),
          centro2 = new Punto(x2, y2),
          circulo1 = new Circulo(centro1, r1),
          circulo2 = new Circulo(centro2, r2);
    
    document.getElementById("text").innerHTML =
        `<li>La distancia entre los centros de los círculos es ${circulo1.distanciaCentro(circulo2)}.</li>
        <li>Los círculos ${circulo1.esIgual(circulo2) ? "sí" : "no"} son iguales.</li>		
        <li>Los círculos ${circulo1.esConcentrico(circulo2) ? "sí" : "no"} son concéntricos.<br>
		    <em>Dos círculos son concéntricos si tienen igual centro.</em></li>
        <li>Los círculos ${circulo1.tieneIgualRadio(circulo2) ? "sí" : "no"} tienen igual radio.</li>
        <li>Los círculos ${circulo1.esTangente(circulo2) ? "sí" : "no"} son tangentes.<br>
		    <em>Dos círculos son tangentes (<b>sólo se tocan en un sólo punto</b>) si la distancia <br>
            entre sus centros es igual a la suma de sus radios</em></li>
        <li>Los círculos ${circulo1.esSecante(circulo2) ? "sí" : "no"} son secantes.<br>
		    <em>Dos círculos son secantes (<b>se tocan en dos puntos</b>) si la distancia entre sus centros <br>
            se encuentra entre la resta de sus radios y la suma de sus radios.</em></li>
        <li>Los círculos ${circulo1.tocaA(circulo2) ? "no" : "sí"} se tocan.<br>
		    <em>Dos círculos no se tocan si la distancia entre sus centros es mayor a la suma de sus radios</em></li>`;
    
    drawCanvas(x1, y1, r1, x2, y2, r2);
}

/********** DRAWING OF circuloS IN CANVAS **********/

/* GLOBAL VARIABLES */
const Canvas   = document.getElementById('graph'),
      Width    = Canvas.width,                     
      Height   = Canvas.height,
      Boundary = [];            //boundary of cartesian plane

let context;                    //canvas context

/* Function that governs the whole drawing process */
const drawCanvas = (x1, y1, r1, x2, y2, r2) => {
    
    calcBoundary(x1, y1, r1, x2, y2, r2);

    if (Canvas.getContext) {
            // Set up canvas
        context = Canvas.getContext('2d');
        context.clearRect(0, 0, Width, Height);
     
            // Draw content
        drawAxes();
        rendercirculos(x1, y1, r1, x2, y2, r2);
    }
}

/* Calculates boundaries of cartesian plane */
const calcBoundary = (x1, y1, r1, x2, y2, r2) => {    

        // Boundaries required by circulos
    const leftBoundary   = Math.abs(Math.min(x1 - r1, x2 - r2)),
          rightBoundary  = Math.abs(Math.max(x1 + r1, x2 + r2)),
          topBoundary    = Math.abs(Math.min(y1 - r1, y2 - r2)),
          bottomBoundary = Math.abs(Math.max(y1 + r1, y2 + r2));
    
        // Maximum value chosen in order to draw a symmetrical plane
        // +1 to add padding between circulos and boundary
    const maxBoundary = Math.max(leftBoundary, rightBoundary, topBoundary, bottomBoundary) + 1;
    
        // Boundary array filled with four boundaries of cartesian plane
    Boundary[0] = -maxBoundary;
    Boundary[1] = maxBoundary;
    Boundary[2] = -maxBoundary;
    Boundary[3] = maxBoundary;
}

/* Functions that transform cartesian coordinates into canvas context coordinates */
const canvasX = x => {
    return (x - Boundary[0]) / (Boundary[1] - Boundary[0]) * Width;
}
const canvasY = y => {
    return Height - (y - Boundary[2]) / (Boundary[3] - Boundary[2]) * Height;
}
const canvasRadius = r => {
    return r * Width / (Boundary[1] - Boundary[0]);
}

/* Draws cartesian axes in canvas */
const drawAxes = () => {
    context.save();
    context.lineWidth = 0.5;
	context.strokeStyle = "#aaaaaa";
    
        // +Y axis
    context.beginPath();
    context.moveTo(canvasX(0), canvasY(0));
    context.lineTo(canvasX(0), canvasY(Boundary[3]));
    context.stroke();

        // -Y axis
    context.beginPath();
    context.moveTo(canvasX(0), canvasY(0));
    context.lineTo(canvasX(0), canvasY(Boundary[2]));
    context.stroke();

        // Y axis ruler
    for (var i = 1; i < Boundary[3]; ++i) {
        context.beginPath();
        context.moveTo(canvasX(0) - 5, canvasY(i));
        context.lineTo(canvasX(0) + 5, canvasY(i));
        context.stroke();
    }

    for (var i = 1; i > Boundary[2]; --i) {
        context.beginPath();
        context.moveTo(canvasX(0) - 5, canvasY(i));
        context.lineTo(canvasX(0) + 5, canvasY(i));
        context.stroke();
    }

        // +X axis
    context.beginPath();
    context.moveTo(canvasX(0), canvasY(0));
    context.lineTo(canvasX(Boundary[1]), canvasY(0));
    context.stroke();

        // -X axis
    context.beginPath();
    context.moveTo(canvasX(0), canvasY(0));
    context.lineTo(canvasX(Boundary[0]), canvasY(0));
    context.stroke();

        // X axis ruler
    for (var i = 1; i < Boundary[1]; ++i) {
        context.beginPath();
        context.moveTo(canvasX(i), canvasY(0) - 5);
        context.lineTo(canvasX(i), canvasY(0) + 5);
        context.stroke();
    }

    for (var i = 1; i > Boundary[0]; --i) {
        context.beginPath();
        context.moveTo(canvasX(i), canvasY(0) - 5);
        context.lineTo(canvasX(i), canvasY(0) + 5);
        context.stroke();
    }

    context.restore();
}

/* Draws both circulos */
const rendercirculos = (x1, y1, r1, x2, y2, r2) => {
    context.beginPath();
    context.arc(canvasX(x1), canvasY(y1), canvasRadius(r1), 0, 2 * Math.PI);
	context.strokeStyle = "#ff1493";
    context.stroke();

    context.beginPath();
    context.arc(canvasX(x2), canvasY(y2), canvasRadius(r2), 0, 2 * Math.PI);
	context.strokeStyle = "#0000ff";
    context.stroke();
}