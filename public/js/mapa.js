let mapa = 1;

function mapaInfo(planeta) {
    planetaEscolhido = planeta;
    document.getElementById("planetas-1").setAttribute("class","invisivel");
    document.getElementById("planetas-2").setAttribute("class","invisivel");
    document.getElementById("planetas-3").setAttribute("class","invisivel");
    document.getElementById("planetas-0").setAttribute("class","invisivel");
    document.getElementById("planetas--1").setAttribute("class","invisivel");
    document.getElementById("xizinho").setAttribute("class","xizinho");
    document.getElementById(`info-${planeta}`).setAttribute("class","info-planeta");
    if (planetaEscolhido == "serra" || planetaEscolhido == "urano" || planetaEscolhido == "jupiter" || planetaEscolhido == "hidropia") {
        document.getElementById("xizinho").setAttribute("class","xizinho-3");
    }
    if (planetaEscolhido == "terra" || planetaEscolhido == "favella" || planetaEscolhido == "universo-1" || planetaEscolhido == "universo-2" || planetaEscolhido == "terra-fantasma") {
        document.getElementById("xizinho").setAttribute("class","xizinho-4");
    }
    if (planetaEscolhido == "estellar" || planetaEscolhido == "mirai") {
        document.getElementById("xizinho").setAttribute("class","xizinho-2");
    }
    if (planetaEscolhido == "corrupcao" || planetaEscolhido == "eta-subway") {
        document.getElementById(`info-${planeta}`).setAttribute("class","info-corrupcao");
    }
    if (planetaEscolhido == "universo-1" || planetaEscolhido == "universo-2") {
        document.getElementById(`info-${planeta}`).setAttribute("class","info-universo");
    }
    if (planetaEscolhido == "eta-subway" || planetaEscolhido == "saturno") {
        document.getElementById("xizinho").setAttribute("class","xizinho-5");
    }
    if (planetaEscolhido == "dimensao-fogo" || planetaEscolhido == "prisao" || planetaEscolhido == "marte") {
        document.getElementById("xizinho").setAttribute("class","xizinho-6");
    }
    if (planetaEscolhido == "dimensao-fogo" || planetaEscolhido == "prisao") {
        document.getElementById(`info-${planeta}`).setAttribute("class","info-fogo");
    }
    if (planetaEscolhido == "techbyte") {
        document.getElementById("xizinho").setAttribute("class","xizinho-8");
        document.getElementById(`info-${planeta}`).setAttribute("class","info-techbyte");
    }
    if (planetaEscolhido == "falha") {
        document.getElementById("xizinho").setAttribute("class","xizinho-7");
        document.getElementById(`info-${planeta}`).setAttribute("class","info-falha");
    }
}

function desmaparInfo() {
    document.getElementById(`info-${planetaEscolhido}`).setAttribute("class","invisivel");
    document.getElementById("xizinho").setAttribute("class","invisivel");
    document.getElementById(`planetas-${mapa}`).setAttribute("class","mapa-display");
}

function alterarMapa(variavel) {
    if (variavel == 2) {
        document.getElementById("fundo-mapa").setAttribute("class","fundo-2");
        mapa = 2;
    } else if (variavel == 1) {
        document.getElementById("fundo-mapa").setAttribute("class","fundo-1");
        mapa = 1;
    } else if (variavel == 3) {
        document.getElementById("fundo-mapa").setAttribute("class","fundo-3");
        mapa = 3;
    } else if (variavel == 0) {
        document.getElementById("fundo-mapa").setAttribute("class","fundo-0");
        mapa = 0;
    } else if (variavel == -1) {
        document.getElementById("fundo-mapa").setAttribute("class","fundo--1");
        mapa = -1;
    }
    desmaparInfo();
}