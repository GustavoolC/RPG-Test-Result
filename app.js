let ficha = [40,-200,60,55,0,45,50,50,50,35,55,0,60,0,0,0,50,40,0,0,50,50,60,0,0,0,0];

let pericia = ficha[1];
let atributo = ficha[1];
let periciaDado = rolarDado();
let atributoDado = rolarDado();

let periciaResultado = analisarResultadoInicial(pericia,periciaDado);
let atributoResultado = analisarResultadoInicial(atributo,atributoDado);
let resultadoFinal = analisarResultadoFinal();

function rolarDado() {
    return parseInt(Math.random() * 100 + 1);
}

function analisarResultadoInicial(pontos,resultado) {
    if (pontos <= -100 + resultado) {
        //console.log("eu sou o problema! :D");
        return "Desastre";
    } else if (pontos < resultado) {
        if (resultado == 100) {
            if (pontos < 100) {
                //console.log("eu sou o problema! :O");
                return "Desastre";
        }
    } else {
        //console.log("eu sou o problema! :(");
        return "Falha";
    }
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
    } else if (pontos > 100) {
        if (resultado <= pontos - 80) {
            //console.log("eu sou o problema! :0");
            return "Extremo";
        } else if (resultado <= pontos - 50) {
            //console.log("eu sou o problema! :S");
            return "Bom";
        } else {
            return "Normal";
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
    

function analisarResultadoFinal() {
    if (periciaResultado == "Crítico") {
        //console.log("eu existo?");
        if (atributoResultado == "Crítico") {
            return "Super Crítico";
        } else if (atributoResultado == "Desastre") {
            return "Normal";
        } else {
            return "Crítico";
        }
    } else if (periciaResultado == "Extremo") {
        if (atributoResultado == "Crítico") {
            return "Crítico";
        } else if (atributoResultado == "Extremo") {
            return "Crítico";
        } else if (atributoResultado == "Desastre") {
            return "Desastre";
        } else {
            return "Extremo";
        }
    } else if (periciaResultado == "Bom") {
        if (atributoResultado == "Crítico") {
            return "Crítico";
        } else if (atributoResultado == "Extremo") {
            return "Extremo";
        } else if (atributoResultado == "Bom") {
            return "Extremo";
        } else if (atributoResultado == "Desastre") {
            return "Desastre";
        } else {
            return "Bom";
        }
    } else if (periciaResultado == "Normal") {
        if (atributoResultado == "Crítico") {
            return "Crítico";
        } else if (atributoResultado == "Falha") {
            return "Normal";
        } else if (atributoResultado == "Desastre") {
            return "Desastre";
        } else {
            return "Bom";
        }
    } else if (periciaResultado == "Falha") {
        if (atributoResultado == "Crítico") {
            return "Crítico";
        } else if (atributoResultado == "Falha") {
            return "Falha";
        } else if (atributoResultado == "Desastre") {
            return "Desastre";
        } else {
            return "Normal";
        }
    } else if (periciaResultado == "Desastre") {
        if (atributoResultado == "Crítico") {
            return "Normal";
        } else if (atributoResultado == "Falha") {
            return "Desastre";
        } else if (atributoResultado == "Desastre") {
            return "Super Desastre";
        } else {
            return "Falha";
        }
    }
}


    console.log(`Pontos na Perícia: ${pericia}`);
    console.log(`Rolagem da Perícia: ${periciaDado}`);
    console.log(`Resultado da Perícia: ${periciaResultado}`);
    console.log(`Pontos no Atributo: ${atributo}`);
    console.log(`Rolagem do Atributo: ${atributoDado}`);
    console.log(`Resultado do Atributo: ${atributoResultado}`);
    console.log(`-------------------------------------------------------`);
    console.log(`${periciaResultado} + ${atributoResultado}`);
    console.log(`Resultado Final: ${resultadoFinal}`);