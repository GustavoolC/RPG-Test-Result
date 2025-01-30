let ficha = [40,50,60,55,0,45,50,50,50,35,55,0,60,0,0,0,50,40,0,0,50,50,60,0,0,0,0];

let pericia = ficha[18];
let atributo = ficha[2];
let periciaDado = rolarDado();
let atributoDado = rolarDado();

let periciaResultado = analisarResultadoInicial(pericia,periciaDado);
let atributoResultado = analisarResultadoInicial(atributo,atributoDado);


function rolarDado() {
    return parseInt(Math.random() * 100 + 1);
}

function analisarResultadoInicial(pontos,resultado) {
    if (pontos <= -100 + resultado) {
        //console.log("eu sou o problema! :D");
        return "Desastre";
    } else if (pontos < resultado) {
        //console.log("eu sou o problema! :(");
        return "Falha";
    } else if (pontos >= 99 + resultado) {
        //console.log("eu sou o problema! >:D");
        return "Crítico";
    } else if (resultado == 1) {
        if (pontos < 1) {
            //console.log("eu sou o problema! D:");
            return "Falha";
        } else {
           //console.log("eu sou o problema! :/");
            return "Crítico";
        }
    } else if (resultado == 100) {
        if (pontos < 100) {
            //console.log("eu sou o problema! :O");
            return "Desastre";
        }
    } else if (resultado <= pontos / 5) {
        //console.log("eu sou o problema! :0");
        return "Extremo";
    } else if (resultado <= pontos / 2) {
        //console.log("eu sou o problema! :S");
        return "Bom";
    } else if (resultado <= pontos) {
        //console.log("eu sou o problema! :P");
        return "Normal";
    }
}

console.log(`Pontos na Perícia: ${pericia}`);
console.log(`Rolagem da Perícia: ${periciaDado}`);
console.log(`Resultado da Perícia: ${periciaResultado}`);
console.log(`Pontos no Atributo: ${atributo}`);
console.log(`Rolagem do Atributo: ${atributoDado}`);
console.log(`Resultado do Atributo: ${atributoResultado}`);

    //`Pontos na Perícia: ${pericia}`
    //`Rolagem da Perícia: ${periciaDado}`
    //`Resultado da Perícia: ${periciaResultado}`

    //`Pontos no Atributo: ${atributo}`
    //`Rolagem do Atributo: ${atributoDado}`
    //`Resultado do Atributo: ${atributoResultado}`