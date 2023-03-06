let tabla = [
    {Tradicional: "90-100", Range: "12-14", Letter: "A", "SBG Rating": "4"},
    {Tradicional: "80-89", Range: "9-11", Letter: "B", "SBG Rating": "3"},
    {Tradicional: "70-79", Range: "6-8", Letter: "C", "SBG Rating": "2"},
    {Tradicional: "60-69", Range: "3-5", Letter: "D", "SBG Rating": "1"},
    {Tradicional: "<60", Range: "1-2", Letter: "E", "SBG Rating": "0"},
    {Tradicional: "0", Range: "0", Letter: "F", "SBG Rating": "0"}
];

console.table(tabla);
tipoNota = prompt("Ingrese su formato(tradicional, range o sbg)");

if (tipoNota === "tradicional"){
    nota = prompt("Ingrese su nota en formato tradicional: ");
    tradicional()
}
else if (tipoNota === "range"){
    nota = prompt("Ingrese su nota en formato range; ");
    range()
}
else if (tipoNota === "sbg"){
    nota = prompt("Ingrese su nota en formato sbg: ");
    sbg()
}

function tradicional (){
    if (nota >= 90 && nota <= 100){
    console.log("Tu calificación es: A\ Superas la competencia");
    }
    else if (nota >= 80 && nota < 90){
    console.log("Tu calificación es: B\ Demuestras competencia");
    }
    else if (nota >= 70 && nota < 80){
    console.log("Tu calificación es: C\ Competencia media");
    }
    else if (nota >= 60 && nota < 70){
    console.log("Tu calificación es: D\ Bajo nivel de competencia");
    }
    else if (nota < 60  && nota != 0){
    console.log("Tu calificación es: E\ Le faltan todas las competencias");
    }
    else if (nota == 0){
    console.log("Tu calificación es: F\ No tuvo intentos");
    }
    else ("Ingrese una nota válida: ")
}

function range(){
    if (nota >= 12 && nota <= 14){
    console.log("Tu calificación es: A\ Superas la competencia");
    }
    else if (nota >= 9 && nota < 12){
    console.log("Tu calificación es: B\ Demuestras competencia");
    }
    else if (nota >= 6 && nota < 9){
    console.log("Tu calificación es: C\ Competencia media");
    }
    else if (nota >= 3 && nota < 6){
    console.log("Tu calificación es: D\ Bajo nivel de competencia");
    }
    else if (nota <= 1 && nota < 3){
    console.log("Tu calificación es: E\ Le faltan todas las competencias");
    }
    else if (nota == 0){
    console.log("Tu calificación es: F\ No tuvo intentos");
    }
    else ("Ingrese una nota válida")
}

function sbg (){
    if (nota === "4"){
    console.log("Tu calificación es: A\ Superas la competencia");
    }
    else if (nota === "3"){
    console.log("Tu calificación es: B\ Demuestras competencia");
    }
    else if (nota === "2"){
    console.log("Tu calificación es: C\ Competencia media");
    }
    else if (nota === "1"){
    console.log("Tu calificación es: D\ Bajo nivel de competencia");
    }
    else if (nota === "0"){
    console.log("Tu calificación es: F\ No tuvo intentos");
    }
    else ("Ingrese una nota válida: ")
}

