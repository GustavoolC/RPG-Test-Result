let personagemEscolhido = document.getElementById("personagens-escolha");
let vantagens;
let temaSelector = document.getElementById("tema-escolha");
let noturno = "true";
let tema = "apocalipse";
let rolador = document.getElementById("rolador");
let comparadorSize = document.getElementById("comparadorSize");
let definidorImpacto = document.getElementById("definidorImpacto");
let boxRoll = document.getElementById("testeroll");
let periciaEscolhida = document.getElementById("testeroll__pericia");
let atributoEscolhido = document.getElementById("testeroll__atributo");
let valoresIniciais1Logica = document.getElementById("testeroll__valoresiniciais1");
let barrinhaLogica = document.getElementById("testeroll__barras");
let valoresIniciais2Logica = document.getElementById("testeroll__valoresiniciais2");
let resultadoInicialLogica = document.getElementById("testeroll__resultadoinicial");
let resultadoFinalLogica = document.getElementById("testeroll__resultadofinal");
let resultadoFinal = "";
let sizeType = document.getElementById("size-type");
let metragem = document.getElementById("metragem-escolha");
let nomenclatura = document.getElementById("nomenclatura-escolha");
let personagemsize = document.getElementById("personagemsize-escolha");
let boxSize = document.getElementById("comparaSize");
let tamanhoEu;
let tamanhoEle;
let atacar;
let esquivar;
let dano;
let ataqueResultado = document.getElementById("ataque-vantagem");
let esquivaResultado = document.getElementById("esquiva-vantagem");
let danoResultado = document.getElementById("dano-adicional");
let periciaVtgSelector = document.getElementById("vantagens__pericia");
let atributoVtgSelector = document.getElementById("vantagens__atributo"); 
periciaVtgSelector.value = 0;
atributoVtgSelector.value = 0;
let periciaSelector = document.getElementById("testeroll__pericia");
let atributoSoloVtgSelector = document.getElementById("vantagens__atributo-solo");
let atributoAtivo = 0;
let definirAtributoVtg = document.getElementById("vantagens__atributo");

let codigo1descoberto = false;
let codigo2descoberto = false;
let codigo3descoberto = false;
let codigo4descoberto = false;
let codigo5descoberto = false;
let codigo6descoberto = false;
let codigo7descoberto = false;

let perfilEscolha = "zadiel";
    ficha = cdg("☠☾∹η☾∹☠☾∹☠∞∹☠∞∹☹∞∹☾∞∹☭∞∹☾∞∹★∞∹∞∹☾∹★☾∹☾∞∹♫∞∹♫☾∹☭∞∹☠∞∹☠∞∹☠∞∹☠∞∹η☾∹∞∹∞∹∞∹η☠").split(",");
    vantagens = cdg("♫∹♫∹♫∹♫∹♫∹♫∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹♫∹∞∹♫∹∞∹∞∹∞∹∞").split(",");
    verificarVantagens();

function atualizarPerfil() {
    let perfilImagem = document.getElementById("perfil");
    perfilEscolha = document.getElementById("personagens-escolha").value;

    if (tema == "cosmo" || tema == "secreto-1" || tema == "apocalipse") {
        if (perfilEscolha == "zadiel") {
            perfilImagem.setAttribute("src","assets/ZadielPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Zadiel");
        } else if (perfilEscolha == "artrodea") {
            perfilImagem.setAttribute("src","assets/ArtrodeaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Artrodea");
        } else if (perfilEscolha == "shaka") {
            perfilImagem.setAttribute("src","assets/ShakaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Shaka");
        } else if (perfilEscolha == "kyomi") {
            perfilImagem.setAttribute("src","assets/KyomiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Kyomi");
        } else if (perfilEscolha == "lux") {
            perfilImagem.setAttribute("src","assets/LuxPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Lux");
        } else if (perfilEscolha == "mabel") {
            perfilImagem.setAttribute("src","assets/MabelPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Mabel");
        } else if (perfilEscolha == "yukkimi") {
            perfilImagem.setAttribute("src","assets/YukkimiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Yukkimi");
        } else if (perfilEscolha == "anagi") {
            perfilImagem.setAttribute("src","assets/AnagiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Anagi");
        } else if (perfilEscolha == "personagem-secreto-2-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHEPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP qHEP"));
        } else if (perfilEscolha == "personagem-secreto-2-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE"));
        } else if (perfilEscolha == "personagem-secreto-2-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE"));
        } else if (perfilEscolha == "personagem-secreto-2-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-6") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hEPLQPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP hEPLQP"));
        } else if (perfilEscolha == "personagem-secreto-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xIMTPIUEUlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xIMTPIUEU"));
        } else if (perfilEscolha == "personagem-secreto-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/nQJAKQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ nQJAKQ"));
        } else if (perfilEscolha == "personagem-secreto-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uTZTqKJKINEQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uTZT qKJKINEQ"));
        } else if (perfilEscolha == "personagem-secreto-6-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHQKEFQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI qHQKEFQ"));
        } else if (perfilEscolha == "personagem-secreto-6-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/tZHECQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI tZHECQ"));
        } else if (perfilEscolha == "personagem-secreto-6-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xAGAKTQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xAGAKTQ"));
        } else if (perfilEscolha == "personagem-secreto-6-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/rAXQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI rAXQ"));
        } else if (perfilEscolha == "izumi") {
            perfilImagem.setAttribute("src","assets/IzumiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Izumi");
        } else if (perfilEscolha == "victoria") {
            perfilImagem.setAttribute("src","assets/VictoriaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Victoria");
        } else if (perfilEscolha == "vladimir") {
            perfilImagem.setAttribute("src","assets/VladimirPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Vladimir");
        } else if (perfilEscolha == "rodrigo") {
            perfilImagem.setAttribute("src","assets/RodrigoPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Rodrigo")
        } else if (perfilEscolha == "planetafetal") {
            perfilImagem.setAttribute("src","assets/PlanetafetalPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Feto Cósmico");
        } else if (perfilEscolha == "personagem-secreto-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hTWJIKTQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ hTWJIKTQ lQKQPTJQNQ"));
        }
    } else if (tema == "cataclismo") {
        if (perfilEscolha == "zadiel") {
            perfilImagem.setAttribute("src","assets/ZadielPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Zadiel");
        } else if (perfilEscolha == "artrodea") {
            perfilImagem.setAttribute("src","assets/ArtrodeaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Artrodea");
        } else if (perfilEscolha == "shaka") {
            perfilImagem.setAttribute("src","assets/ShakaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Shaka");
        } else if (perfilEscolha == "kyomi") {
            perfilImagem.setAttribute("src","assets/KyomiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Kyomi");
        } else if (perfilEscolha == "lux") {
            perfilImagem.setAttribute("src","assets/LuxPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Lux");
        } else if (perfilEscolha == "mabel") {
            perfilImagem.setAttribute("src","assets/MabelPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Mabel");
        } else if (perfilEscolha == "yukkimi") {
            perfilImagem.setAttribute("src","assets/YukkimiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Yukkimi");
        } else if (perfilEscolha == "anagi") {
            perfilImagem.setAttribute("src","assets/AnagiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Anagi");
        } else if (perfilEscolha == "personagem-secreto-2-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHEPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP qHEP"));
        } else if (perfilEscolha == "personagem-secreto-2-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE"));
        } else if (perfilEscolha == "personagem-secreto-2-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE"));
        } else if (perfilEscolha == "personagem-secreto-2-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-6") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hEPLQPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP hEPLQP"));
        } else if (perfilEscolha == "personagem-secreto-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xIMTPIUEUlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xIMTPIUEU"));
        } else if (perfilEscolha == "personagem-secreto-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/nQJAKQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ nQJAKQ"));
        } else if (perfilEscolha == "personagem-secreto-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uTZTqKJKINEQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uTZT qKJKINEQ"));
        } else if (perfilEscolha == "personagem-secreto-6-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHQKEFQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI qHQKEFQ"));
        } else if (perfilEscolha == "personagem-secreto-6-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/tZHECQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI tZHECQ"));
        } else if (perfilEscolha == "personagem-secreto-6-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xAGAKTQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xAGAKTQ"));
        } else if (perfilEscolha == "personagem-secreto-6-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/rAXQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI rAXQ"));
        } else if (perfilEscolha == "izumi") {
            perfilImagem.setAttribute("src","assets/IzumiPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Izumi");
        } else if (perfilEscolha == "victoria") {
            perfilImagem.setAttribute("src","assets/VictoriaPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone da Victoria");
        } else if (perfilEscolha == "vladimir") {
            perfilImagem.setAttribute("src","assets/VladimirPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Vladimir");
        } else if (perfilEscolha == "rodrigo") {
            perfilImagem.setAttribute("src","assets/RodrigoPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Rodrigo");
        } else if (perfilEscolha == "planetafetal") {
            perfilImagem.setAttribute("src","assets/PlanetafetalPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Feto Cósmico");
        } else if (perfilEscolha == "personagem-secreto-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hTWJIKTQlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ hTWJIKTQ lQKQPTJQNQ"));
        }
    } else if (tema == "aquarela") {
        if (perfilEscolha == "zadiel") {
            perfilImagem.setAttribute("src","assets/ZadielPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Zadiel");
        } else if (perfilEscolha == "artrodea") {
            perfilImagem.setAttribute("src","assets/ArtrodeaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Artrodea");
        } else if (perfilEscolha == "shaka") {
            perfilImagem.setAttribute("src","assets/ShakaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Shaka");
        } else if (perfilEscolha == "kyomi") {
            perfilImagem.setAttribute("src","assets/KyomiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Kyomi");
        } else if (perfilEscolha == "lux") {
            perfilImagem.setAttribute("src","assets/LuxPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Lux");
        } else if (perfilEscolha == "mabel") {
            perfilImagem.setAttribute("src","assets/MabelPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Mabel");
        } else if (perfilEscolha == "yukkimi") {
            perfilImagem.setAttribute("src","assets/YukkimiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Yukkimi");
        } else if (perfilEscolha == "anagi") {
            perfilImagem.setAttribute("src","assets/AnagiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Anagi");
        } else if (perfilEscolha == "personagem-secreto-2-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHEPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP qHEP"));
        } else if (perfilEscolha == "personagem-secreto-2-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE"));
        } else if (perfilEscolha == "personagem-secreto-2-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE"));
        } else if (perfilEscolha == "personagem-secreto-2-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-6") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hEPLQPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP hEPLQP"));
        } else if (perfilEscolha == "personagem-secreto-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xIMTPIUEUlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xIMTPIUEU"));
        } else if (perfilEscolha == "personagem-secreto-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/nQJAKQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ nQJAKQ"));
        } else if (perfilEscolha == "personagem-secreto-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uTZTqKJKINEQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uTZT qKJKINEQ"));
        } else if (perfilEscolha == "personagem-secreto-6-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHQKEFQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI qHQKEFQ"));
        } else if (perfilEscolha == "personagem-secreto-6-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/tZHECQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI tZHECQ"));
        } else if (perfilEscolha == "personagem-secreto-6-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xAGAKTQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xAGAKTQ"));
        } else if (perfilEscolha == "personagem-secreto-6-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/rAXQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI rAXQ"));
        } else if (perfilEscolha == "izumi") {
            perfilImagem.setAttribute("src","assets/IzumiPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Izumi");
        } else if (perfilEscolha == "victoria") {
            perfilImagem.setAttribute("src","assets/VictoriaPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone da Victoria");
        }  else if (perfilEscolha == "vladimir") {
            perfilImagem.setAttribute("src","assets/VladimirPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Vladimir");
        } else if (perfilEscolha == "rodrigo") {
            perfilImagem.setAttribute("src","assets/RodrigoPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Rodrigo");
        } else if (perfilEscolha == "planetafetal") {
            perfilImagem.setAttribute("src","assets/PlanetafetalPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Feto Cósmico");
        } else if (perfilEscolha == "personagem-secreto-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hTWJIKTQlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ hTWJIKTQ lQKQPTJQNQ"));
        }
    } else if (tema == "tormenta") {
        if (perfilEscolha == "zadiel") {
            perfilImagem.setAttribute("src","assets/ZadielPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Zadiel");
        } else if (perfilEscolha == "artrodea") {
            perfilImagem.setAttribute("src","assets/ArtrodeaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Artrodea");
        } else if (perfilEscolha == "shaka") {
            perfilImagem.setAttribute("src","assets/ShakaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Shaka");
        } else if (perfilEscolha == "kyomi") {
            perfilImagem.setAttribute("src","assets/KyomiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Kyomi");
        } else if (perfilEscolha == "lux") {
            perfilImagem.setAttribute("src","assets/LuxPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Lux");
        } else if (perfilEscolha == "mabel") {
            perfilImagem.setAttribute("src","assets/MabelPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Mabel");
        } else if (perfilEscolha == "yukkimi") {
            perfilImagem.setAttribute("src","assets/YukkimiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Yukkimi");
        } else if (perfilEscolha == "anagi") {
            perfilImagem.setAttribute("src","assets/AnagiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Anagi");
        } else if (perfilEscolha == "personagem-secreto-2-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHEPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP qHEP"));
        } else if (perfilEscolha == "personagem-secreto-2-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE"));
        } else if (perfilEscolha == "personagem-secreto-2-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE"));
        } else if (perfilEscolha == "personagem-secreto-2-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-6") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hEPLQPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP hEPLQP"));
        } else if (perfilEscolha == "personagem-secreto-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xIMTPIUEUlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xIMTPIUEU"));
        } else if (perfilEscolha == "personagem-secreto-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/nQJAKQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ nQJAKQ"));
        } else if (perfilEscolha == "personagem-secreto-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uTZTqKJKINEQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uTZT qKJKINEQ"));
        } else if (perfilEscolha == "personagem-secreto-6-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHQKEFQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI qHQKEFQ"));
        } else if (perfilEscolha == "personagem-secreto-6-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/tZHECQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI tZHECQ"));
        } else if (perfilEscolha == "personagem-secreto-6-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xAGAKTQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xAGAKTQ"));
        } else if (perfilEscolha == "personagem-secreto-6-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/rAXQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI rAXQ"));
        } else if (perfilEscolha == "izumi") {
            perfilImagem.setAttribute("src","assets/IzumiPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Izumi");
        } else if (perfilEscolha == "victoria") {
            perfilImagem.setAttribute("src","assets/VictoriaPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone da Victoria");
        }  else if (perfilEscolha == "vladimir") {
            perfilImagem.setAttribute("src","assets/VladimirPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Vladimir");
        } else if (perfilEscolha == "rodrigo") {
            perfilImagem.setAttribute("src","assets/RodrigoPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Rodrigo");
        } else if (perfilEscolha == "planetafetal") {
            perfilImagem.setAttribute("src","assets/PlanetafetalPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Feto Cósmico");
        } else if (perfilEscolha == "personagem-secreto-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hTWJIKTQlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ hTWJIKTQ lQKQPTJQNQ"));
        }
    } else if (tema == "apocalipse") {
               if (perfilEscolha == "zadiel") {
            perfilImagem.setAttribute("src","assets/ZadielPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Zadiel");
        } else if (perfilEscolha == "artrodea") {
            perfilImagem.setAttribute("src","assets/ArtrodeaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Artrodea");
        } else if (perfilEscolha == "shaka") {
            perfilImagem.setAttribute("src","assets/ShakaPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Shaka");
        } else if (perfilEscolha == "kyomi") {
            perfilImagem.setAttribute("src","assets/KyomiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Kyomi");
        } else if (perfilEscolha == "lux") {
            perfilImagem.setAttribute("src","assets/LuxPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Lux");
        } else if (perfilEscolha == "mabel") {
            perfilImagem.setAttribute("src","assets/MabelPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Mabel");
        } else if (perfilEscolha == "yukkimi") {
            perfilImagem.setAttribute("src","assets/YukkimiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone da Yukkimi");
        } else if (perfilEscolha == "anagi") {
            perfilImagem.setAttribute("src","assets/AnagiPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Anagi");
        } else if (perfilEscolha == "personagem-secreto-2-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHEPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP qHEP"));
        } else if (perfilEscolha == "personagem-secreto-2-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE"));
        } else if (perfilEscolha == "personagem-secreto-2-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE"));
        } else if (perfilEscolha == "personagem-secreto-2-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-6") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hEPLQPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP hEPLQP"));
        } else if (perfilEscolha == "personagem-secreto-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xIMTPIUEUlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xIMTPIUEU"));
        } else if (perfilEscolha == "personagem-secreto-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/nQJAKQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ nQJAKQ"));
        } else if (perfilEscolha == "personagem-secreto-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uTZTqKJKINEQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uTZT qKJKINEQ"));
        } else if (perfilEscolha == "personagem-secreto-6-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHQKEFQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI qHQKEFQ"));
        } else if (perfilEscolha == "personagem-secreto-6-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/tZHECQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI tZHECQ"));
        } else if (perfilEscolha == "personagem-secreto-6-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xAGAKTQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xAGAKTQ"));
        } else if (perfilEscolha == "personagem-secreto-6-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/rAXQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI rAXQ"));
        }
    }

    if (perfilEscolha == "zadiel") {
        ficha = cdg("☠☾∹η☾∹☠☾∹☠∞∹☠∞∹☹∞∹☾∞∹☭∞∹☾∞∹★∞∹∞∹☾∹★☾∹☾∞∹♫∞∹♫☾∹☭∞∹☠∞∹☠∞∹☠∞∹☠∞∹η☾∹∞∹∞∹∞∹η☠").split(",");
        vantagens = cdg("♫∹♫∹♫∹♫∹♫∹♫∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹♫∹∞∹♫∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "artrodea") {
        ficha = cdg("η☭∹η☭∹η∞∹η☭∹η☭∹☾☾∹☀∞∹☀♫∹★∞∹☭∞∹♫∞∹η☭∹☾∞∹☾∞∹η☭∹η∞∹✇☾∹✇☾∹★∞∹☹∞∹η☭∹☾∞∹η☭∹∞∹∞∹∞∹η☭").split(",");
        vantagens = cdg("✇∹∞∹∞∹♫∹☀∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹♫∹♫∹∞∹∞∹♫∹∞∹★∹∞∹✇∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "shaka") {
        ficha = cdg("☭∞∹☭∞∹☭∞∹☾∞∹♫∞∹★∞∹★∞∹★∞∹★∞∹♫∞∹♫∞∹♫∞∹☾∞∹♫∞∹♫∞∹♫∞∹♫∞∹♫∞∹☾∞∹☾∞∹☭∞∹☾∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "kyomi") {
        ficha = cdg("η∞∹☭☭∹☹☭∹☾☾∹☾♫∹☹☾∹☹☾∹☾∞∹☹∞∹☹∞∹♫∞∹☾∹✇∞∹☾∞∹☹☾∹η∞∹☀☾∹✇∞∹☹∞∹ηη∹η☾∹✇∞∹☹∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("♫∹✇∹✇∹♫∹♫∹✇∹∞∹∞∹∹☀∹☀∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹✇∹✇∹∞∹♫∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "lux") {
        ficha = cdg("☹♫∹☹★∹☹★∹☾∞∹☹★∹☹★∹∞∹∞∹☾∞∹★∞∹∞∹∞∹∞∹☭∞∹☹★∹∞∹☹★∹☹★∹☹★∹☹★∹☹♫∹☹★∹☹★∹∞∹∞∹∞∹☹★").split(",");
        vantagens = cdg("♫∹♫∹✇∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "mabel") {
        ficha = cdg("☭∞∹☾∞∹☾∞∹★∞∹✇∞∹✇∞∹☾☾∹☀∞∹☀∞∹☀∞∹✇☾∹✇∞∹☀∞∹♫☾∹☀∞∹☾∞∹★∞∹☾∞∹∞∹✇☾∹☭∞∹★∞∹☀∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "yukkimi") {
        ficha = cdg("☾∞∹☾∞∹☭∞∹☹∞∹☹∞∹☾∞∹☾∞∹☾∞∹★∞∹☾☾∹♫∹★∞∹✇∞∹♫∹☾∞∹★∞∹♫∹♫∹☹∞∹☹∞∹♫∞∹♫∹☾∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹✇∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "anagi") {
        ficha = cdg("☀☀∹☾☾∹☾★∹☾☾∹☀☀∹☾∞∹☀∞∹☀∞∹☭∞∹☾∞∹∞∹☀∞∹☭∞∹∞∹∞∹∞∹∞∹☀∞∹☾∞∹☭∞∹☀∞∹☀∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹✇∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-2-1") {
        ficha = cdg("☭∞∹☭∞∹☭∞∹☀∞∹☭∞∹★∞∹★∞∹☭∞∹☀∞∹✇∞∹∞∹∞∹∞∹☾∹∞∹♫∞∹♫∞∹♫∞∹∞∹★∞∹☭∞∹✇∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-2-2") {
        ficha = cdg("★∞∹★∞∹★∞∹♫∞∹★∞∹♫∞∹✇∞∹☀∞∹♫∞∹♫∞∹∞∹★∞∹☀∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∞∹☀∞∹☾∹★∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-2-3") {
        ficha = cdg("☭∞∹☭∞∹☭∞∹✇∞∹★∞∹★∞∹☀∞∹☾∞∹☀∞∹★∞∹∞∹★∞∹★∞∹∞∹∞∹✇∞∹♫∞∹♫∞∹∞∹★∞∹☭∞∹♫∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-2-4") {
        ficha = cdg("☭∞∹☀∞∹☭∞∹☀∞∹☭∞∹☀∞∹☀∞∹★∞∹☀∞∹★∞∹∞∹✇∞∹★∞∹∞∹∞∹★∞∹♫∞∹♫∞∹∞∹★∞∹☾∞∹♫∞∹☾∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-2-5") {
        ficha = cdg("☹✇∹☭∞∹☹✇∹☾∞∹☹✇∹☭∞∹☾∞∹☾∞∹☾∞∹☭∞∹∞∹✇∞∹☾∞∹∞∹∞∹☭∞∹★∞∹★∞∹∞∹☭∞∹☹✇∹☀∞∹☹✇∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-2-6") {
        ficha = cdg("∞∹☭∞∹∞∹∞∹∞∹∞∹∞∹∞∹☾∞∹✇∞∹∞∹☭∞∹∞∹∞∹∞∹☭∞∹∞∹∞∹∞∹∞∹∞∹∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-3") {
        ficha = cdg("η☾∹η☾∹η☾∹★∞∹✇∞∹✇∞∹☾☾∹☹∞∹η☾∹☭∞∹✇☾∹☾∹☹∞∹♫☾∹☀∞∹η☾∹★∞∹☾∞∹∞∹★☾∹η☾∹★∞∹☹∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-4") {
        ficha = cdg("η∞∹η∞∹η∞∹☾∞∹∞∹η∞∹∞∹∞∹✇∞∹♫∞∹∞∹∞∹∞∹∞∹∞∹★∞∹☭∞∹☀∞∹η∞∹η∞∹η∞∹∞∹☹∞∹∞∹∞∹∞∹☭∞").split(",");
        vantagens = cdg("♫∹✇∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-5") {
        ficha = cdg("♫∞∹η☭∹♫∞∹η☭∹η☭∹☾☾∹☀∞∹☀♫∹★∞∹☭∞∹♫∞∹η☭∹η☭∹✇∞∹η☭∹♫∹✇☾∹✇☾∹★∞∹☹∞∹η☭∹☾∞∹η☭∹∞∹∞∹∞∹η☭").split(",");
        vantagens = cdg("∞∹✇∹∞∹♫∹☀∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹✇∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-6-1") {
        ficha = cdg("☹☾∹η☀∹☠☀∹☭∞∹☀☾∹ηη∹☹∞∹☹∞∹☭∞∹☀★∹☀∞∹✇∞∹☀☾∹♫☾∹☾∞∹☀∞∹✇☾∹♫☾∹ηη∹ηη∹ηη∹☭∞∹η☀∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹✇∹✇∹♫∹∞∹✇∹♫∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹✇∹✇∹♫∹✇∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-6-2") {
        ficha = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-6-3") {
        ficha = cdg("♫∞∹ηη∹ηη∹ηη∹✇☀∹☾∹☹∞∹ηη∹☭☾∹☭☭∹∞∹ηη∹☭☀∹∞∹ηη∹ηη∹♫☾∹♫☭∹☭☠∹☹∞∹☭☾∹☭☠∹ηη∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹✇∹☀∹✇∹∞∹☾∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹☀∹☀∹∞∹∞∹∞∹∞∹☀∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-6-4") {
        ficha = cdg("η∞∹☾∹η∞∹✇☾∹☾∞∹☭∹☹∞∹☹∞∹☀∞∹★∞∹☭∞∹-♫∞∹-♫∞∹☀∞∹✇∞∹☀✇∹✇☀∹✇✇∹☹∞∹☹∞∹☹∞∹☹∞∹-♫∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "izumi") {
        ficha = cdg("☭η∹☾∞∹☭∞∹☭∞∹★☾∹☾∞∹★☾∹☭∞∹★☾∹☾∞∹☾∞∹★∞∹★☠∹☭∞∹☾∞∹☭η∹☾∞∹☀∞∹☾☾∹☾☭∹☾∞∹☾∞∹★η∹∞∹∞∹∞∹☾☾").split(",");
        vantagens = cdg("∞∹♫∹✇∹✇∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫").split(",");
    } else if (perfilEscolha == "victoria") {
        ficha = cdg("★∞∹☾∞∹☭∞∹☾☾∹∞∹★☾∹☾∞∹☾∞∹☾∞∹☀☾∹☾☾∹∞∹☭∞∹∞∹∞∹∞∹☾∞∹★∞∹∞∹∞∹☾∞∹☾∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "vladimir") {
        ficha = cdg("☭∞∹☭η∹☭η∹☭∞∹☭∞∹☭η∹☾☾∹☭∞∹∞∹∞∹☭∞∹★∞∹∞∹∞∹∞∹∞∹☭∞∹☀∞∹☭η∹☭η∹☾∞∹☭η∹☭∞∹∞∹∞∹∞∹☾★").split(",");
        vantagens = cdg("∞∹✇∹✇∹♫∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹♫∹∞∹∞∹∞∹♫").split(",");
    } else if (perfilEscolha == "rodrigo") {
        ficha = cdg("♫☹∞∹-♫∞∞∹♫☹∞∹☭∞∹∞∹∞∹∞∹∞∹☾∞∹☭∞∹☹∞∹-♫∞∞∹-♫∞∞∹∞∹♫∞∹♫☾∞∹★∞∹★∞∹☀∞∹✇∞∹☹∞∹☾∞∹-♫∞∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("♫∹∞∹♫∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "planetafetal") {
        ficha = cdg("☹∞∹☾∹☹∞∹☹∞∹☹∞∹☹∞∹☾∞∹∞∹✇∞∹☾∹☾∞∹-♫∞∹♫☾∹☾∹☾∞∹♫☾∹☀∞∹☀∞∹☹∞∹☹∞∹☹∞∹∞∹♫☾∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹∞∹∞∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-1") {
        ficha = cdg("η∞∹η∞∹η∞∹☾☾∹☾∞∹☾∞∹☾∞∹☹∞∹☾☾∹☀☾∹☾☾∹∞∹☹∞∹∞∹∞∹∞∹☭☾∹☭☾∹∞∹☭☾∹η∞∹☾∞∹η∞∹∞∹∞∹∞∹η∞").split(",");
        vantagens = cdg("✇∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹♫∹∞∹∞∹∞∹∞").split(",");
    }
    
    verificarVantagens();
}

function trocarTema() {
    let estilo = document.getElementById("estilo");
    tema = temaSelector.value;
    estilo.setAttribute("href",`style-${temaSelector.value}.css`);

    if (noturno == "true") {
        noturno = "false";
    } else {
        noturno = "true";
    }
    trocarModo();
    atualizarPerfil();
}

function trocarModo() {
    let modo = document.getElementById("modos");
    let background = document.getElementById("fundo");
    let personagensSelector = document.getElementById("personagens-escolha");
    let codigoSelector = document.getElementById("codigo");
    let titulo = document.getElementById("titulo");
    let titulo2 = document.getElementById("titulo2");
    let atributoSelector = document.getElementById("testeroll__atributo");
    let botao = document.getElementById("botao-rolar");
    let ataqueVantagem = document.getElementById("ataque-vantagem");
    let reflexosVantagem = document.getElementById("esquiva-vantagem");
    let danoAdicional = document.getElementById("dano-adicional");
    let euAlturaMetragem = document.getElementById("eu-altura");
    let euAlturaNomenclatura = document.getElementById("eu-altura2");
    let euAlturaPersonagem = document.getElementById("eu-altura3");
    let eleAlturaMetragem = document.getElementById("ele-altura");
    let eleAlturaNomenclatura = document.getElementById("ele-altura2");
    let eleAlturaPersonagem = document.getElementById("ele-altura3");
    let botaoSize = document.getElementById("botao-compararsize");
    let iconRoll = document.getElementById("funcao-rolar");
    let iconAtributo = document.getElementById("funcao-atributo");
    let iconSize = document.getElementById("funcao-size");
    let iconMapa = document.getElementById("funcao-mapa");
    if (noturno == "true") {
        if (atributoAtivo == 1) {
            atributoSoloVtgSelector.setAttribute("class","prc_atr_c");
        } if (atributoAtivo == 0) {
            periciaVtgSelector.setAttribute("class","prc_atr_c");
            atributoVtgSelector.setAttribute("class","prc_atr_c");
            periciaSelector.setAttribute("class","prc_atr_c");
        }
            noturno = "false";
            modo.setAttribute("alt","Ícone do Modo Noturno");
            background.setAttribute("class","claro");
            personagensSelector.setAttribute("class","cabecalhos-c");
            codigoSelector.setAttribute("class","prc_atr_c");
            temaSelector.setAttribute("class","cabecalhos-c");
            titulo.setAttribute("class","roleclaro");
            titulo2.setAttribute("class","roleclaro");
            boxRoll.setAttribute("class","testeroll_c");
            atributoSelector.setAttribute("class","prc_atr_c");
            botao.setAttribute("class","botao-c");
            valoresIniciais1Logica.setAttribute("class","valoresiniciais-c");
            barrinhaLogica.setAttribute("class","valoresiniciais-c");
            valoresIniciais2Logica.setAttribute("class","valoresiniciais-c");
            resultadoInicialLogica.setAttribute("class","resultadoinicial-c");
            ataqueVantagem.setAttribute("class","ataquevantagem-c");
            reflexosVantagem.setAttribute("class","esquivavantagem-c");
            danoAdicional.setAttribute("class","danoadicional-c");
            boxSize.setAttribute("class","testeroll_c");
            sizeType.setAttribute("class","prc_atr_c");
            euAlturaMetragem.setAttribute("class","prc_atr_c");
            euAlturaNomenclatura.setAttribute("class","prc_atr_c");
            euAlturaPersonagem.setAttribute("class","prc_atr_c");
            eleAlturaMetragem.setAttribute("class","prc_atr_c");
            eleAlturaNomenclatura.setAttribute("class","prc_atr_c");
            eleAlturaPersonagem.setAttribute("class","prc_atr_c");
            botaoSize.setAttribute("class","botao-c");
            if (tema == "apocalipse") {
                iconRoll.setAttribute("src","assets/rollicon.png");
                iconAtributo.setAttribute("src","assets/atributoicon.png");
                iconSize.setAttribute("src","assets/sizeicon.png");
                iconMapa.setAttribute("src","assets/mapaicon.png");
                modo.setAttribute("class","invisivel");
                botao.setAttribute("src","assets/apocalipsedice.png");
                botaoSize.setAttribute("src","assets/comparadorapocalipse.png");
            } else if (tema == "cosmo") {
                iconRoll.setAttribute("src","assets/rolliconclaro.png");
                iconAtributo.setAttribute("src","assets/atributoiconclaro.png");
                iconSize.setAttribute("src","assets/sizeiconclaro.png");
                iconMapa.setAttribute("src","assets/mapaiconclaro.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/lua.png");
                botao.setAttribute("src","assets/dicediurno.png");
                botaoSize.setAttribute("src","assets/comparadorclaro.png");
            } else if (tema == "cataclismo") {
                iconRoll.setAttribute("src","assets/rolliconclarocataclismo.png");
                iconAtributo.setAttribute("src","assets/atributoiconclarocataclismo.png");
                iconSize.setAttribute("src","assets/sizeiconclarocataclismo.png");
                iconMapa.setAttribute("src","assets/mapaiconclarocataclismo.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/luacataclismo.png");
                botao.setAttribute("src","assets/cataclismodiceclaro.png");
                botaoSize.setAttribute("src","assets/comparadorclarocataclismo.png");
            } else if (tema == "aquarela") {
                iconRoll.setAttribute("src","assets/rolliconclaroaquarela.png");
                iconAtributo.setAttribute("src","assets/atributoiconclaroaquarela.png");
                iconSize.setAttribute("src","assets/sizeiconclaroaquarela.png");
                iconMapa.setAttribute("src","assets/mapaiconclaroaquarela.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/luaaquarela.png");
                botao.setAttribute("src","assets/aquareladiceclaro.png");
                botaoSize.setAttribute("src","assets/comparadorclaroaquarela.png");
            } else if (tema == "tormenta") {
                iconRoll.setAttribute("src","assets/rolliconclarotormenta.png");
                iconAtributo.setAttribute("src","assets/atributoiconclarotormenta.png");
                iconSize.setAttribute("src","assets/sizeiconclarotormenta.png");
                iconMapa.setAttribute("src","assets/mapaiconclarotormenta.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/luatormenta.png");
                botao.setAttribute("src","assets/tormentadiceclaro.png");
                botaoSize.setAttribute("src","assets/comparadorclarotormenta.png");
            } else if (tema == "secreto-1") {
                modo.setAttribute("class","invisivel");
                iconRoll.setAttribute("src","assets/rollicon.png");
                iconAtributo.setAttribute("src","assets/atributoicon.png");
                iconSize.setAttribute("src","assets/sizeicon.png");
                iconMapa.setAttribute("src","assets/mapaicon.png");
                botao.setAttribute("src","assets/dice.png");
                botaoSize.setAttribute("src","assets/comparador.png");
            }
        alterarCorResultado();
        } else {
            if (atributoAtivo == 1) {
                atributoSoloVtgSelector.setAttribute("class","prc_atr_n");
            } if (atributoAtivo == 0) {
                periciaVtgSelector.setAttribute("class","prc_atr_n");
                atributoVtgSelector.setAttribute("class","prc_atr_n");
                periciaSelector.setAttribute("class","prc_atr_n");
            }
            noturno = "true";
            modo.setAttribute("alt","Ícone do Modo Claro");
            background.setAttribute("class","noturno");
            personagensSelector.setAttribute("class","cabecalhos-n");
            codigoSelector.setAttribute("class","prc_atr_n");
            temaSelector.setAttribute("class","cabecalhos-n");
            titulo.setAttribute("class","rolenoturno");
            titulo2.setAttribute("class","rolenoturno");
            boxRoll.setAttribute("class","testeroll_n");
            atributoSelector.setAttribute("class","prc_atr_n");
            botao.setAttribute("class","botao-n");
            valoresIniciais1Logica.setAttribute("class","valoresiniciais-n");
            barrinhaLogica.setAttribute("class","valoresiniciais-n");
            valoresIniciais2Logica.setAttribute("class","valoresiniciais-n");
            resultadoInicialLogica.setAttribute("class","resultadoinicial-n");
            ataqueVantagem.setAttribute("class","ataquevantagem-n");
            reflexosVantagem.setAttribute("class","esquivavantagem-n");
            danoAdicional.setAttribute("class","danoadicional-n");
            boxSize.setAttribute("class","testeroll_n");
            sizeType.setAttribute("class","prc_atr_n");
            euAlturaMetragem.setAttribute("class","prc_atr_n");
            euAlturaNomenclatura.setAttribute("class","prc_atr_n");
            euAlturaPersonagem.setAttribute("class","prc_atr_n");
            eleAlturaMetragem.setAttribute("class","prc_atr_n");
            eleAlturaNomenclatura.setAttribute("class","prc_atr_n");
            eleAlturaPersonagem.setAttribute("class","prc_atr_n");
            botaoSize.setAttribute("class","botao-n");
            if (tema == "apocalipse") {
                iconRoll.setAttribute("src","assets/rollicon.png");
                iconAtributo.setAttribute("src","assets/atributoicon.png");
                iconSize.setAttribute("src","assets/sizeicon.png");
                iconMapa.setAttribute("src","assets/mapaicon.png");
                modo.setAttribute("class","invisivel");
                botao.setAttribute("src","assets/apocalipsedice.png");
                botaoSize.setAttribute("src","assets/comparadorapocalipse.png");
            } else if (tema == "cosmo") {
                iconRoll.setAttribute("src","assets/rollicon.png");
                iconAtributo.setAttribute("src","assets/atributoicon.png");
                iconSize.setAttribute("src","assets/sizeicon.png");
                iconMapa.setAttribute("src","assets/mapaicon.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/sol.png");
                botao.setAttribute("src","assets/dice.png");
                botaoSize.setAttribute("src","assets/comparador.png");
            } else if (tema == "cataclismo") {
                iconRoll.setAttribute("src","assets/rolliconcataclismo.png");
                iconAtributo.setAttribute("src","assets/atributoiconcataclismo.png");
                iconSize.setAttribute("src","assets/sizeiconcataclismo.png");
                iconMapa.setAttribute("src","assets/mapaiconcataclismo.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/solcataclismo.png");
                botao.setAttribute("src","assets/cataclismodicenoturno.png");
                botaoSize.setAttribute("src","assets/comparadorcataclismo.png");
            } else if (tema == "aquarela") {
                iconRoll.setAttribute("src","assets/rolliconaquarela.png");
                iconAtributo.setAttribute("src","assets/atributoiconaquarela.png");
                iconSize.setAttribute("src","assets/sizeiconaquarela.png");
                iconMapa.setAttribute("src","assets/mapaiconaquarela.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/solaquarela.png");
                botao.setAttribute("src","assets/aquareladice.png");
                botaoSize.setAttribute("src","assets/comparadoraquarela.png");
            } else if (tema == "tormenta") {
                iconRoll.setAttribute("src","assets/rollicontormenta.png");
                iconAtributo.setAttribute("src","assets/atributoicontormenta.png");
                iconSize.setAttribute("src","assets/sizeicontormenta.png");
                iconMapa.setAttribute("src","assets/mapaicontormenta.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/soltormenta.png");
                botao.setAttribute("src","assets/tormentadice.png");
                botaoSize.setAttribute("src","assets/comparadortormenta.png");
            } else if (tema == "secreto-1") {
                modo.setAttribute("class","invisivel");
                iconRoll.setAttribute("src","assets/rollicon.png");
                iconAtributo.setAttribute("src","assets/atributoicon.png");
                iconSize.setAttribute("src","assets/sizeicon.png");
                iconMapa.setAttribute("src","assets/mapaicon.png");
                botao.setAttribute("src","assets/dice.png");
                botaoSize.setAttribute("src","assets/comparador.png");
            }
        alterarCorResultado();
        }
    }

function funcaoRolar() {
    valoresIniciais1Logica.innerHTML = "";
    barrinhaLogica.innerHTML = "";
    valoresIniciais2Logica.innerHTML = "";
    resultadoInicialLogica.innerHTML = "";
    resultadoFinalLogica.innerHTML = "";
    atributoAtivo = 0;
    definirAtributoVtg.value = atributoSoloVtgSelector.value;
    trocarTema();
    atributoSoloVtgSelector.setAttribute("class","invisivel");
    rolador.setAttribute("class","");
    comparadorSize.setAttribute("class","invisivel");
    definidorImpacto.setAttribute("class","invisivel");
}

function funcaoAtributo() {
    valoresIniciais1Logica.innerHTML = "";
    barrinhaLogica.innerHTML = "";
    valoresIniciais2Logica.innerHTML = "";
    resultadoInicialLogica.innerHTML = "";
    resultadoFinalLogica.innerHTML = "";
    atributoAtivo = 1;
    atributoSoloVtgSelector.value = definirAtributoVtg.value;
    trocarTema();
    periciaSelector.setAttribute("class","invisivel");
    periciaVtgSelector.setAttribute("class","invisivel");
    atributoVtgSelector.setAttribute("class","invisivel");
    rolador.setAttribute("class","");
    comparadorSize.setAttribute("class","invisivel");
    definidorImpacto.setAttribute("class","invisivel");
}

function funcaoSize() {
    ataqueResultado.innerHTML = "";
    esquivaResultado.innerHTML = "";
    danoResultado.innerHTML = "";
    atributoAtivo = 0;
    definirAtributoVtg.value = atributoSoloVtgSelector.value;
    trocarTema();
    atributoSoloVtgSelector.setAttribute("class","invisivel");
    rolador.setAttribute("class","invisivel");
    comparadorSize.setAttribute("class","");
    definidorImpacto.setAttribute("class","invisivel");
}

function funcaoImpacto () {
    valoresIniciais1Logica.innerHTML = "";
    barrinhaLogica.innerHTML = "";
    valoresIniciais2Logica.innerHTML = "";
    resultadoInicialLogica.innerHTML = "";
    resultadoFinalLogica.innerHTML = "";
    atributoAtivo = 0;
    definirAtributoVtg.value = atributoSoloVtgSelector.value;
    trocarTema();
    atributoSoloVtgSelector.setAttribute("class","invisivel");
    rolador.setAttribute("class","invisivel");
    comparadorSize.setAttribute("class","invisivel");
    definidorImpacto.setAttribute("class","");
}

function verificarVantagens() {
    verificarVantagensPericia();
    verificarVantagensAtributo();
}

function verificarVantagensPericia() {
    periciaVtgSelector.value = vantagens[periciaEscolhida.value];
}

function verificarVantagensAtributo() {
    atributoVtgSelector.value = vantagens[atributoEscolhido.value];
    atributoSoloVtgSelector.value = vantagens[atributoEscolhido.value];
}

function iniciarTeste() {
    let periciaVantagens = document.getElementById("vantagens__pericia").value;
    let atributoVantagens = document.getElementById("vantagens__atributo").value;
    if (atributoAtivo == 1) {
        atributoVantagens = atributoSoloVtgSelector.value; 
        }
    let periciaDado;
    let atributoDado;
    let pericia = ficha[periciaEscolhida.value];
    let atributo = ficha[atributoEscolhido.value];
    let periciaDados = [rolarDado()];
    let atributoDados = [rolarDado()];

    if (periciaVantagens > 0) {
        //console.log(periciaVantagens + " Vantagens");
        while (periciaVantagens > 0) {
            periciaDados.push(rolarDado());
            periciaVantagens--;
        }
        periciaDado = Math.min(...periciaDados);
        periciaDados.sort(function(a, b) {
            return a - b;
          });
        valoresIniciais1Logica.setAttribute("title",periciaDados);
        //console.log("Dados Coletados: " + periciaDados);
        //console.log("Dado Escolhido: " + periciaDado);
    } else if (periciaVantagens < 0) {
        //console.log(periciaVantagens + " Vantagens");
        while (periciaVantagens < 0) {
            periciaDados.push(rolarDado());
            periciaVantagens++;
        }
        periciaDado = Math.max(...periciaDados);
        periciaDados.sort(function(a, b) {
            return a - b;
          });
        periciaDados.reverse();
        valoresIniciais1Logica.setAttribute("title",periciaDados);
        //console.log("Dados Coletados: " + periciaDados);
        //console.log("Dado Escolhido: " + periciaDado);
    } else {
        periciaDado = periciaDados;
        //console.log(periciaVantagens + " Vantagens");
        //console.log("Dados Coletados: " + periciaDados);
        //console.log("Dado Escolhido: " + periciaDado);
    }

    if (atributoVantagens > 0) {
        //console.log(atributoVantagens + " Vantagens");
        while (atributoVantagens > 0) {
            atributoDados.push(rolarDado());
            atributoVantagens--;
        }
        atributoDado = Math.min(...atributoDados);
        atributoDados.sort(function(a, b) {
            return a - b;
          });
        valoresIniciais2Logica.setAttribute("title",atributoDados);
        //console.log("Dados Coletados: " + atributoDados);
        //console.log("Dado Escolhido: " + atributoDado);
    } else if (atributoVantagens < 0) {
        //console.log(atributoVantagens + " Vantagens");
        while (atributoVantagens < 0) {
            atributoDados.push(rolarDado());
            atributoVantagens++;
        }
        atributoDado = Math.max(...atributoDados);
        atributoDados.sort(function(a, b) {
            return a - b;
          });
        atributoDados.reverse();
        valoresIniciais2Logica.setAttribute("title",atributoDados);
        //console.log("Dados Coletados: " + atributoDados);
        //console.log("Dado Escolhido: " + atributoDado);
    } else {
        atributoDado = atributoDados;
        //console.log(atributoVantagens + " Vantagens");
        //console.log("Dados Coletados: " + atributoDados);
        //console.log("Dado Escolhido: " + atributoDado);
    }
    
    let periciaResultado = analisarResultadoInicial(pericia,periciaDado);
    let atributoResultado = analisarResultadoInicial(atributo,atributoDado);
    resultadoFinal = analisarResultadoFinal(periciaResultado,atributoResultado);
    alterarCorResultado();
    
    if (atributoAtivo == 1) {
        valoresIniciais2Logica.innerHTML = atributoDado + " (" + atributo + ")";
        resultadoFinalLogica.innerHTML = atributoResultado;
    } else {
    valoresIniciais1Logica.innerHTML = periciaDado + " (" + pericia + ")";
    barrinhaLogica.innerHTML = "  ---  ";
    valoresIniciais2Logica.innerHTML = atributoDado + " (" + atributo + ")";
    resultadoInicialLogica.innerHTML = periciaResultado + " + " + atributoResultado;
    resultadoFinalLogica.innerHTML = resultadoFinal;
}
}

// let objetoImpacto = 0.1;
// let alturaImpacto = 3;
// let multiplicador = 1;
// let palavraDesvantagemImpacto;
// let resultadoImpacto = calcularImpacto();

function rolarDado() {
    return parseInt(Math.random() * 100 + 1);
}

function analisarResultadoInicial(pontos,resultado) {
    if (pontos <= -100 + parseInt(resultado)) {
        //console.log("eu sou o problema! :D");
        return "Desastre";
    } else if (pontos < parseInt(resultado)) {
        if (resultado == 100) {
            if (pontos < 100) {
                //console.log("eu sou o problema! :O");
                return "Desastre";
        }
    } else {
        //console.log("eu sou o problema! :(");
        return "Falha";
    } 
    } else if (pontos >= 99 + parseInt(resultado)) {
        //console.log("eu sou o problema! >:D");
        return "Crítico";
    } else if (parseInt(resultado) == 1) {
        if (pontos < 1) {
            //console.log("eu sou o problema! D:");
            return "Falha";
        } else {
           //console.log("eu sou o problema! :/");
            return "Crítico";
        }
    } else if (pontos > 100) {
        if (parseInt(resultado) <= pontos - 80) {
            //console.log("eu sou o problema! :0");
            return "Extremo";
        } else if (parseInt(resultado) <= pontos - 50) {
            //console.log("eu sou o problema! :S");
            return "Bom";
        } else {
            return "Normal";
        }
        } else if (parseInt(resultado) <= pontos / 5) {
            //console.log("eu sou o problema! :0");
            return "Extremo";
        } else if (parseInt(resultado) <= pontos / 2) {
            //console.log("eu sou o problema! :S");
            return "Bom";
        } else if (parseInt(resultado) <= pontos) {
            //console.log("eu sou o problema! :P");
            return "Normal";
        }
    }
    

function analisarResultadoFinal(periciaResultado,atributoResultado) {
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

function alterarCorResultado() {
    if (resultadoFinal == "Super Crítico") {
        if (noturno == "true") {
        resultadoFinalLogica.setAttribute("class","super-critico-n resultadofinal-n");
        } else {
        resultadoFinalLogica.setAttribute("class","super-critico-c resultadofinal-c");
        }
    } else if (resultadoFinal == "Crítico") {
        if (noturno == "true") {
        resultadoFinalLogica.setAttribute("class","critico-n resultadofinal-n");
        } else {
        resultadoFinalLogica.setAttribute("class","critico-c resultadofinal-c");
        }
    } else if (resultadoFinal == "Desastre") {
        if (noturno == "true") {
        resultadoFinalLogica.setAttribute("class","desastre-n resultadofinal-n");
        } else {
        resultadoFinalLogica.setAttribute("class","desastre-c resultadofinal-c");
        }
    } else if (resultadoFinal == "Super Desastre") {
        if (noturno == "true") {
        resultadoFinalLogica.setAttribute("class","super-desastre-n resultadofinal-n");
        } else {
        resultadoFinalLogica.setAttribute("class","super-desastre-c resultadofinal-c");
        }
    } else {
        if (noturno == "true") {
        resultadoFinalLogica.setAttribute("class","resultadofinal-n");
        } else {
        resultadoFinalLogica.setAttribute("class","resultadofinal-c");
        }
    }
}

function sizeTipo() {
    if (sizeType.value == "metragem") {
        metragem.setAttribute("class","");
        nomenclatura.setAttribute("class","invisivel");
        personagemsize.setAttribute("class","invisivel");
    } else if (sizeType.value == "nomenclatura") {
        nomenclatura.setAttribute("class","");
        metragem.setAttribute("class","invisivel");
        personagemsize.setAttribute("class","invisivel");
    } else if (sizeType.value == "personagemsize") {
        personagemsize.setAttribute("class","");
        metragem.setAttribute("class","invisivel");
        nomenclatura.setAttribute("class","invisivel");
    }
}

function iniciarSize() {
    let euMetragem = document.getElementById("eu-altura");
    let eleMetragem = document.getElementById("ele-altura");
    let euNomenclatura = document.getElementById("eu-altura2");
    let eleNomenclatura = document.getElementById("ele-altura2");
    let euPersonagem = document.getElementById("eu-altura3");
    let elePersonagem = document.getElementById("ele-altura3");
    let alturaEu;
    let alturaEle;
    ataqueResultado.innerHTML = "";
    esquivaResultado.innerHTML = "";
    danoResultado.innerHTML = "";

    if (sizeType.value == "metragem") {
        alturaEu = euMetragem.value;
        alturaEle = eleMetragem.value;
        if (alturaEu == "" && alturaEle == "") {
            esquivaResultado.innerHTML = "Insira uma Altura Válida!";
            danoResultado.innerHTML = "Insira uma Altura Válida!"
        } else if (alturaEle == "") {
            danoResultado.innerHTML = "Insira uma Altura Válida!"
        } else if (alturaEu == "") {
            esquivaResultado.innerHTML = "Insira uma Altura Válida!";
        } else {
            alturaEu = parseFloat(euMetragem.value);
            alturaEle = parseFloat(eleMetragem.value);
            tamanhoEu = definirAltura(alturaEu);
            tamanhoEle = definirAltura(alturaEle);
            compararAlturas();
            console.log(atacar);
            ataqueResultado.innerHTML = "Ataque: " + atacar;
            esquivaResultado.innerHTML = "Esquiva: " + esquivar;
            danoResultado.innerHTML = dano;
        }
    } else if (sizeType.value == "nomenclatura") {
        tamanhoEu = euNomenclatura.value;
        tamanhoEle = eleNomenclatura.value;
        compararAlturas();
        ataqueResultado.innerHTML = "Ataque: " + atacar;
        esquivaResultado.innerHTML = "Esquiva: " + esquivar;
        danoResultado.innerHTML = dano;
    } else if (sizeType.value == "personagemsize") {
        alturaEu = euPersonagem.value;
        alturaEle = elePersonagem.value;
        tamanhoEu = definirAltura(alturaEu);
        tamanhoEle = definirAltura(alturaEle);
        compararAlturas();
        ataqueResultado.innerHTML = "Ataque: " + atacar;
        esquivaResultado.innerHTML = "Esquiva: " + esquivar;
        danoResultado.innerHTML = dano;
    }
}

function definirAltura(altura) {
    if (altura < 1 / 1000) {
        return "Microscópico";
    } else if (1 / 1000 <= altura && altura < 1 / 10) {
        return "Ínfimo";
    } else if (1 / 10 <= altura && altura < 3 / 10) {
        return "Minúsculo";
    } else if (3 / 10 <= altura && altura < 9 / 10) {
        return "Pequeno";
    } else if (9 / 10 <= altura && altura < 14 / 10) {
        return "Anão";
    } else if (14 / 10 <= altura && altura < 19 / 10) {
        return "Comum";
    } else if (19 / 10 <= altura && altura < 3) {
        return "Grande";
    } else if (3 <= altura && altura < 5) {
        return "Enorme";
    } else if (5 <= altura && altura < 10) {
        return "Gigante";
    } else if (10 <= altura && altura < 20) {
        return "Colossal";
    } else if (20 <= altura && altura < 40) {
        return "Super Colossal";
    } else if (40 <= altura && altura < 100) {
        return "Ultra Colossal";
    } else if (100 <= altura && altura < 200) {
        return "Hiper Colossal";
    } else if (200 <= altura && altura < 300) {
        return "Titã Menor";
    } else if (300 <= altura && altura < 500) {
        return "Titã Médio";
    } else if (500 <= altura && altura < 600) {
        return "Titã Maior";
    } else if (600 <= altura && altura < 1000) {
        return "Titã Máximo";
    } else if (1000 <= altura && altura< 12000) {
        return "Troposférico";
    } else if (12000 <= altura && altura < 50000) {
        return "Estratosférico";
    } else if (50000 <= altura && altura < 80000) {
        return "Mesosférico";
    } else if (80000 <= altura && altura < 700000) {
        return "Termosférico";
    } else if (700000 <= altura && altura < 190000000) {
        return "Exosférico";
    } else if (190000000 <= altura && altura < 9460536207068016) {
        return "Sobrenatural";
    } else if (9460536207068016 <= altura) {
        return "Limite";
    }
}

function compararAlturas() {
    if (tamanhoEu == "Microscópico") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else {
            atacar = "Ataque Garantido";
            esquivar = "Esquiva Impossível";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Ínfimo") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "35 de Dano Reduzido";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "40 de Dano Reduzido";
        } else if (tamanhoEle == "Anão") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "41 de Dano Reduzido";
        } else if (tamanhoEle == "Comum") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "42 de Dano Reduzido";
        } else if (tamanhoEle == "Grande") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "43 de Dano Reduzido";
        } else if (tamanhoEle == "Enorme") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "45 de Dano Reduzido";
        } else if (tamanhoEle == "Gigante") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "48 de Dano Reduzido";
        } else if (tamanhoEle == "Colossal") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "51 de Dano Reduzido";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "10 Vantagens";
            esquivar = "10 Vantagens";
            dano = "54 de Dano Reduzido";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "11 Vantagens";
            esquivar = "11 Vantagens";
            dano = "58 de Dano Reduzido";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "12 Vantagens";
            esquivar = "12 Vantagens";
            dano = "61 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "13 Vantagens";
            esquivar = "13 Vantagens";
            dano = "62 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "14 Vantagens";
            esquivar = "14 Vantagens";
            dano = "64 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "15 Vantagens";
            esquivar = "15 Vantagens";
            dano = "65 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "16 Vantagens";
            esquivar = "16 Vantagens";
            dano = "68 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "18 Vantagens";
            esquivar = "18 Vantagens";
            dano = "86 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "19 Vantagens";
            esquivar = "19 Vantagens";
            dano = "94 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "20 Vantagens";
            esquivar = "20 Vantagens";
            dano = "96 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "22 Vantagens";
            esquivar = "22 Vantagens";
            dano = "108 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "42 Vantagens";
            esquivar = "42 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "142 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "143 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Minúsculo") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "35 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "5 de Dano Reduzido";
        } else if (tamanhoEle == "Anão") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "6 de Dano Reduzido";
        } else if (tamanhoEle == "Comum") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "7 de Dano Reduzido";
        } else if (tamanhoEle == "Grande") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "8 de Dano Reduzido";
        } else if (tamanhoEle == "Enorme") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "10 de Dano Reduzido";
        } else if (tamanhoEle == "Gigante") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "13 de Dano Reduzido";
        } else if (tamanhoEle == "Colossal") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "16 de Dano Reduzido";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "19 de Dano Reduzido";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "23 de Dano Reduzido";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "10 Vantagens";
            esquivar = "10 Vantagens";
            dano = "26 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "11 Vantagens";
            esquivar = "11 Vantagens";
            dano = "27 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "12 Vantagens";
            esquivar = "12 Vantagens";
            dano = "29 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "13 Vantagens";
            esquivar = "13 Vantagens";
            dano = "30 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "14 Vantagens";
            esquivar = "14 Vantagens";
            dano = "33 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "16 Vantagens";
            esquivar = "16 Vantagens";
            dano = "51 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "17 Vantagens";
            esquivar = "17 Vantagens";
            dano = "59 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "18 Vantagens";
            esquivar = "18 Vantagens";
            dano = "61 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "20 Vantagens";
            esquivar = "20 Vantagens";
            dano = "73 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "40 Vantagens";
            esquivar = "40 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "140 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "141 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Pequeno") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "40 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "5 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "1 de Dano Reduzido";
        } else if (tamanhoEle == "Comum") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "2 de Dano Reduzido";
        } else if (tamanhoEle == "Grande") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "3 de Dano Reduzido";
        } else if (tamanhoEle == "Enorme") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "5 de Dano Reduzido";
        } else if (tamanhoEle == "Gigante") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "8 de Dano Reduzido";
        } else if (tamanhoEle == "Colossal") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "11 de Dano Reduzido";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "14 de Dano Reduzido";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "18 de Dano Reduzido";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "21 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "10 Vantagens";
            esquivar = "10 Vantagens";
            dano = "22 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "11 Vantagens";
            esquivar = "11 Vantagens";
            dano = "24 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "12 Vantagens";
            esquivar = "12 Vantagens";
            dano = "25 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "13 Vantagens";
            esquivar = "13 Vantagens";
            dano = "28 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "15 Vantagens";
            esquivar = "15 Vantagens";
            dano = "46 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "16 Vantagens";
            esquivar = "16 Vantagens";
            dano = "54 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "17 Vantagens";
            esquivar = "17 Vantagens";
            dano = "56 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "19 Vantagens";
            esquivar = "19 Vantagens";
            dano = "68 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "39 Vantagens";
            esquivar = "39 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "139 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "140 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Anão") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "41 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagns";
            dano = "6 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "1 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "1 de Dano Reduzido";
        } else if (tamanhoEle == "Grande") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "2 de Dano Reduzido";
        } else if (tamanhoEle == "Enorme") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "4 de Dano Reduzido";
        } else if (tamanhoEle == "Gigante") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "7 de Dano Reduzido";
        } else if (tamanhoEle == "Colossal") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "10 de Dano Reduzido";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "13 de Dano Reduzido";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "17 de Dano Reduzido";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "20 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "21 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "10 Vantagens";
            esquivar = "10 Vantagens";
            dano = "23 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "11 Vantagens";
            esquivar = "11 Vantagens";
            dano = "24 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "12 Vantagens";
            esquivar = "12 Vantagens";
            dano = "27 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "14 Vantagens";
            esquivar = "14 Vantagens";
            dano = "45 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "15 Vantagens";
            esquivar = "15 Vantagens";
            dano = "53 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "16 Vantagens";
            esquivar = "16 Vantagens";
            dano = "55 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "18 Vantagens";
            esquivar = "18 Vantagens";
            dano = "67 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "38 Vantagens";
            esquivar = "38 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "138 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "139 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Comum") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "42 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "7 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "2 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "1 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "1 de Dano Reduzido";
        } else if (tamanhoEle == "Enorme") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "3 de Dano Reduzido";
        } else if (tamanhoEle == "Gigante") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "6 de Dano Reduzido";
        } else if (tamanhoEle == "Colossal") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "9 de Dano Reduzido";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "12 de Dano Reduzido";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "16 de Dano Reduzido";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "19 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "20 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "22 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "10 Vantagens";
            esquivar = "10 Vantagens";
            dano = "23 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "11 Vantagens";
            esquivar = "11 Vantagens";
            dano = "26 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "13 Vantagens";
            esquivar = "13 Vantagens";
            dano = "44 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "14 Vantagens";
            esquivar = "14 Vantagens";
            dano = "52 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "15 Vantagens";
            esquivar = "15 Vantagens";
            dano = "54 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "17 Vantagens";
            esquivar = "17 Vantagens";
            dano = "66 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "37 Vantagens";
            esquivar = "37 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "137 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "138 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Grande") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "43 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "8 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "3 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "2 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "1 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "2 de Dano Reduzido";
        } else if (tamanhoEle == "Gigante") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "5 de Dano Reduzido";
        } else if (tamanhoEle == "Colossal") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "8 de Dano Reduzido";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "11 de Dano Reduzido";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "15 de Dano Reduzido";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "18 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "19 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "21 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "22 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "10 Vantagens";
            esquivar = "10 Vantagens";
            dano = "25 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "12 Vantagens";
            esquivar = "12 Vantagens";
            dano = "43 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "13 Vantagens";
            esquivar = "13 Vantagens";
            dano = "51 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "14 Vantagens";
            esquivar = "14 Vantagens";
            dano = "53 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "16 Vantagens";
            esquivar = "16 Vantagens";
            dano = "65 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "36 Vantagens";
            esquivar = "36 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "136 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "137 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Enorme") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "45 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "10 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "5 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "4 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "3 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "2 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "Nehuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "3 de Dano Reduzido";
        } else if (tamanhoEle == "Colossal") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "6 de Dano Reduzido";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "9 de Dano Reduzido";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "13 de Dano Reduzido";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "16 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "17 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "19 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "20 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "23 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "11 Vantagens";
            esquivar = "11 Vantagens";
            dano = "41 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "12 Vantagens";
            esquivar = "12 Vantagens";
            dano = "49 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "13 Vantagens";
            esquivar = "13 Vantagens";
            dano = "51 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "15 Vantagens";
            esquivar = "15 Vantagens";
            dano = "63 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "35 Vantagens";
            esquivar = "35 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "135 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "136 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Gigante") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "48 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "13 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "8 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "7 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "6 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "5 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "3 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "1 Vantagens";
            esquivar = "1 Vantagens";
            dano = "3 de Dano Reduzido";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "6 de Dano Reduzido";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "10 de Dano Reduzido";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "13 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "14 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "16 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "17 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "20 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "10 Vantagens";
            esquivar = "10 Vantagens";
            dano = "38 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "11 Vantagens";
            esquivar = "11 Vantagens";
            dano = "46 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "12 Vantagens";
            esquivar = "12 Vantagens";
            dano = "48 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "14 Vantagens";
            esquivar = "14 Vantagens";
            dano = "60 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "34 Vantagens";
            esquivar = "34 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "134 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "135 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Colossal") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "51 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "16 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "11 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "10 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "9 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "8 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "6 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "3 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "3 de Dano Reduzido";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "7 de Dano Reduzido";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "10 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "11 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "13 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "14 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "17 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "35 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "10 Vantagens";
            esquivar = "10 Vantagens";
            dano = "43 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "11 Vantagens";
            esquivar = "11 Vantagens";
            dano = "45 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "13 Vantagens";
            esquivar = "13 Vantagens";
            dano = "57 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "33 Vantagens";
            esquivar = "33 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "133 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "134 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Super Colossal") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "10 Desvantagens";
            esquivar = "10 Desvantagens";
            dano = "54 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "19 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "14 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "13 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "12 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "11 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "9 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "6 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "3 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "4 de Dano Reduzido";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "7 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "8 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "10 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "11 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "14 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "32 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "40 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "10 Vantagens";
            esquivar = "10 Vantagens";
            dano = "42 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "12 Vantagens";
            esquivar = "12 Vantagens";
            dano = "54 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "32 Vantagens";
            esquivar = "32 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "132 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "133 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Ultra Colossal") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "11 Desvantagens";
            esquivar = "11 Desvantagens";
            dano = "58 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "23 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "18 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "17 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "16 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "15 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "13 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "10 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "7 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "4 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "3 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "4 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "6 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "7 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "10 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "28 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "36 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "38 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "11 Vantagens";
            esquivar = "11 Vantagens";
            dano = "50 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "31 Vantagens";
            esquivar = "31 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "131 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "132 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Hiper Colossal") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "12 Desvantagens";
            esquivar = "12 Desvantagens";
            dano = "61 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "10 Desvantagens";
            esquivar = "10 Desvantagens";
            dano = "26 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "21 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "20 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "19 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "18 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "16 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "13 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "10 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "7 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "1 Desvantagens";
            esquivar = "1 Desvantagens";
            dano = "3 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "1 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "3 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "4 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "7 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "25 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "33 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "35 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "10 Vantagens";
            esquivar = "10 Vantagens";
            dano = "47 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "30 Vantagens";
            esquivar = "30 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "130 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "131 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Titã Menor") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "13 Desvantagens";
            esquivar = "13 Desvantagens";
            dano = "62 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "11 Desvantagens";
            esquivar = "11 Desvantagens";
            dano = "27 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "10 Desvantagens";
            esquivar = "10 Desvantagens";
            dano = "22 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "21 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "20 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "19 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "17 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "14 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "11 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "8 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "4 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "1 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "2 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "3 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "6 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "24 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "32 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "34 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "9 Vantagens";
            esquivar = "9 Vantagens";
            dano = "46 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "29 Vantagens";
            esquivar = "29 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "129 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "130 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Titã Médio") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "14 Desvantagens";
            esquivar = "14 Desvantagens";
            dano = "64 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "12 Desvantagens";
            esquivar = "12 Desvantagens";
            dano = "29 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "11 Desvantagens";
            esquivar = "11 Desvantagens";
            dano = "24 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "10 Desvantagens";
            esquivar = "10 Desvantagens";
            dano = "23 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "22 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "21 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "19 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "16 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "13 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "10 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "6 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "3 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "2 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "1 de Dano Reduzido";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "4 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "22 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "30 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "32 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "8 Vantagens";
            esquivar = "8 Vantagens";
            dano = "44 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "28 Vantagens";
            esquivar = "28 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "128 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "129 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Titã Maior") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "15 Desvantagens";
            esquivar = "15 Desvantagens";
            dano = "65 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "13 Desvantagens";
            esquivar = "13 Desvantagens";
            dano = "30 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "12 Desvantagens";
            esquivar = "12 Desvantagens";
            dano = "25 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "11 Desvantagens";
            esquivar = "11 Desvantagens";
            dano = "24 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "10 Desvantagens";
            esquivar = "10 Desvantagens";
            dano = "23 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "22 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "20 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "17 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "14 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "11 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "7 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "4 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "3 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "1 de Dano Adicional";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "3 de Dano Reduzido";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "21 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "29 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "5 Vantagens";
            esquivar = "5 Vantagens";
            dano = "31 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "7 Vantagens";
            esquivar = "7 Vantagens";
            dano = "43 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "27 Vantagens";
            esquivar = "27 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "127 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "128 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Titã Máximo") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "16 Desvantagens";
            esquivar = "16 Desvantagens";
            dano = "68 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "14 Desvantagens";
            esquivar = "14 Desvantagens";
            dano = "33 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "13 Desvantagens";
            esquivar = "13 Desvantagens";
            dano = "28 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "12 Desvantagens";
            esquivar = "12 Desvantagens";
            dano = "27 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "11 Desvantagens";
            esquivar = "11 Desvantagens";
            dano = "26 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "10 Desvantagens";
            esquivar = "10 Desvantagens";
            dano = "25 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "23 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "20 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "17 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "14 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "10 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "7 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "6 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "4 de Dano Adicional";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "3 de Dano Adicional";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "18 de Dano Reduzido";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "26 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "28 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "6 Vantagens";
            esquivar = "6 Vantagens";
            dano = "40 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "26 Vantagens";
            esquivar = "26 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "126 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "127 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Troposférico") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "18 Desvantagens";
            esquivar = "18 Desvantagens";
            dano = "86 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "16 Desvantagens";
            esquivar = "16 Desvantagens";
            dano = "51 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "15 Desvantagens";
            esquivar = "15 Desvantagens";
            dano = "46 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "14 Desvantagens";
            esquivar = "14 Desvantagens";
            dano = "45 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "13 Desvantagens";
            esquivar = "13 Desvantagens";
            dano = "44 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "12 Desvantagens";
            esquivar = "12 Desvantagens";
            dano = "43 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "11 Desvantagens";
            esquivar = "11 Desvantagens";
            dano = "41 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "10 Desvantagens";
            esquivar = "10 Desvantagens";
            dano = "38 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "35 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "32 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "28 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "25 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "24 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "22 de Dano Adicional";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "21 de Dano Adicional";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "18 de Dano Adicional";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "8 de Dano Reduzido";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "18 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "4 Vantagens";
            esquivar = "4 Vantagens";
            dano = "22 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "24 Vantagens";
            esquivar = "24 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "124 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "125 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Estratosférico") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "19 Desvantagens";
            esquivar = "19 Desvantagens";
            dano = "94 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "17 Desvantagens";
            esquivar = "17 Desvantagens";
            dano = "59 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "16 Desvantagens";
            esquivar = "16 Desvantagens";
            dano = "54 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "15 Desvantagens";
            esquivar = "15 Desvantagens";
            dano = "53 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "14 Desvantagens";
            esquivar = "14 Desvantagens";
            dano = "52 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "13 Desvantagens";
            esquivar = "13 Desvantagens";
            dano = "51 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "12 Desvantagens";
            esquivar = "12 Desvantagens";
            dano = "49 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "11 Desvantagens";
            esquivar = "11 Desvantagens";
            dano = "46 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "10 Desvantagens";
            esquivar = "10 Desvantagens";
            dano = "43 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "40 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "36 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "33 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "32 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "30 de Dano Adicional";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "29 de Dano Adicional";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "26 de Dano Adicional";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "8 de Dano Adicional";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "8 de Dano Reduzido";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "3 Vantagens";
            esquivar = "3 Vantagens";
            dano = "12 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "23 Vantagens";
            esquivar = "23 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "123 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "124 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Mesosférico") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "20 Desvantagens";
            esquivar = "20 Desvantagens";
            dano = "96 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "18 Desvantagens";
            esquivar = "18 Desvantagens";
            dano = "61 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "17 Desvantagens";
            esquivar = "17 Desvantagens";
            dano = "56 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "16 Desvantagens";
            esquivar = "16 Desvantagens";
            dano = "55 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "15 Desvantagens";
            esquivar = "15 Desvantagens";
            dano = "54 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "14 Desvantagens";
            esquivar = "14 Desvantagens";
            dano = "53 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "13 Desvantagens";
            esquivar = "13 Desvantagens";
            dano = "51 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "12 Desvantagens";
            esquivar = "12 Desvantagens";
            dano = "48 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "11 Desvantagens";
            esquivar = "11 Desvantagens";
            dano = "45 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "10 Desvantagens";
            esquivar = "10 Desvantagens";
            dano = "42 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "38 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "35 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "34 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "32 de Dano Adicional";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "5 Desvantagens";
            esquivar = "5 Desvantagens";
            dano = "31 de Dano Adicional";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "28 de Dano Adicional";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "10 de Dano Adicional";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "2 de Dano Adicional";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "2 Vantagens";
            esquivar = "2 Vantagens";
            dano = "12 de Dano Reduzido";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "22 Vantagens";
            esquivar = "22 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "122 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "123 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Termosférico") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "22 Desvantagens";
            esquivar = "22 Desvantagens";
            dano = "108 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "20 Desvantagens";
            esquivar = "20 Desvantagens";
            dano = "73 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "19 Desvantagens";
            esquivar = "19 Desvantagens";
            dano = "68 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "18 Desvantagens";
            esquivar = "18 Desvantagens";
            dano = "67 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "17 Desvantagens";
            esquivar = "17 Desvantagens";
            dano = "66 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "16 Desvantagens";
            esquivar = "16 Desvantagens";
            dano = "65 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "15 Desvantagens";
            esquivar = "15 Desvantagens";
            dano = "63 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "14 Desvantagens";
            esquivar = "14 Desvantagens";
            dano = "60 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "13 Desvantagens";
            esquivar = "13 Desvantagens";
            dano = "57 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "12 Desvantagens";
            esquivar = "12 Desvantagens";
            dano = "54 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "11 Desvantagens";
            esquivar = "11 Desvantagens";
            dano = "50 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "10 Desvantagens";
            esquivar = "10 Desvantagens";
            dano = "47 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "9 Desvantagens";
            esquivar = "9 Desvantagens";
            dano = "46 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "8 Desvantagens";
            esquivar = "8 Desvantagens";
            dano = "44 de Dano Adicional";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "7 Desvantagens";
            esquivar = "7 Desvantagens";
            dano = "43 de Dano Adicional";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "6 Desvantagens";
            esquivar = "6 Desvantagens";
            dano = "40 de Dano Adicional";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "4 Desvantagens";
            esquivar = "4 Desvantagens";
            dano = "22 de Dano Adicional";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "3 Desvantagens";
            esquivar = "3 Desvantagens";
            dano = "14 de Dano Adicional";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "2 Desvantagens";
            esquivar = "2 Desvantagens";
            dano = "12 de Dano Adicional";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "20 Vantagens";
            esquivar = "20 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "120 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "121 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Exosférico") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "42 Desvantagens";
            esquivar = "42 Desvantagens";
            dano = "100% + 108 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "40 Desvantagens";
            esquivar = "40 Desvantagens";
            dano = "100% + 73 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "39 Desvantagens";
            esquivar = "39 Desvantagens";
            dano = "100% + 68 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "38 Desvantagens";
            esquivar = "38 Desvantagens";
            dano = "100% + 67 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "37 Desvantagens";
            esquivar = "37 Desvantagens";
            dano = "100% + 66 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "36 Desvantagens";
            esquivar = "36 Desvantagens";
            dano = "100% + 65 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "35 Desvantagens";
            esquivar = "35 Desvantagens";
            dano = "100% + 63 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "34 Desvantagens";
            esquivar = "34 Desvantagens";
            dano = "100% + 60 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "33 Desvantagens";
            esquivar = "33 Desvantagens";
            dano = "100% + 57 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "32 Desvantagens";
            esquivar = "32 Desvantagens";
            dano = "100% + 54 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "31 Desvantagens";
            esquivar = "31 Desvantagens";
            dano = "100% + 50 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "30 Desvantagens";
            esquivar = "30 Desvantagens";
            dano = "100% + 47 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "29 Desvantagens";
            esquivar = "29 Desvantagens";
            dano = "100% + 46 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "28 Desvantagens";
            esquivar = "28 Desvantagens";
            dano = "100% + 44 de Dano Adicional";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "27 Desvantagens";
            esquivar = "27 Desvantagens";
            dano = "100% + 43 de Dano Adicional";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "26 Desvantagens";
            esquivar = "26 Desvantagens";
            dano = "100% + 40 de Dano Adicional";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "24 Desvantagens";
            esquivar = "24 Desvantagens";
            dano = "100% + 22 de Dano Adicional";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "23 Desvantagens";
            esquivar = "23 Desvantagens";
            dano = "100% + 14 de Dano Adicional";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "22 Desvantagens";
            esquivar = "22 Desvantagens";
            dano = "100% + 12 de Dano Adicional";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "20 Desvantagens";
            esquivar = "20 Desvantagens";
            dano = "100% de Dano Adicional";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Ataque Garantido";
            esquivar = "100 Vantagens";
            dano = "Dano Anulado";
        } else if (tamanhoEle == "Limite") {
            atacar = "Ataque Garantido";
            esquivar = "101 Vantagens";
            dano = "Dano Anulado";
        }
    } else if (tamanhoEu == "Sobrenatural") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "Ataque Impossível";
            esquivar = "142 Desvantagens";
            dano = "200% + 108 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "Ataque Impossível";
            esquivar = "140 Desvantagens";
            dano = "200% + 73 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "Ataque Impossível";
            esquivar = "139 Desvantagens";
            dano = "200% + 68 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "Ataque Impossível";
            esquivar = "138 Desvantagens";
            dano = "200% + 67 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "Ataque Impossível";
            esquivar = "137 Desvantagens";
            dano = "200% + 66 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "Ataque Impossível";
            esquivar = "136 Desvantagens";
            dano = "200% + 65 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "Ataque Impossível";
            esquivar = "135 Desvantagens";
            dano = "200% + 63 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "Ataque Impossível";
            esquivar = "134 Desvantagens";
            dano = "200% + 60 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "Ataque Impossível";
            esquivar = "133 Desvantagens";
            dano = "200% + 57 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "Ataque Impossível";
            esquivar = "132 Desvantagens";
            dano = "200% + 54 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "Ataque Impossível";
            esquivar = "131 Desvantagens";
            dano = "200% + 50 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "Ataque Impossível";
            esquivar = "130 Desvantagens";
            dano = "200% + 47 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "Ataque Impossível";
            esquivar = "129 Desvantagens";
            dano = "200% + 46 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "Ataque Impossível";
            esquivar = "128 Desvantagens";
            dano = "200% + 44 de Dano Adicional";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "Ataque Impossível";
            esquivar = "127 Desvantagens";
            dano = "200% + 43 de Dano Adicional";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "Ataque Impossível";
            esquivar = "126 Desvantagens";
            dano = "200% + 40 de Dano Adicional";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "Ataque Impossível";
            esquivar = "124 Desvantagens";
            dano = "200% + 22 de Dano Adicional";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "Ataque Impossível";
            esquivar = "123 Desvantagens";
            dano = "200% + 14 de Dano Adicional";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "Ataque Impossível";
            esquivar = "122 Desvantagens";
            dano = "200% + 12 de Dano Adicional";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "Ataque Impossível";
            esquivar = "120 Desvantagens";
            dano = "200% de Dano Adicional";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "Ataque Impossível";
            esquivar = "100 Desvantagens";
            dano = "100% de Dano Adicional";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        } else if (tamanhoEle == "Limite") {
            atacar = "1 Vantagem";
            esquivar = "1 Vantagem";
            dano = "4 de Dano Reduzido";
        }
    } else if (tamanhoEu == "Limite") {
        if (tamanhoEle == "Microscópico") {
            atacar = "Ataque Impossível";
            esquivar = "Esquiva Impossível";
            dano = "Hit Kill";
        } else if (tamanhoEle == "Ínfimo") {
            atacar = "Ataque Impossível";
            esquivar = "143 Desvantagens";
            dano = "200% + 112 de Dano Adicional";
        } else if (tamanhoEle == "Minúsculo") {
            atacar = "Ataque Impossível";
            esquivar = "141 Desvantagens";
            dano = "200% + 77 de Dano Adicional";
        } else if (tamanhoEle == "Pequeno") {
            atacar = "Ataque Impossível";
            esquivar = "140 Desvantagens";
            dano = "200% + 72 de Dano Adicional";
        } else if (tamanhoEle == "Anão") {
            atacar = "Ataque Impossível";
            esquivar = "139 Desvantagens";
            dano = "200% + 71 de Dano Adicional";
        } else if (tamanhoEle == "Comum") {
            atacar = "Ataque Impossível";
            esquivar = "138 Desvantagens";
            dano = "200% + 70 de Dano Adicional";
        } else if (tamanhoEle == "Grande") {
            atacar = "Ataque Impossível";
            esquivar = "137 Desvantagens";
            dano = "200% + 69 de Dano Adicional";
        } else if (tamanhoEle == "Enorme") {
            atacar = "Ataque Impossível";
            esquivar = "136 Desvantagens";
            dano = "200% + 67 de Dano Adicional";
        } else if (tamanhoEle == "Gigante") {
            atacar = "Ataque Impossível";
            esquivar = "135 Desvantagens";
            dano = "200% + 64 de Dano Adicional";
        } else if (tamanhoEle == "Colossal") {
            atacar = "Ataque Impossível";
            esquivar = "134 Desvantagens";
            dano = "200% + 61 de Dano Adicional";
        } else if (tamanhoEle == "Super Colossal") {
            atacar = "Ataque Impossível";
            esquivar = "133 Desvantagens";
            dano = "200% + 58 de Dano Adicional";
        } else if (tamanhoEle == "Ultra Colossal") {
            atacar = "Ataque Impossível";
            esquivar = "132 Desvantagens";
            dano = "200% + 54 de Dano Adicional";
        } else if (tamanhoEle == "Hiper Colossal") {
            atacar = "Ataque Impossível";
            esquivar = "131 Desvantagens";
            dano = "200% + 51 de Dano Adicional";
        } else if (tamanhoEle == "Titã Menor") {
            atacar = "Ataque Impossível";
            esquivar = "130 Desvantagens";
            dano = "200% + 50 de Dano Adicional";
        } else if (tamanhoEle == "Titã Médio") {
            atacar = "Ataque Impossível";
            esquivar = "129 Desvantagens";
            dano = "200% + 48 de Dano Adicional";
        } else if (tamanhoEle == "Titã Maior") {
            atacar = "Ataque Impossível";
            esquivar = "128 Desvantagens";
            dano = "200% + 47 de Dano Adicional";
        } else if (tamanhoEle == "Titã Máximo") {
            atacar = "Ataque Impossível";
            esquivar = "127 Desvantagens";
            dano = "200% + 44 de Dano Adicional";
        } else if (tamanhoEle == "Troposférico") {
            atacar = "Ataque Impossível";
            esquivar = "125 Desvantagens";
            dano = "200% + 26 de Dano Adicional";
        } else if (tamanhoEle == "Estratosférico") {
            atacar = "Ataque Impossível";
            esquivar = "124 Desvantagens";
            dano = "200% + 18 de Dano Adicional";
        } else if (tamanhoEle == "Mesosférico") {
            atacar = "Ataque Impossível";
            esquivar = "123 Desvantagens";
            dano = "200% + 16 de Dano Adicional";
        } else if (tamanhoEle == "Termosférico") {
            atacar = "Ataque Impossível";
            esquivar = "121 Desvantagens";
            dano = "200% + 4 de Dano Adicional";
        } else if (tamanhoEle == "Exosférico") {
            atacar = "Ataque Impossível";
            esquivar = "101 Desvantagens";
            dano = "100% + 4 de Dano Adicional";
        } else if (tamanhoEle == "Sobrenatural") {
            atacar = "1 Desvantagem";
            esquivar = "1 Desvantagem";
            dano = "4 de Dano Adicional";
        } else if (tamanhoEle == "Limite") {
            atacar = "Nenhuma Vantagem";
            esquivar = "Nenhuma Vantagem";
            dano = "0 de Dano Adicional";
        }
    }
}

// PARE AGORA! ISSO AQUI AINDA NÃO FOI ADICIONADO NO SITE >:(

function iniciarImpacto() {
    materialDano = definirDanoMaterial();
    pesoDano = parseInt(document.getElementById("massa").value);
    objetoImpacto = parseFloat(document.getElementById("objetoAltura").value);
    alturaImpacto = parseFloat(document.getElementById("impactadoAltura").value);
    multiplicador = 0;
    desvantagemImpacto = definirDesvantagemImpacto();
    danoImpacto = definirDanoImpacto();
    console.log(danoImpacto);
    document.getElementById("impacto-esquiva").innerHTML = desvantagemImpacto;
    document.getElementById("impacto-dano").innerHTML = danoImpacto;
}

function definirDanoImpacto() {
    console.log(materialDano);
    console.log(pesoDano);
    console.log(desvantagemImpacto);
    return materialDano + "+" + parseInt(pesoDano/20);
}

function definirDanoMaterial() {
    let material = document.getElementById("material").value;
    if (material == "Humano") {
        return "1d2";
    } else if (material == "Deus") {
        return "1d3";
    } else if (material == "Madeira") {
        return "1d4";
    } else if (material == "Pedra") {
        return "1d6";
    } else if (material == "Ferro") {
        return "1d10";
    } else if (material == "Diamante") {
        return "1d20";
    } else if (material == "Univite") {
        return "1d20+1d10+2";
    } else if (material == "Titanium") {
        return "2d20+8";
    } else if (material == "Uranium") {
        return "2d20+1d10+10";
    }
}

function definirDesvantagemImpacto() {
    if (objetoImpacto <= alturaImpacto / 30) {
        return "1 Vantagem em Reflexos";
    } else if (objetoImpacto < alturaImpacto) {
        return "Nenhuma Vantagem"
    } else if (objetoImpacto <= alturaImpacto * multiplicador) {
        if (multiplicador > 1) {
            palavraDesvantagemImpacto = "Desvantagens"
        } else {
            palavraDesvantagemImpacto = "Desvantagem"
        }
        return `${multiplicador} ${palavraDesvantagemImpacto} em Reflexos`;
    } else {
        multiplicador++;
        return definirDesvantagemImpacto();
    }
}


// console.log(`-------------------------------------------------------`);
// console.log(`Área de Impacto: ${objetoImpacto}`);
// console.log(`Altura do Esquivante: ${alturaImpacto}`);
// console.log(`-------------------------------------------------------`);
// console.log(`O Esquivantem tem ${resultadoImpacto}`);

// console.log(`Pontos na Perícia: ${pericia}`);
// console.log(`Rolagem da Perícia: ${periciaDado}`);
// console.log(`Resultado da Perícia: ${periciaResultado}`);
// console.log(`Pontos no Atributo: ${atributo}`);
// console.log(`Rolagem do Atributo: ${atributoDado}`);
// console.log(`Resultado do Atributo: ${atributoResultado}`);
// console.log(`-------------------------------------------------------`);
// console.log(`${periciaResultado} + ${atributoResultado}`);
    // console.log(`Resultado Final: ${resultadoFinal}`);

// console.log(`-------------------------------------------------------`);
// console.log(`Sua Altura: ${alturaEu}`);
// console.log(`Classificação: ${tamanhoEu}`);
// console.log(`Altura do Oponente: ${alturaEle}`);
// console.log(`Classificação do Oponente: ${tamanhoEle}`);
// console.log(`-------------------------------------------------------`);
// console.log(`Ataque: ${atacar}`);
// console.log(`Esquiva: ${esquivar}`);
// console.log(`Dano: ${dano}`);

function checarCodigo() {
    codigo = document.getElementById("codigo").value;

    //personagem secreto 1
    if (codigo == cdg("LIA")) {
       document.getElementById(cdg("HTWJIKTQ")).setAttribute("class","invisivel");
       document.getElementById("personagem-secreto-1").setAttribute("class",""); 
       document.getElementById("personagem-secreto-1").innerHTML = cdg("hTWJIKTQ lQKQPTJQNQ");
       if (codigo1descoberto == false) {
        somCodigo(1);
        document.getElementById("codigo").value = "";
        codigo1descoberto = true;
       }
    }

        //personagem secreto 2
    if (codigo == cdg("QKJKIBIBAKQ")) {
        document.getElementById("apocalipse-plus").setAttribute("class",""); 
        document.getElementById("personagem-secreto-2-1").setAttribute("class",""); 
        document.getElementById("personagem-secreto-2-2").setAttribute("class","");
        document.getElementById("personagem-secreto-2-3").setAttribute("class","");
        document.getElementById("personagem-secreto-2-4").setAttribute("class","");
        document.getElementById("personagem-secreto-2-5").setAttribute("class","");
        document.getElementById("personagem-secreto-2-6").setAttribute("class","");
        document.getElementById("personagem-secreto-2-1").innerHTML = cdg("qHEP");
        document.getElementById("personagem-secreto-2-2").innerHTML = cdg("bTXVIJE");
        document.getElementById("personagem-secreto-2-3").innerHTML = cdg("bTXVIJE kEPTPJEZJE");
        document.getElementById("personagem-secreto-2-4").innerHTML = cdg("bTXVIJE qNAXJI");
        document.getElementById("personagem-secreto-2-5").innerHTML = cdg("bTXVIJE k. qNAXJI");
        document.getElementById("personagem-secreto-2-6").innerHTML = cdg("hEPLQP");
        if (codigo2descoberto == false) {
        somCodigo(2);
        document.getElementById("codigo").value = "";
        codigo2descoberto = true;
       }
    }

        //personagem secreto 3
    if (codigo == cdg("QA QA")) {
       document.getElementById("apocalipse-plus").setAttribute("class","");
       document.getElementById("personagem-secreto-3").setAttribute("class","");
       document.getElementById("personagem-secreto-3").innerHTML = cdg("xIMTPIUEU");
       if (codigo3descoberto == false) {
        somCodigo(3);
        document.getElementById("codigo").value = "";
        codigo3descoberto = true;
       }
    }

        //personagem secreto 4
    if (codigo == cdg("EPUQRQK")) {
       document.getElementById("apocalipse-plus").setAttribute("class","");
       document.getElementById("personagem-secreto-4").setAttribute("class","");
       document.getElementById("personagem-secreto-4").innerHTML = cdg("nQJAKQ");
       if (codigo4descoberto == false) {
        somCodigo(4);
        document.getElementById("codigo").value = "";
        codigo4descoberto = true;
       }
    }

            //personagem secreto 5
    if (codigo == cdg("SQZNEK")) {
       document.getElementById(cdg("QKJKINEQ")).setAttribute("class","invisivel");
       document.getElementById("personagem-secreto-5").setAttribute("class","");
       document.getElementById("personagem-secreto-5").innerHTML = cdg("uTZT qKJKINEQ");
       if (codigo5descoberto == false) {
        somCodigo(5);
        document.getElementById("codigo").value = "";
        codigo5descoberto = true;
       }
    }

                //personagem secreto 6
    if (codigo == cdg("MEK^I")) {
       document.getElementById("personagem-secreto-6-1").setAttribute("class","");
       document.getElementById("personagem-secreto-6-2").setAttribute("class","");
       document.getElementById("personagem-secreto-6-3").setAttribute("class","");
       document.getElementById("personagem-secreto-6-4").setAttribute("class","");
       document.getElementById("personagem-secreto-6-1").innerHTML = cdg("qHQKEFQ");
       document.getElementById("personagem-secreto-6-2").innerHTML = cdg("tZHECQ");
       document.getElementById("personagem-secreto-6-3").innerHTML = cdg("xAGAKTQ");
       document.getElementById("personagem-secreto-6-4").innerHTML = cdg("rAXQ");

        estilo.setAttribute("href",`style-apocalipse.css`);
        trocarModo();
        atualizarPerfil();
       document.getElementById("fundo").setAttribute("class","noturno-2");
       if (codigo6descoberto == false) {
        somCodigo(6);
        document.getElementById("codigo").value = "";
        codigo6descoberto = true;
       }
    }

    //tema secreto 1
    if (codigo == cdg("BETC•I")) {
       document.getElementById("tema-secreto-1").setAttribute("class",""); 
       document.getElementById("tema-secreto-1").innerHTML = cdg("cIZQP hTWJIK");
       if (codigo5descoberto == false) {
        somCodigo(7);
        document.getElementById("codigo").value = "";
        codigo5descoberto = true;
       }
    }

    //temas secretos do tormenta
    if (tema == "tormenta") {
        if (codigo == cdg("∞∞")) {
            document.getElementById("fundo").setAttribute("class","t0");
        }
        if (codigo == cdg("∞♫")) {
            document.getElementById("fundo").setAttribute("class","t1");
        }
        if (codigo == cdg("∞✇")) {
            document.getElementById("fundo").setAttribute("class","t2");
        }
        if (codigo == cdg("∞☀")) {
            document.getElementById("fundo").setAttribute("class","t3");
        }
        if (codigo == cdg("∞★")) {
            document.getElementById("fundo").setAttribute("class","t4");
        }
        if (codigo == cdg("∞☾")) {
            document.getElementById("fundo").setAttribute("class","t5");
        }
        if (codigo == cdg("∞☭")) {
            document.getElementById("fundo").setAttribute("class","t6");
        }
        if (codigo == cdg("∞☹")) {
            document.getElementById("fundo").setAttribute("class","t7");
        }
        if (codigo == cdg("∞η")) {
            document.getElementById("fundo").setAttribute("class","t8");
        }
        if (codigo == cdg("∞☠")) {
            document.getElementById("fundo").setAttribute("class","t9");
        }
        if (codigo == cdg("♫∞")) {
            document.getElementById("fundo").setAttribute("class","t10");
        }
        if (codigo == cdg("♫♫")) {
            document.getElementById("fundo").setAttribute("class","t11");
        }
        if (codigo == cdg("♫✇")) {
            document.getElementById("fundo").setAttribute("class","t12");
        }
        if (codigo == cdg("♫☀")) {
            document.getElementById("fundo").setAttribute("class","t13");
        }
        if (codigo == cdg("♫★")) {
            document.getElementById("fundo").setAttribute("class","t14");
        }
        if (codigo == cdg("♫☾")) {
            document.getElementById("fundo").setAttribute("class","t15");
        }
        if (codigo == cdg("♫☭")) {
            document.getElementById("fundo").setAttribute("class","t16");
        }
        if (codigo == cdg("♫☹")) {
            document.getElementById("fundo").setAttribute("class","t17");
        }
        if (codigo == cdg("♫η")) {
            document.getElementById("fundo").setAttribute("class","t18");
        }
        if (codigo == cdg("♫☠")) {
            document.getElementById("fundo").setAttribute("class","t19");
        }
        if (codigo == cdg("✇∞")) {
            document.getElementById("fundo").setAttribute("class","t20");
        }
        if (codigo == cdg("✇♫")) {
            document.getElementById("fundo").setAttribute("class","t21");
        }
        if (codigo == cdg("✇✇")) {
            document.getElementById("fundo").setAttribute("class","t22");
        }
        if (codigo == cdg("✇☀")) {
            document.getElementById("fundo").setAttribute("class","t23");
        }
        if (codigo == cdg("✇★")) {
            document.getElementById("fundo").setAttribute("class","t24");
        }
        if (codigo == cdg("✇☾")) {
            document.getElementById("fundo").setAttribute("class","t25");
        }
        if (codigo == cdg("✇☭")) {
            document.getElementById("fundo").setAttribute("class","t26");
        }
        if (codigo == cdg("✇☹")) {
            document.getElementById("fundo").setAttribute("class","t27");
        }
        if (codigo == cdg("✇η")) {
            document.getElementById("fundo").setAttribute("class","t28");
        }
        if (codigo == cdg("✇☠")) {
            document.getElementById("fundo").setAttribute("class","t29");
        }
        if (codigo == cdg("☀∞")) {
            document.getElementById("fundo").setAttribute("class","t30");
        }
        if (codigo == cdg("☀♫")) {
            document.getElementById("fundo").setAttribute("class","t31");
        }
        if (codigo == cdg("☀✇")) {
            document.getElementById("fundo").setAttribute("class","t32");
        }
        if (codigo == cdg("☀☀")) {
            document.getElementById("fundo").setAttribute("class","t33");
        }
        if (codigo == cdg("☀★")) {
            document.getElementById("fundo").setAttribute("class","t34");
        }
        if (codigo == cdg("☀☾")) {
            document.getElementById("fundo").setAttribute("class","t35");
        }
        if (codigo == cdg("☀☭")) {
            document.getElementById("fundo").setAttribute("class","t36");
        }
        if (codigo == cdg("☀☹")) {
            document.getElementById("fundo").setAttribute("class","t37");
        }
        if (codigo == cdg("☀η")) {
            document.getElementById("fundo").setAttribute("class","t38");
        }
        if (codigo == cdg("☀☠")) {
            document.getElementById("fundo").setAttribute("class","t39");
        }
        if (codigo == cdg("★∞")) {
            document.getElementById("fundo").setAttribute("class","t40");
        }
        if (codigo == cdg("★♫")) {
            document.getElementById("fundo").setAttribute("class","t41");
        }
        if (codigo == cdg("★✇")) {
            document.getElementById("fundo").setAttribute("class","t42");
        }
        if (codigo == cdg("★☀")) {
            document.getElementById("fundo").setAttribute("class","t43");
        }
        if (codigo == cdg("★★")) {
            document.getElementById("fundo").setAttribute("class","t44");
        }
        if (codigo == cdg("★☾")) {
            document.getElementById("fundo").setAttribute("class","t45");
        }
        if (codigo == cdg("★☭")) {
            document.getElementById("fundo").setAttribute("class","t46");
        }
        if (codigo == cdg("★☹")) {
            document.getElementById("fundo").setAttribute("class","t47");
        }
        if (codigo == cdg("★η")) {
            document.getElementById("fundo").setAttribute("class","t48");
        }
        if (codigo == cdg("★☠")) {
            document.getElementById("fundo").setAttribute("class","t49");
        }
        if (codigo == cdg("☾∞")) {
            document.getElementById("fundo").setAttribute("class","t50");
        }
        if (codigo == cdg("☾♫")) {
            document.getElementById("fundo").setAttribute("class","t51");
        }
        if (codigo == cdg("☾✇")) {
            document.getElementById("fundo").setAttribute("class","t52");
        }
        if (codigo == cdg("☾☀")) {
            document.getElementById("fundo").setAttribute("class","t53");
        }
        if (codigo == cdg("☾★")) {
            document.getElementById("fundo").setAttribute("class","t54");
        }
        if (codigo == cdg("☾☾")) {
            document.getElementById("fundo").setAttribute("class","t55");
        }
        if (codigo == cdg("☾☭")) {
            document.getElementById("fundo").setAttribute("class","t56");
        }
        if (codigo == cdg("☾☹")) {
            document.getElementById("fundo").setAttribute("class","t57");
        }
        if (codigo == cdg("☾η")) {
            document.getElementById("fundo").setAttribute("class","t58");
        }
        if (codigo == cdg("☾☠")) {
            document.getElementById("fundo").setAttribute("class","t59");
        }
        if (codigo == cdg("☭∞")) {
            document.getElementById("fundo").setAttribute("class","t60");
        }
        if (codigo == cdg("☭♫")) {
            document.getElementById("fundo").setAttribute("class","t61");
        }
        if (codigo == cdg("☭✇")) {
            document.getElementById("fundo").setAttribute("class","t62");
        }
        if (codigo == cdg("☭☀")) {
            document.getElementById("fundo").setAttribute("class","t63");
        }
        if (codigo == cdg("☭★")) {
            document.getElementById("fundo").setAttribute("class","t64");
        }
        if (codigo == cdg("☭☾")) {
            document.getElementById("fundo").setAttribute("class","t65");
        }
        if (codigo == cdg("☭☭")) {
            document.getElementById("fundo").setAttribute("class","t66");
        }
        if (codigo == cdg("☭☹")) {
            document.getElementById("fundo").setAttribute("class","t67");
        }
        if (codigo == cdg("☭η")) {
            document.getElementById("fundo").setAttribute("class","t68");
        }
    }
}

function somCodigo(numero) {
    if (numero == 1) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso1_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.2;
    }
    if (numero == 2) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso2_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.4;
    }
    if (numero == 3) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso3_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.8;
    }
    if (numero == 4) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso4_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.8;
    }
    if (numero == 5) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso5_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.4;
    }
    if (numero == 6) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso6_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 1.0;
    }
    if (numero == 7) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/tema1_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.8;
    }
}

function cdg(cdginsert) {
    
    var betacharlo = ['q','m','w','n','e','b','r','v','t','c','y','x','u','z','i','l','o','k','p','j','a','h','s','g','d','f',"~", " ", "-", "_", ".", "&","?", "!", "@", "#", "/",'Q','M','W','N','E','B','R','V','T','C','Y','X','U','Z','I','L','O','K','P','J','A','H','S','G','D','F',"^","∞","♫","✇","☀","★","☾","☭","☹","η","☠","∹","•"];
    var alfabeto =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"Ç"," ", "-", "_", ".", "&","?", "!", "@", "#", "/","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","ç","0","1","2","3","4","5","6","7","8","9",",","ã"];

    var cdgrslt = [];
    for(let i=0; i<cdginsert.length; i++){
        for(let j =0; j<betacharlo.length; j++){
            if(cdginsert[i] === betacharlo[j]){
            cdgrslt.push(alfabeto[j]);
            }
        }
    }
    return cdgrslt.join("");
  }