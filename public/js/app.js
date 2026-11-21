let personagemEscolhido = document.getElementById("personagens-escolha");
let vantagens;
let temaSelector = document.getElementById("tema-escolha");
let noturno = "true";
let tema = "sinfonia-4";
let rolador = document.getElementById("rolador");
let boxRoll = document.getElementById("testeroll");
let periciaEscolhida = document.getElementById("testeroll__pericia");
let atributoEscolhido = document.getElementById("testeroll__atributo");
let valoresIniciais1Logica = document.getElementById("testeroll__valoresiniciais1");
let barrinhaLogica = document.getElementById("testeroll__barras");
let valoresIniciais2Logica = document.getElementById("testeroll__valoresiniciais2");
let resultadoInicialLogica = document.getElementById("testeroll__resultadoinicial");
let resultadoFinalLogica = document.getElementById("testeroll__resultadofinal");
let resultadoFinal = "";
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
let codigo8descoberto = false;
let codigo9descoberto = false;
let codigo10descoberto = false;
let codigo11descoberto = false;
let codigo12descoberto = false;
let codigo13descoberto = false;
let codigo14descoberto = false;

let perfilEscolha = "caleb";
    ficha = cdg("☹✇∹☹∞∹☾∞∹☾∞∹✇∹☾∞∹☾∞∹☾∞∹☾∞∹✇∹☾∞∹♫☾∹☾∞∹✇∹✇∹✇∹✇∹✇∹✇∹☾∞∹☹∞∹☹∞∹☹∞∹∞∹∞∹∞∹☾∞").split(",");
    vantagens = cdg("✇∹♫∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹♫∹✇∹∞∹∞∹∞∹∞").split(",");
    entidade = false;
    verificarVantagens();

function atualizarPerfil() {
    let perfilImagem = document.getElementById("perfil");
    perfilEscolha = document.getElementById("personagens-escolha").value;

    if (tema == "cosmo" || tema == "secreto-1" || tema == "apocalipse" || tema == "sinfonia-3" || tema == "sinfonia-4") {
        if (perfilEscolha == "caleb") {
            perfilImagem.setAttribute("src","assets/CalebPerfil.png")
            perfilImagem.setAttribute("alt","Ícone do Caleb")
        } else if (perfilEscolha == "kasyade") {
            perfilImagem.setAttribute("src","assets/KasyadePerfil.png")
            perfilImagem.setAttribute("alt","Ícone da Kaysade")
        } else if (perfilEscolha == "rascal") {
            perfilImagem.setAttribute("src","assets/RascalPerfil.png")
            perfilImagem.setAttribute("alt","Ícone do Rascal")
        } else if (perfilEscolha == "jonasvictor") {
            perfilImagem.setAttribute("src","assets/JonasVictorPerfil.png")
            perfilImagem.setAttribute("alt","Ícone do Jonas Victor")
        } else if (perfilEscolha == "udryk") {
            perfilImagem.setAttribute("src","assets/UdrykPerfil.png")
            perfilImagem.setAttribute("alt","Ícone do Udryk")
        } else if (perfilEscolha == "kael") {
            perfilImagem.setAttribute("src","assets/KaelPerfil.png")
            perfilImagem.setAttribute("alt","Ícone do Kael")
        } else if (perfilEscolha == "placenta") {
            perfilImagem.setAttribute("src","assets/PlacentaPerfil.png")
            perfilImagem.setAttribute("alt","Ícone do Placenta")
        } else if (perfilEscolha == "benjamim") {
            perfilImagem.setAttribute("src","assets/BenjamimPerfil.png")
            perfilImagem.setAttribute("alt","Ícone do Benjamim")
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
        } else if (perfilEscolha == "teco") {
            perfilImagem.setAttribute("src","assets/TecoPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Teco");
        } else if (perfilEscolha == "laicapse") {
            perfilImagem.setAttribute("src","assets/LaicapsePerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Laicapse");
        } else if (perfilEscolha == "lincoln") {
            perfilImagem.setAttribute("src","assets/LincolnPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Lincoln");
        } else if (perfilEscolha == "jonas") {
            perfilImagem.setAttribute("src","assets/JonasPerfil.png");
            perfilImagem.setAttribute("alt","Ícone do Jonas");
        } else if (perfilEscolha == "personagem-secreto-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hTWJIKTQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ hTWJIKTQ lQKQPTJQNQ"));
        } else if (perfilEscolha == "personagem-secreto-9-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIhEKNElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI hEKNE"));
        } else if (perfilEscolha == "personagem-secreto-9-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIqFAXlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI qFAX"));
        } else if (perfilEscolha == "personagem-secreto-9-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIhEKUEXVIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI hEKUEXVI"));
        } else if (perfilEscolha == "personagem-secreto-10-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQtFAUTlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uEWVQ-tFAUT"));
        } else if (perfilEscolha == "personagem-secreto-10-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQhTWJIKTQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ uEWVQ-hTWJIKTQ"));
        } else if (perfilEscolha == "personagem-secreto-10-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQbEJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uEWVQ-bEJI"));
        } else if (perfilEscolha == "personagem-secreto-11") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/pALEKjEWIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI pALEK jEWI"));
        } else if (perfilEscolha == "zadiel") {
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
            perfilImagem.setAttribute("alt",cdg("tWIZE NQP qHEP"));
        } else if (perfilEscolha == "personagem-secreto-2-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI bTXVIJE"));
        } else if (perfilEscolha == "personagem-secreto-2-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJElEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI bTXVIJE kEPTPJEZJE"));
        } else if (perfilEscolha == "personagem-secreto-2-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI bTXVIJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJEqNAXJIlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI bTXVIJE kEPTPJEZJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-6") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hEPLQPlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NQP hEPLQP"));
        } else if (perfilEscolha == "personagem-secreto-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xIMTPIUEUlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI xIMTPIUEU"));
        } else if (perfilEscolha == "personagem-secreto-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/nQJAKQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NQ nQJAKQ"));
        } else if (perfilEscolha == "personagem-secreto-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uTZTqKJKINEQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI uTZT qKJKINEQ"));
        } else if (perfilEscolha == "personagem-secreto-6-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHQKEFQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI qHQKEFQ"));
        } else if (perfilEscolha == "personagem-secreto-6-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/tZHECQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI tZHECQ"));
        } else if (perfilEscolha == "personagem-secreto-6-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xAGAKTQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI xAGAKTQ"));
        } else if (perfilEscolha == "personagem-secreto-6-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/rAXQlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI rAXQ"));
        } else if (perfilEscolha == "personagem-secreto-7") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bEZTGlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI bEZTG"));
        } else if (perfilEscolha == "personagem-secreto-8-1" || perfilEscolha == "personagem-secreto-8-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/jQUTEXlEKBTX.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NQ jQUTEX"));
        }
    } else if (tema == "cataclismo") {
        if (perfilEscolha == "caleb") {
            perfilImagem.setAttribute("src","assets/CalebPerfilCataclismo.png")
            perfilImagem.setAttribute("alt","Ícone do Caleb")
        } else if (perfilEscolha == "kasyade") {
            perfilImagem.setAttribute("src","assets/KasyadePerfilCataclismo.png")
            perfilImagem.setAttribute("alt","Ícone da Kaysade")
        } else if (perfilEscolha == "rascal") {
            perfilImagem.setAttribute("src","assets/RascalPerfilCataclismo.png")
            perfilImagem.setAttribute("alt","Ícone do Rascal")
        } else if (perfilEscolha == "jonasvictor") {
            perfilImagem.setAttribute("src","assets/JonasVictorPerfilCataclismo.png")
            perfilImagem.setAttribute("alt","Ícone do Jonas Victor")
        } else if (perfilEscolha == "udryk") {
            perfilImagem.setAttribute("src","assets/UdrykPerfilCataclismo.png")
            perfilImagem.setAttribute("alt","Ícone do Udryk")
        } else if (perfilEscolha == "kael") {
            perfilImagem.setAttribute("src","assets/KaelPerfilCataclismo.png")
            perfilImagem.setAttribute("alt","Ícone do Kael")
        } else if (perfilEscolha == "placenta") {
            perfilImagem.setAttribute("src","assets/PlacentaPerfilCataclismo.png")
            perfilImagem.setAttribute("alt","Ícone do Placenta")
        } else if (perfilEscolha == "benjamim") {
            perfilImagem.setAttribute("src","assets/BenjamimPerfilCataclismo.png")
            perfilImagem.setAttribute("alt","Ícone do Benjamim")
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
        } else if (perfilEscolha == "teco") {
            perfilImagem.setAttribute("src","assets/TecoPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Teco");
        } else if (perfilEscolha == "laicapse") {
            perfilImagem.setAttribute("src","assets/LaicapsePerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Laicapse");
        } else if (perfilEscolha == "lincoln") {
            perfilImagem.setAttribute("src","assets/LincolnPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Lincoln");
        } else if (perfilEscolha == "jonas") {
            perfilImagem.setAttribute("src",cdg("assets/JonasPerfilCataclismo.png"));
            perfilImagem.setAttribute("alt",cdg("Ícone do Jonas"));
        } else if (perfilEscolha == "personagem-secreto-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hTWJIKTQlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ hTWJIKTQ lQKQPTJQNQ"));
        } else if (perfilEscolha == "personagem-secreto-9-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIhEKNElEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI hEKNE"));
        } else if (perfilEscolha == "personagem-secreto-9-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIqFAXlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI qFAX"));
        } else if (perfilEscolha == "personagem-secreto-9-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIhEKUEXVIlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI hEKUEXVI"));
        } else if (perfilEscolha == "personagem-secreto-10-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQtFAUTlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uEWVQ-tFAUT"));
        } else if (perfilEscolha == "personagem-secreto-10-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQhTWJIKTQlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ uEWVQ-hTWJIKTQ"));
        } else if (perfilEscolha == "personagem-secreto-10-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQbEJIlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uEWVQ-bEJI"));
        } else if (perfilEscolha == "personagem-secreto-11") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/pALEKjEWIlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI pALEK jEWI"));
        } else if (perfilEscolha == "zadiel") {
            perfilImagem.setAttribute("src","assets/ZadielPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Zadiel");
        } else if (perfilEscolha == "artrodea") {
            perfilImagem.setAttribute("src","assets/ArtrodeaPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Artrodea");
        } else if (perfilEscolha == "shaka") {
            perfilImagem.setAttribute("src","assets/ShakaPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Shaka");
        } else if (perfilEscolha == "kyomi") {
            perfilImagem.setAttribute("src","assets/KyomiPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Kyomi");
        } else if (perfilEscolha == "lux") {
            perfilImagem.setAttribute("src","assets/LuxPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone da Lux");
        } else if (perfilEscolha == "mabel") {
            perfilImagem.setAttribute("src","assets/MabelPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Mabel");
        } else if (perfilEscolha == "yukkimi") {
            perfilImagem.setAttribute("src","assets/YukkimiPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone da Yukkimi");
        } else if (perfilEscolha == "anagi") {
            perfilImagem.setAttribute("src","assets/AnagiPerfilCataclismo.png");
            perfilImagem.setAttribute("alt","Ícone do Anagi");
        } else if (perfilEscolha == "personagem-secreto-2-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHEPlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP qHEP"));
        } else if (perfilEscolha == "personagem-secreto-2-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJElEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE"));
        } else if (perfilEscolha == "personagem-secreto-2-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJElEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE"));
        } else if (perfilEscolha == "personagem-secreto-2-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEqNAXJIlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJEqNAXJIlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-6") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hEPLQPlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP hEPLQP"));
        } else if (perfilEscolha == "personagem-secreto-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xIMTPIUEUlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xIMTPIUEU"));
        } else if (perfilEscolha == "personagem-secreto-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/nQJAKQlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ nQJAKQ"));
        } else if (perfilEscolha == "personagem-secreto-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uTZTqKJKINEQlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uTZT qKJKINEQ"));
        } else if (perfilEscolha == "personagem-secreto-6-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHQKEFQlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI qHQKEFQ"));
        } else if (perfilEscolha == "personagem-secreto-6-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/tZHECQlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI tZHECQ"));
        } else if (perfilEscolha == "personagem-secreto-6-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xAGAKTQlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xAGAKTQ"));
        } else if (perfilEscolha == "personagem-secreto-6-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/rAXQlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI rAXQ"));
        } else if (perfilEscolha == "personagem-secreto-7") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bEZTGlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI bEZTG"));
        } else if (perfilEscolha == "personagem-secreto-8-1" || perfilEscolha == "personagem-secreto-8-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/jQUTEXlEKBTXwQJQWXTPUI.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NQ jQUTEX"));
        }
    } else if (tema == "aquarela") {
        if (perfilEscolha == "caleb") {
            perfilImagem.setAttribute("src","assets/CalebPerfilAquarela.png")
            perfilImagem.setAttribute("alt","Ícone do Caleb")
        } else if (perfilEscolha == "kasyade") {
            perfilImagem.setAttribute("src","assets/KasyadePerfilAquarela.png")
            perfilImagem.setAttribute("alt","Ícone da Kaysade")
        } else if (perfilEscolha == "rascal") {
            perfilImagem.setAttribute("src","assets/RascalPerfilAquarela.png")
            perfilImagem.setAttribute("alt","Ícone do Rascal")
        } else if (perfilEscolha == "jonasvictor") {
            perfilImagem.setAttribute("src","assets/JonasVictorPerfilAquarela.png")
            perfilImagem.setAttribute("alt","Ícone do Jonas Victor")
        } else if (perfilEscolha == "udryk") {
            perfilImagem.setAttribute("src","assets/UdrykPerfilAquarela.png")
            perfilImagem.setAttribute("alt","Ícone do Udryk")
        } else if (perfilEscolha == "kael") {
            perfilImagem.setAttribute("src","assets/KaelPerfilAquarela.png")
            perfilImagem.setAttribute("alt","Ícone do Kael")
        } else if (perfilEscolha == "placenta") {
            perfilImagem.setAttribute("src","assets/PlacentaPerfilAquarela.png")
            perfilImagem.setAttribute("alt","Ícone do Placenta")
        } else if (perfilEscolha == "benjamim") {
            perfilImagem.setAttribute("src","assets/BenjamimPerfilAquarela.png")
            perfilImagem.setAttribute("alt","Ícone do Benjamim")
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
        } else if (perfilEscolha == "teco") {
            perfilImagem.setAttribute("src","assets/TecoPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Teco");
        } else if (perfilEscolha == "laicapse") {
            perfilImagem.setAttribute("src","assets/LaicapsePerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Laicapse");
        } else if (perfilEscolha == "lincoln") {
            perfilImagem.setAttribute("src","assets/LincolnPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Lincoln");
        } else if (perfilEscolha == "jonas") {
            perfilImagem.setAttribute("src","assets/JonasPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Jonas");
        } else if (perfilEscolha == "personagem-secreto-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hTWJIKTQlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ hTWJIKTQ lQKQPTJQNQ"));
        } else if (perfilEscolha == "personagem-secreto-9-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIhEKNElEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI hEKNE"));
        } else if (perfilEscolha == "personagem-secreto-9-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIqFAXlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI qFAX"));
        } else if (perfilEscolha == "personagem-secreto-9-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIhEKUEXVIlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI hEKUEXVI"));
        } else if (perfilEscolha == "personagem-secreto-10-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQtFAUTlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uEWVQ-tFAUT"));
        } else if (perfilEscolha == "personagem-secreto-10-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQhTWJIKTQlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ uEWVQ-hTWJIKTQ"));
        } else if (perfilEscolha == "personagem-secreto-10-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQbEJIlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uEWVQ-bEJI"));
        } else if (perfilEscolha == "personagem-secreto-11") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/pALEKjEWIlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI pALEK jEWI"));
        } else if (perfilEscolha == "zadiel") {
            perfilImagem.setAttribute("src","assets/ZadielPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Zadiel");
        } else if (perfilEscolha == "artrodea") {
            perfilImagem.setAttribute("src","assets/ArtrodeaPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Artrodea");
        } else if (perfilEscolha == "shaka") {
            perfilImagem.setAttribute("src","assets/ShakaPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Shaka");
        } else if (perfilEscolha == "kyomi") {
            perfilImagem.setAttribute("src","assets/KyomiPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Kyomi");
        } else if (perfilEscolha == "lux") {
            perfilImagem.setAttribute("src","assets/LuxPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone da Lux");
        } else if (perfilEscolha == "mabel") {
            perfilImagem.setAttribute("src","assets/MabelPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Mabel");
        } else if (perfilEscolha == "yukkimi") {
            perfilImagem.setAttribute("src","assets/YukkimiPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone da Yukkimi");
        } else if (perfilEscolha == "anagi") {
            perfilImagem.setAttribute("src","assets/AnagiPerfilAquarela.png");
            perfilImagem.setAttribute("alt","Ícone do Anagi");
        } else if (perfilEscolha == "personagem-secreto-2-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHEPlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP qHEP"));
        } else if (perfilEscolha == "personagem-secreto-2-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJElEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE"));
        } else if (perfilEscolha == "personagem-secreto-2-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJElEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE"));
        } else if (perfilEscolha == "personagem-secreto-2-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEqNAXJIlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJEqNAXJIlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-6") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hEPLQPlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP hEPLQP"));
        } else if (perfilEscolha == "personagem-secreto-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xIMTPIUEUlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xIMTPIUEU"));
        } else if (perfilEscolha == "personagem-secreto-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/nQJAKQlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ nQJAKQ"));
        } else if (perfilEscolha == "personagem-secreto-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uTZTqKJKINEQlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uTZT qKJKINEQ"));
        } else if (perfilEscolha == "personagem-secreto-6-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHQKEFQlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI qHQKEFQ"));
        } else if (perfilEscolha == "personagem-secreto-6-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/tZHECQlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI tZHECQ"));
        } else if (perfilEscolha == "personagem-secreto-6-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xAGAKTQlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xAGAKTQ"));
        } else if (perfilEscolha == "personagem-secreto-6-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/rAXQlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI rAXQ"));
        } else if (perfilEscolha == "personagem-secreto-7") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bEZTGlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI bEZTG"));
        } else if (perfilEscolha == "personagem-secreto-8-1" || perfilEscolha == "personagem-secreto-8-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/jQUTEXlEKBTXqOAQKEXQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NQ jQUTEX"));
        }
    } else if (tema == "tormenta") {
        if (perfilEscolha == "caleb") {
            perfilImagem.setAttribute("src","assets/CalebPerfilTormenta.png")
            perfilImagem.setAttribute("alt","Ícone do Caleb")
        } else if (perfilEscolha == "kasyade") {
            perfilImagem.setAttribute("src","assets/KasyadePerfilTormenta.png")
            perfilImagem.setAttribute("alt","Ícone da Kaysade")
        } else if (perfilEscolha == "rascal") {
            perfilImagem.setAttribute("src","assets/RascalPerfilTormenta.png")
            perfilImagem.setAttribute("alt","Ícone do Rascal")
        } else if (perfilEscolha == "jonasvictor") {
            perfilImagem.setAttribute("src","assets/JonasVictorPerfilTormenta.png")
            perfilImagem.setAttribute("alt","Ícone do Jonas Victor")
        } else if (perfilEscolha == "udryk") {
            perfilImagem.setAttribute("src","assets/UdrykPerfilTormenta.png")
            perfilImagem.setAttribute("alt","Ícone do Udryk")
        } else if (perfilEscolha == "kael") {
            perfilImagem.setAttribute("src","assets/KaelPerfilTormenta.png")
            perfilImagem.setAttribute("alt","Ícone do Kael")
        } else if (perfilEscolha == "placenta") {
            perfilImagem.setAttribute("src","assets/PlacentaPerfilTormenta.png")
            perfilImagem.setAttribute("alt","Ícone do Placenta")
        } else if (perfilEscolha == "benjamim") {
            perfilImagem.setAttribute("src","assets/BenjamimPerfilTormenta.png")
            perfilImagem.setAttribute("alt","Ícone do Benjamim")
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
        } else if (perfilEscolha == "teco") {
            perfilImagem.setAttribute("src","assets/TecoPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Teco");
        } else if (perfilEscolha == "laicapse") {
            perfilImagem.setAttribute("src","assets/LaicapsePerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Laicapse");
        } else if (perfilEscolha == "lincoln") {
            perfilImagem.setAttribute("src","assets/LincolnPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Lincoln");
        } else if (perfilEscolha == "jonas") {
            perfilImagem.setAttribute("src","assets/JonasPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Jonas");
        } else if (perfilEscolha == "personagem-secreto-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hTWJIKTQlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ hTWJIKTQ lQKQPTJQNQ"));
        } else if (perfilEscolha == "personagem-secreto-9-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIhEKNElEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI hEKNE"));
        } else if (perfilEscolha == "personagem-secreto-9-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIqFAXlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI qFAX"));
        } else if (perfilEscolha == "personagem-secreto-9-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/wQKKIhEKUEXVIlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI wQKKI hEKUEXVI"));
        } else if (perfilEscolha == "personagem-secreto-10-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQtFAUTlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uEWVQ-tFAUT"));
        } else if (perfilEscolha == "personagem-secreto-10-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQhTWJIKTQlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ uEWVQ-hTWJIKTQ"));
        } else if (perfilEscolha == "personagem-secreto-10-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uEWVQbEJIlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uEWVQ-bEJI"));
        } else if (perfilEscolha == "personagem-secreto-11") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/pALEKjEWIlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI pALEK jEWI"));
        } else if (perfilEscolha == "zadiel") {
            perfilImagem.setAttribute("src","assets/ZadielPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Zadiel");
        } else if (perfilEscolha == "artrodea") {
            perfilImagem.setAttribute("src","assets/ArtrodeaPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Artrodea");
        } else if (perfilEscolha == "shaka") {
            perfilImagem.setAttribute("src","assets/ShakaPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Shaka");
        } else if (perfilEscolha == "kyomi") {
            perfilImagem.setAttribute("src","assets/KyomiPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Kyomi");
        } else if (perfilEscolha == "lux") {
            perfilImagem.setAttribute("src","assets/LuxPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone da Lux");
        } else if (perfilEscolha == "mabel") {
            perfilImagem.setAttribute("src","assets/MabelPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Mabel");
        } else if (perfilEscolha == "yukkimi") {
            perfilImagem.setAttribute("src","assets/YukkimiPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone da Yukkimi");
        } else if (perfilEscolha == "anagi") {
            perfilImagem.setAttribute("src","assets/AnagiPerfilTormenta.png");
            perfilImagem.setAttribute("alt","Ícone do Anagi");
        } else if (perfilEscolha == "personagem-secreto-2-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHEPlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP qHEP"));
        } else if (perfilEscolha == "personagem-secreto-2-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJElEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE"));
        } else if (perfilEscolha == "personagem-secreto-2-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJElEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE"));
        } else if (perfilEscolha == "personagem-secreto-2-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEqNAXJIlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bTXVIJEkEPTPJEZJEqNAXJIlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI bTXVIJE kEPTPJEZJE qNAXJI"));
        } else if (perfilEscolha == "personagem-secreto-2-6") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/hEPLQPlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQP hEPLQP"));
        } else if (perfilEscolha == "personagem-secreto-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xIMTPIUEUlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xIMTPIUEU"));
        } else if (perfilEscolha == "personagem-secreto-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/nQJAKQlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NQ nQJAKQ"));
        } else if (perfilEscolha == "personagem-secreto-5") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/uTZTqKJKINEQlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI uTZT qKJKINEQ"));
        } else if (perfilEscolha == "personagem-secreto-6-1") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/qHQKEFQlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI qHQKEFQ"));
        } else if (perfilEscolha == "personagem-secreto-6-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/tZHECQlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI tZHECQ"));
        } else if (perfilEscolha == "personagem-secreto-6-3") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/xAGAKTQlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI xAGAKTQ"));
        } else if (perfilEscolha == "personagem-secreto-6-4") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/rAXQlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("WIZE NI rAXQ"));
        } else if (perfilEscolha == "personagem-secreto-7") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/bEZTGlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NI bEZTG"));
        } else if (perfilEscolha == "personagem-secreto-8-1" || perfilEscolha == "personagem-secreto-8-2") {
            perfilImagem.setAttribute("src",cdg("QPPEJP/jQUTEXlEKBTXjIKUEZJQ.LZR"));
            perfilImagem.setAttribute("alt",cdg("tWIZE NQ jQUTEX"));
        }
}

    if (perfilEscolha == "caleb") {
        ficha = cdg("☹✇∹☹∞∹☾∞∹☾∞∹✇∹☾∞∹☾∞∹☾∞∹☾∞∹✇∹☾∞∹♫☾∹☾∞∹✇∹✇∹✇∹✇∹✇∹✇∹☾∞∹☹∞∹☹∞∹☹∞∹∞∹∞∹∞∹☾∞").split(",");
        vantagens = cdg("✇∹♫∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹♫∹✇∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "kasyade") {
        ficha = cdg("✇η∹☹✇∹☹✇∹☭∞∹★∞∹☭η∹☭η∹☭η∹☾∞∹☀✇∹∞∹☭∞∹★✇∹∞∹∞∹∞∹☭∞∹★∞∹☀∞∹☭η∹☹✇∹☭☠∹☹✇∹∞∹∞∹∞∹☭η").split(",");
        vantagens = cdg("♫∹♫∹✇∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹♫∹∞∹✇∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "rascal") {
        ficha = cdg("☾☾∹☹✇∹☹✇∹☾☠∹★☾∹★✇∹★∞∹☭∞∹★☾∹★∞∹☾☾∹☾∞∹☭∞∹♫∹✇∞∹♫∹★∞∹☀∞∹☀☾∹☀∞∹☹✇∹☹∞∹☹✇∹∞∹∞∹∞∹☭☾").split(",");
        vantagens = cdg("♫∹✇∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹♫∹✇∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "jonasvictor") {
        ficha = cdg("♫∞∹☀∞∹☾∞∹☭∞∹☭★∹☀☾∹☾☾∹☾∞∹☾∞∹☾∞∹☭★∹☭★∹☾★∹☀☾∹★☠∹♫∞∹☾∞∹☀☾∹♫∞∹♫∞∹♫∞∹♫☾∹★∞∹∞∹∞∹∞∹☭★").split(",");
        vantagens = cdg("∞∹♫∹♫∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "udryk") {
        ficha = cdg("☾★∹☭★∹♫∹☭★∹♫∞∹✇∞∹✇∹♫☾∹☭★∹☾∞∹☭★∹☭★∹☾☾∹✇∹♫☾∹✇η∹☭∞∹☭∞∹♫∹★♫∹★η∹☭★∹☭★∹∞∹∞∹∞∹★∞").split(",");
        vantagens = cdg("♫∹✇∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } if (perfilEscolha == "kael") {
        ficha = cdg("★∞∹☾∞∹✇☾∹♫☾∹♫∞∹✇∞∹☀☾∹☀☾∹☾∞∹★☾∹☀☾∹☭∞∹★∞∹♫∞∹✇∞∹☾☾∹✇☾∹✇☾∹✇☾∹✇∞∹★∞∹♫∞∹☾☾∹∞∹∞∹∞∹☾☾").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "placenta") {
        ficha = cdg("☭∞∹☭∞∹☭∞∹☭★∹☭∞∹∞∹∞∹∞∹★☾∹∞∹☭★∹∞∹☾∞∹∞∹★☹∹∞∹☀∞∹∞∹☭★∹☭★∹☭★∹☭★∹☭★∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "benjamim") {
        ficha = cdg("☭∞∹☭∞∹☭∞∹☭∞∹☭∞∹∞∹∞∹∞∹★☾∹∞∹☭∞∹∞∹☾∞∹∞∹∞∹∞∹☀∞∹∞∹★☾∹✇∞∹☭∞∹☭∞∹☾∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "izumi") {
        if (harmonia == false) {
            entidade = false;
            ficha = cdg("☹☀∹☾☭∹☭η∹☭η∹☭☠∹☭☾∹☾∞∹☭∞∹☾☾∹☾∞∹☾∞∹★∞∹☾∞∹☭∞∹☾∞∹☹✇∹☾∞∹★∞∹☾☾∹☭∞∹☭☾∹☾∞∹☭∞∹∞∹∞∹∞∹☹☾").split(",");
        } else {
            entidade = true;
            ficha = cdg("♫∞☹☀∹♫∞☾☭∹☭η∹♫∞☭η∹♫∞☭☠∹♫∞☭☾∹♫∞☾∞∹♫∞☭∞∹♫∞☾☾∹♫∞☾∞∹♫∞☾∞∹♫∞★∞∹♫∞☾∞∹♫∞☭∞∹♫∞☾∞∹♫∞☹✇∹♫∞☾∞∹♫∞★∞∹♫∞☾☾∹♫∞☭∞∹♫∞☭☾∹♫∞☾∞∹♫∞☭∞∹♫∞∞∹♫∞∞∹♫∞∞∹♫∞☹☾").split(",");
        }
        vantagens = cdg("∞∹✇∹✇∹✇∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹∞∹∞∹∞∹∞∹♫∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹✇").split(",");
    } else if (perfilEscolha == "victoria") {
        ficha = cdg("★∞∹☾∞∹☭∞∹☾☾∹∞∹★☾∹☾∞∹☾∞∹☾∞∹☀☾∹☾☾∹∞∹☭∞∹∞∹∞∹∞∹☾∞∹★∞∹∞∹∞∹☾∞∹☾∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "vladimir") {
        ficha = cdg("☭∞∹☭η∹☭η∹☭∞∹☭∞∹☭η∹☾☾∹☭∞∹∞∹∞∹☭∞∹★∞∹∞∹∞∹∞∹∞∹☭∞∹☀∞∹☭η∹☭η∹☾∞∹☭η∹☭∞∹∞∹∞∹∞∹☾★").split(",");
        vantagens = cdg("∞∹✇∹✇∹♫∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹♫∹∞∹∞∹∞∹♫").split(",");
        entidade = false;
    } else if (perfilEscolha == "rodrigo") {
        ficha = cdg("♫☠∞∹-☭∞∹♫☠∞∹η∞∹∞∹∞∹∞∹∞∹η∞∹η∞∹η∞∹-♫♫∞∹-☭∞∹∞∹♫∞∹♫☹∞∹★∞∹★∞∹☀∞∹✇∞∹η∞∹η∞∹-☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("♫∹∞∹♫∹✇∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "planetafetal") {
        if (harmonia == false) {
            entidade = false;
            ficha = cdg("☹∞∹☾∹☹∞∹☠★∹☹∞∹☹∞∹☾∞∹∞∹✇∞∹☾∹☾∞∹-♫∞∹♫☾∹☾∹☾∞∹♫☾∹☀∞∹☀∞∹☹∞∹☹∞∹☹∞∹☠★∹♫☾∹∞∹∞∹∞∹∞").split(",");
        } else {
            entidade = true;
            ficha = cdg("♫∞☹∞∹♫∞☾∹♫∞☹∞∹♫∞☠★∹♫∞☹∞∹♫∞☹∞∹♫∞☾∞∹♫∞∞∹♫∞✇∞∹♫∞☾∹♫∞☾∞∹-♫∞♫∞∹♫∞♫☾∹♫∞☾∹♫∞☾∞∹♫∞♫☾∹♫∞☀∞∹♫∞☀∞∹♫∞☹∞∹♫∞☹∞∹♫∞☹∞∹♫∞☠★∹♫∞♫☾∹♫∞∞∹♫∞∞∹♫∞∞∹♫∞∞").split(",");
        }
        vantagens = cdg("✇∹∞∹∞∹☀∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹★∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "teco") {
        if (harmonia == false) {
            entidade = false;
            ficha = cdg("η☭∹☠∞∹☠∞∹η☭∹η☭∹☭✇∹♫∞∹∞∹☭☭∹☾∞∹★∞∹η✇∹♫∞∹∞∹★∞∹★∞∹∞∹☾∹♫∞∞∹♫∞∞∹♫☾∹η☭∹η☭∹∞∹∞∹∞∹☀☭").split(",");
        } else {
            entidade = true;
            ficha = cdg("♫∞η☭∹♫∞☠∞∹♫∞☠∞∹♫∞η☭∹♫∞η☭∹♫∞☭✇∹♫∞♫∞∹♫∞∞∹♫∞☭☭∹♫∞☾∞∹♫∞★∞∹♫∞η✇∹♫∞♫∞∹♫∞∞∹♫∞★∞∹♫∞★∞∹♫∞∞∹♫∞☾∹♫∞∞∹♫∞∞∹♫∞♫☾∹♫∞η☭∹♫∞η☭∹♫∞∞∹♫∞∞∹♫∞∞∹♫∞☀☭").split(",");
        }
        vantagens = cdg("∞∹☀∹✇∹♫∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹★∹☀∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "laicapse") {
        if (harmonia == false) {
            entidade = false;
            ficha = cdg("☭☾∹☾∞∹η★∹☾♫∹☭∞∹☭η∹✇∞∹☭✇∹☾∞∹☾∞∹♫∞∹☭∞∹☀♫∹☀∞∹☹∞∹☀∞∹☀☀∹✇η∹η∞∹η★∹☹✇∹☹✇∹☹∞∹∞∹∞∹∞∹★∞").split(",");
        } else {
            entidade = true;
            ficha = cdg("♫∞☭☾∹♫∞☾∞∹♫∞η★∹♫∞☾♫∹♫∞☭∞∹♫∞☭η∹♫∞✇∞∹♫∞☭✇∹♫∞☾∞∹♫∞☾∞∹♫∞♫∞∹♫∞☭∞∹♫∞☀♫∹♫∞☀∞∹♫∞☹∞∹♫∞☀∞∹♫∞☀☀∹♫∞✇η∹♫∞η∞∹♫∞η★∹♫∞☹✇∹♫∞☹✇∹♫∞☹∞∹♫∞∞∹♫∞∞∹♫∞∞∹♫∞★∞").split(",");
        }
        vantagens = cdg("♫∹♫∹★∹♫∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹♫∹★∹♫∹✇∹✇∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "lincoln") {
        ficha = cdg("☾∹✇∞∹☀∞∹☹✇∹☹☭∹☭★∹∞∹∞∹★☾∹♫∞∹☭☀∹★∞∹∞∹∞∹☾∞∹∞∹☾∞∹☾∞∹η∞∹☾☠∹☀∞∹✇☾∹☀∞∹∞∹∞∹∞∹☭∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "jonas") {
        if (harmonia == false) {
            entidade = false;
            ficha = cdg("☹☭∹☹☭∹☹☭∹☹☭∹☹✇∹☹✇∹∞∹☾∞∹∞∹∞∹☾∞∹☹✇∹☾∞∹∞∹∞∹☾∞∹☹✇∹☹✇∹∞∹☾∞∹☹✇∹☾∞∹☹✇∹∞∹∞∹∞∹☹✇").split(",");
        } else {
            entidade = true
            ficha = cdg("♫∞☹☭∹♫∞☹☭∹♫∞☹☭∹♫∞☹☭∹♫∞☹✇∹♫∞☹✇∹♫∞∞∹♫∞☾∞∹♫∞∞∹♫∞∞∹♫∞☾∞∹♫∞☹✇∹♫∞☾∞∹♫∞∞∹♫∞∞∹♫∞☾∞∹♫∞☹✇∹♫∞☹✇∹♫∞∞∹♫∞☾∞∹♫∞☹✇∹♫∞☾∞∹♫∞☹✇∹♫∞∞∹♫∞∞∹♫∞∞∹♫∞☹✇").split(",");
        }
        vantagens = cdg("∞∹✇∹♫∹☀∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹☀∹☀∹∞∹∞∹♫∹∞∹♫∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-1") {
        if (harmonia == false) {
            entidade = false;
            ficha = cdg("ηη∹ηη∹ηη∹η∞∹☾☠∹η∞∹η∞∹η∞∹η∞∹☾∞∹η∞∹♫η∹η∞∹∞∹∞∹∞∹ηη∹ηη∹★☾∹η∞∹ηη∹η∞∹η∞∹∞∹∞∹∞∹η∞").split(",");
        } else {
            entidade = true;
            ficha = cdg("♫∞ηη∹♫∞ηη∹♫∞ηη∹♫∞η∞∹♫∞☾☠∹♫∞η∞∹♫∞η∞∹♫∞η∞∹♫∞η∞∹♫∞☾∞∹♫∞η∞∹♫∞♫η∹♫∞η∞∹♫∞∞∹♫∞∞∹♫∞∞∹♫∞ηη∹♫∞ηη∹♫∞★☾∹♫∞η∞∹♫∞ηη∹♫∞η∞∹♫∞η∞∹♫∞∞∹♫∞∞∹♫∞∞∹♫∞η∞").split(",");
        }
        vantagens = cdg("✇∹✇∹✇∹∞∹♫∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹♫∹∞∹∞∹♫∹☀∹∞∹☾∹∞∹∞∹∞∹✇").split(",");
    } else if (perfilEscolha == "personagem-secreto-9-1") {
        ficha = cdg("☭∞∹☠∞∹☭∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-9-2") {
        ficha = cdg("☭∞∹☭∞∹☠∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-9-3") {
        ficha = cdg("☠∞∹☭∞∹☭∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-10-1") {
        ficha = cdg("η∞∹✇∞∹☠∞∹☭η∹♫∞∹☭☾∹☾∞∹☭∞∹☾☾∹☾∞∹☾∞∹∞∹∞∹☭∞∹☾∞∹★∞∹☾∞∹★∞∹☾☾∹☠∞∹♫∞∞∹☠∞∹η∞∹∞∹∞∹∞∹☹☾").split(",");
        vantagens = cdg("∞∹✇∹∞∹✇∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-10-2") {
        ficha = cdg("☹∞∹☭∞∹☹∞∹η∞∹∞∹η∞∹η∞∹η∞∹η∞∹☾∞∹η∞∹∞∹η∞∹∞∹∞∹∞∹η∞∹η∞∹☾∹η∞∹η∞∹η∞∹η∞∹∞∹∞∹∞∹η∞").split(",");
        vantagens = cdg("✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-10-3") {
        ficha = cdg("♫∞∞∹∞∹∞∹☠★∹♫∞∞∹☹∞∹☾∞∹∞∹✇∞∹☾∹☾∞∹☾∞∹☾∞∹☾∹☾∞∹♫∞∞∹☀∞∹☀∞∹☹∞∹∞∹♫∞∞∹∞∹♫∞∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹☀∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-11") {
        ficha = cdg("♫∞☭∹♫♫∞∹♫♫∞∹☠★∹☠★∹☭η∹♫∞∹∞∹☹∞∹☾∞∹★∞∹η✇∹♫∞∹∞∹★∞∹★∞∹∞∹☾∹♫∞∞∹♫∞∞∹☾∞∹♫∞∞∹♫∞☭∹∞∹∞∹∞∹☀☭").split(",");
        vantagens = cdg("♫∹☀∹★∹♫∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹★∹♫∹☭∹☭∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-12-1") {
        if (harmonia == false) {
            entidade = false;
            ficha = cdg("☠∞∹η∞∹☠∞∹☠∞∹∞∹☠∞∹☠∞∹☠∞∹✇∞∹☀∞∹♫∞∹♫∞∹☭∞∹★∞∹★∞∹★∞∹✇∞∹☠∞∹☠∞∹☹∞∹∞∹∞∹∞∹∞").split(",");
        } else {
            entidade = true;
            ficha = cdg("♫∞☠∞∹♫∞η∞∹♫∞☠∞∹♫∞☠∞∹♫∞∞∹♫∞☠∞∹♫∞☠∞∹♫∞☠∞∹♫∞✇∞∹♫∞☀∞∹♫∞♫∞∹♫∞♫∞∹♫∞☭∞∹♫∞★∞∹♫∞★∞∹♫∞★∞∹♫∞✇∞∹♫∞☠∞∹♫∞☠∞∹♫∞☹∞∹♫∞∞∹♫∞∞∹♫∞∞∹♫∞∞").split(",");
        }
        vantagens = cdg("✇∹∞∹♫∹✇∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹✇∹♫∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "personagem-secreto-12-2") {
        if (harmonia == false) {
            entidade = false;
            ficha = cdg("☾∹☀☾∹☾∞∹☹✇∹☹☭∹☭★∹∞∹∞∹★☾∹♫∞∹☭☀∹★∞∹∞∹∞∹☾∞∹∞∹☾∞∹☾∞∹η∞∹☾☠∹☀∞∹☾∞∹☀∞∹∞∹∞∹∞∹☭∞").split(",");
        } else {
            entidade = true;
            ficha = cdg("♫∞☾∹♫∞☀☾∹♫∞☾∞∹♫∞☹✇∹♫∞☹☭∹♫∞☭★∹♫∞∞∹♫∞∞∹♫∞★☾∹♫∞♫∞∹♫∞☭☀∹♫∞★∞∹♫∞∞∹♫∞∞∹♫∞☾∞∹♫∞∞∹♫∞☾∞∹♫∞☾∞∹♫∞η∞∹♫∞☾☠∹♫∞☀∞∹♫∞☾∞∹♫∞☀∞∹♫∞∞∹♫∞∞∹♫∞∞∹♫∞☭∞").split(",");
        }
        vantagens = cdg("∞∹∞∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
    } else if (perfilEscolha == "zadiel") {
        ficha = cdg("η✇∹η✇∹η✇∹η✇∹η✇∹η✇∹☾∞∹☭∞∹☾∞∹★∞∹∞∹✇☾∹★☾∹☾∞∹♫∞∹♫☾∹☹η∹☭∞∹η✇∹η✇∹η✇∹η✇∹η✇∹∞∹☀♫∹∞∹η✇").split(",");
        vantagens = cdg("☀∹∞∹∞∹☀∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹★∹★∹∞∹♫∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "artrodea") {
        ficha = cdg("η☭∹η☭∹η∞∹η☭∹η☭∹☾☾∹☀∞∹☀♫∹★∞∹☭∞∹♫∞∹η☭∹☾∞∹☾∞∹η☭∹η∞∹✇☾∹✇☾∹★∞∹☹∞∹η☭∹☾∞∹η☭∹∞∹∞∹∞∹η☭").split(",");
        vantagens = cdg("✇∹∞∹∞∹♫∹☀∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹♫∹♫∹∞∹∞∹♫∹∞∹★∹∞∹✇∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "shaka") {
        ficha = cdg("☹∞∹☹∞∹☹∞∹☹∞∹♫∞∹☹∞∹☹∞∹☹∞∹☹∞∹♫∞∹♫∞∹♫∞∹☹∞∹♫∞∹♫∞∹♫∞∹✇η∹✇η∹☹∞∹☹∞∹☹∞∹☹∞∹☹∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹✇∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "kyomi") {
        ficha = cdg("η☀∹☭☹∹☹☠∹☭♫∹☭♫∹☹☾∹☹☾∹☾∞∹☹☭∹☹∞∹♫∞∹☾∹✇∞∹☾∞∹☹☾∹η∞∹☀☾∹✇∞∹☹∞∹☠✇∹η☾∹☀∞∹☹∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("♫∹✇∹✇∹✇∹♫∹☀∹∞∹∞∹☀∹☀∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹✇∹☀∹∞∹♫∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "lux") {
        ficha = cdg("☹η∹☹η∹☹η∹☹η∹☹η∹☹η∹∞∹∞∹☹η∹☹η∹∞∹✇☭∹∞∹☹η∹☹η∹∞∹☹η∹☹η∹☹η∹☹η∹☹η∹☹η∹☹η∹∞∹∞∹∞∹☹η").split(",");
        vantagens = cdg("✇∹✇∹✇∹∞∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∞∹∞∹♫∹∞∹♫∹♫∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "mabel") {
        ficha = cdg("☭∞∹☾∞∹☾∞∹★∞∹✇∞∹★∞∹☾☾∹☀∞∹★∞∹☾∞∹✇☾∹✇∞∹★η∹♫☾∹☀∞∹☭η∹☭∞∹☾∞∹☭☭∹★☾∹☭η∹☭∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹♫∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹✇∹∞∹♫∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "yukkimi") {
        ficha = cdg("☹η∹☹η∹☹η∹☹η∹☹η∹☾∞∹☾∞∹☾∞∹★∞∹☾☾∹♫∹★∞∹☹∞∹♫∹☾∞∹★∞∹♫∹♫∹☹η∹☹η∹♫∞∹☹☾∹☹∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹♫∹∞∹✇∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹✇∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "anagi") {
        ficha = cdg("☭η∹☭η∹☭η∹☭η∹☭η∹☭η∹☀∞∹☀∞∹☭η∹☾∞∹∞∹☭∞∹☭∞∹∞∹∞∹∞∹∞∹★✇∹☭η∹☭η∹☭η∹☀∞∹☭η∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("♫∹✇∹♫∹✇∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹∞∹∞∹♫∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-2-1") {
        ficha = cdg("☭∞∹☭∞∹☭∞∹☀∞∹☭∞∹★∞∹★∞∹☭∞∹☀∞∹✇∞∹∞∹∞∹∞∹☾∹∞∹♫∞∹♫∞∹♫∞∹∞∹★∞∹☭∞∹✇∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-2-2") {
        ficha = cdg("★∞∹★∞∹★∞∹♫∞∹★∞∹♫∞∹✇∞∹☀∞∹♫∞∹♫∞∹∞∹★∞∹☀∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∞∹☀∞∹☾∹★∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-2-3") {
        ficha = cdg("☭∞∹☭∞∹☭∞∹✇∞∹★∞∹★∞∹☀∞∹☾∞∹☀∞∹★∞∹∞∹★∞∹★∞∹∞∹∞∹✇∞∹♫∞∹♫∞∹∞∹★∞∹☭∞∹♫∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-2-4") {
        ficha = cdg("☭∞∹☀∞∹☭∞∹☀∞∹☭∞∹☀∞∹☀∞∹★∞∹☀∞∹★∞∹∞∹✇∞∹★∞∹∞∹∞∹★∞∹♫∞∹♫∞∹∞∹★∞∹☾∞∹♫∞∹☾∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-2-5") {
        ficha = cdg("☹✇∹☭∞∹☹✇∹☾∞∹☹✇∹☭∞∹☾∞∹☾∞∹☾∞∹☭∞∹∞∹✇∞∹☾∞∹∞∹∞∹☭∞∹★∞∹★∞∹∞∹☭∞∹☹✇∹☀∞∹☹✇∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-2-6") {
        ficha = cdg("∞∹☭∞∹∞∹∞∹∞∹∞∹∞∹∞∹☾∞∹✇∞∹∞∹☭∞∹∞∹∞∹∞∹☭∞∹∞∹∞∹∞∹∞∹∞∹∞∹☭∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-3") {
        ficha = cdg("η☾∹η☾∹η☾∹★∞∹✇∞∹★∞∹☾☾∹☹∞∹ηη∹☹∞∹✇☾∹☾∹η∞∹♫☾∹☀∞∹ηη∹☭∞∹☾∞∹☭☭∹☭☾∹ηη∹☭∞∹ηη∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-4") {
        ficha = cdg("η∞∹η∞∹η∞∹☾∞∹∞∹η∞∹∞∹∞∹✇∞∹♫∞∹∞∹∞∹∞∹∞∹∞∹★∞∹☭∞∹☀∞∹η∞∹η∞∹η∞∹∞∹☹∞∹∞∹∞∹∞∹☭∞").split(",");
        vantagens = cdg("♫∹✇∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-5") {
        ficha = cdg("♫∞∹η☭∹♫∞∹η☭∹η☭∹☾☾∹☀∞∹☀♫∹★∞∹☭∞∹♫∞∹η☭∹η☭∹✇∞∹η☭∹♫∹✇☾∹✇☾∹★∞∹☹∞∹η☭∹☾∞∹η☭∹∞∹∞∹∞∹η☭").split(",");
        vantagens = cdg("∞∹✇∹∞∹♫∹☀∹∞∹∞∹∞∹∞∹∞∹∞∹♫∹✇∹∞∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-6-1") {
        ficha = cdg("☹☾∹η☀∹☠☀∹☭∞∹☀☾∹ηη∹☹∞∹☹∞∹☭∞∹☀★∹☀∞∹✇∞∹☀☾∹♫☾∹☾∞∹☀∞∹✇☾∹♫☾∹ηη∹ηη∹ηη∹☭∞∹η☀∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹✇∹✇∹♫∹∞∹✇∹♫∹♫∹♫∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹✇∹✇∹♫∹✇∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-6-2") {
        ficha = cdg("☀☾∹☹∞∹★☾∹☹∞∹ηη∹★∞∹☾∞∹☀∞∹☹∞∹ηη∹★∞∹ηη∹☀∞∹★∞∹ηη∹ηη∹☀∞∹☀∞∹☭∞∹☹∞∹☀∞∹☾∞∹η∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹✇∹∞∹✇∹☀∹∞∹∞∹∞∹∞∹♫∹∞∹☀∹∞∹∞∹☾∹☀∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-6-3") {
        ficha = cdg("♫∞∹ηη∹ηη∹ηη∹✇☀∹☾∹☹∞∹ηη∹☭☾∹☭☭∹∞∹ηη∹☭☀∹∞∹ηη∹ηη∹♫☾∹♫☭∹☭☠∹☹∞∹☭☾∹☭☠∹ηη∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹✇∹☀∹✇∹∞∹☾∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹☀∹☀∹∞∹∞∹∞∹∞∹☀∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-6-4") {
        ficha = cdg("η∞∹☾∹η∞∹✇☾∹☾∞∹☭∹☹∞∹☹∞∹☀∞∹★∞∹☭∞∹-♫∞∹-♫∞∹☀∞∹✇∞∹☀✇∹✇☀∹✇✇∹☹∞∹☹∞∹☹∞∹☹∞∹-♫∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("✇∹∞∹✇∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-7") {
        ficha = cdg("♫∞✇∞∹♫∞✇∞∹♫∞★∞∹♫∞♫☾∹♫∞∞☀∹♫∞∞✇∹♫∞∞♫∹♫∞∞♫∹♫∞∞♫∹♫∞∞♫∹♫∞∞∞∹♫∞∞♫∹♫∞∞♫∹♫∞∞♫∹♫∞∞♫∹♫∞∞♫∹♫∞∞♫∹♫∞∞♫∹♫∞☀☀∹♫∞♫☾∹♫∞✇∞∹♫∞∞♫∹♫∞✇∞∹∞∹∞∹∞∹∞").split(",");
        vantagens = cdg("∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞").split(",");
        entidade = true;
    } else if (perfilEscolha == "personagem-secreto-8-1") {
        ficha = cdg("η☾∹☹☠∹♫∞☀∹☾∞∹♫∞∹η∞∹η∞∹η∞∹η∞∹★∞∹∞∹☀☾∹☹☾∹✇∹✇∹☾∹η∞∹η∞∹η∞∹☠η∹☠η∹☭∞∹☠☀∹∞∹∞∹η☾∹☭∞").split(",");
        vantagens = cdg("✇∹✇∹☀∹∞∹∞∹☾∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹☾∹∞∹✇∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
    } else if (perfilEscolha == "personagem-secreto-8-2") {
        ficha = cdg("☀η∞∹-✇♫☭∹☀☠η∹☾∞∹♫∞∹η∞∹η∞∹η∞∹η∞∹★∞∹∞∹-✇☭∞∹-✇✇∞∹✇∹✇∹☀∞∞∹η∞∹η∞∹η∞∹☠η∹☠η∹☭∞∹-✇∞✇∹∞∹∞∹η☾∹☭∞").split(",");
        vantagens = cdg("✇∹✇∹☀∹∞∹∞∹☾∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹∞∹✇∹☾∹∞∹✇∹∞∹∞∹∞∹∞").split(",");
        entidade = false;
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
    let atributoSelector = document.getElementById("testeroll__atributo");
    let botao = document.getElementById("botao-rolar");
    let iconRoll = document.getElementById("funcao-rolar");
    let iconAtributo = document.getElementById("funcao-atributo");
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
            if (tema == "sinfonia-3") {
                iconRoll.setAttribute("src","assets/rolliconsinfonia3.png");
                iconAtributo.setAttribute("src","assets/atributoiconsinfonia3.png");
                iconMapa.setAttribute("src","assets/mapaiconsinfonia3.png");
                modo.setAttribute("class","invisivel");
                botao.setAttribute("src","assets/sinfonia3dice.png");
            } else if (tema == "cosmo") {
                iconRoll.setAttribute("src","assets/rolliconclaro.png");
                iconAtributo.setAttribute("src","assets/atributoiconclaro.png");
                iconMapa.setAttribute("src","assets/mapaiconclaro.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/lua.png");
                botao.setAttribute("src","assets/dicediurno.png");
            } else if (tema == "apocalipse") {
                iconRoll.setAttribute("src","assets/rollicon.png");
                iconAtributo.setAttribute("src","assets/atributoicon.png");
                iconMapa.setAttribute("src","assets/mapaicon.png");
                modo.setAttribute("class","invisivel");
                botao.setAttribute("src","assets/apocalipsedice.png");
            } else if (tema == "cataclismo") {
                iconRoll.setAttribute("src","assets/rolliconclarocataclismo.png");
                iconAtributo.setAttribute("src","assets/atributoiconclarocataclismo.png");
                iconMapa.setAttribute("src","assets/mapaiconclarocataclismo.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/luacataclismo.png");
                botao.setAttribute("src","assets/cataclismodiceclaro.png");
            } else if (tema == "aquarela") {
                iconRoll.setAttribute("src","assets/rolliconclaroaquarela.png");
                iconAtributo.setAttribute("src","assets/atributoiconclaroaquarela.png");
                iconMapa.setAttribute("src","assets/mapaiconclaroaquarela.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/luaaquarela.png");
                botao.setAttribute("src","assets/aquareladiceclaro.png");
            } else if (tema == "tormenta") {
                iconRoll.setAttribute("src","assets/rolliconclarotormenta.png");
                iconAtributo.setAttribute("src","assets/atributoiconclarotormenta.png");
                iconMapa.setAttribute("src","assets/mapaiconclarotormenta.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/luatormenta.png");
                botao.setAttribute("src","assets/tormentadiceclaro.png");
            } else if (tema == "secreto-1") {
                modo.setAttribute("class","invisivel");
                iconRoll.setAttribute("src","assets/rollicon.png");
                iconAtributo.setAttribute("src","assets/atributoicon.png");
                iconMapa.setAttribute("src","assets/mapaicon.png");
                botao.setAttribute("src","assets/dice.png");
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
            boxRoll.setAttribute("class","testeroll_n");
            atributoSelector.setAttribute("class","prc_atr_n");
            botao.setAttribute("class","botao-n");
            valoresIniciais1Logica.setAttribute("class","valoresiniciais-n");
            barrinhaLogica.setAttribute("class","valoresiniciais-n");
            valoresIniciais2Logica.setAttribute("class","valoresiniciais-n");
            resultadoInicialLogica.setAttribute("class","resultadoinicial-n");
            if (tema == "sinfonia-3") {
                iconRoll.setAttribute("src","assets/rolliconsinfonia3.png");
                iconAtributo.setAttribute("src","assets/atributoiconsinfonia3.png");
                iconMapa.setAttribute("src","assets/mapaiconsinfonia3.png");
                modo.setAttribute("class","invisivel");
                botao.setAttribute("src","assets/sinfonia3dice.png");
            } else if (tema == "cosmo") {
                iconRoll.setAttribute("src","assets/rollicon.png");
                iconAtributo.setAttribute("src","assets/atributoicon.png");
                iconMapa.setAttribute("src","assets/mapaicon.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/sol.png");
                botao.setAttribute("src","assets/dice.png");
            } else if (tema == "apocalipse") {
                iconRoll.setAttribute("src","assets/rollicon.png");
                iconAtributo.setAttribute("src","assets/atributoicon.png");
                iconMapa.setAttribute("src","assets/mapaicon.png");
                modo.setAttribute("class","invisivel");
                botao.setAttribute("src","assets/apocalipsedice.png");
            } else if (tema == "cataclismo") {
                iconRoll.setAttribute("src","assets/rolliconcataclismo.png");
                iconAtributo.setAttribute("src","assets/atributoiconcataclismo.png");
                iconMapa.setAttribute("src","assets/mapaiconcataclismo.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/solcataclismo.png");
                botao.setAttribute("src","assets/cataclismodicenoturno.png");
            } else if (tema == "aquarela") {
                iconRoll.setAttribute("src","assets/rolliconaquarela.png");
                iconAtributo.setAttribute("src","assets/atributoiconaquarela.png");
                iconMapa.setAttribute("src","assets/mapaiconaquarela.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/solaquarela.png");
                botao.setAttribute("src","assets/aquareladice.png");
            } else if (tema == "tormenta") {
                iconRoll.setAttribute("src","assets/rollicontormenta.png");
                iconAtributo.setAttribute("src","assets/atributoicontormenta.png");
                iconMapa.setAttribute("src","assets/mapaicontormenta.png");
                modo.setAttribute("class","");
                modo.setAttribute("src","assets/soltormenta.png");
                botao.setAttribute("src","assets/tormentadice.png");
            } else if (tema == "secreto-1") {
                modo.setAttribute("class","invisivel");
                iconRoll.setAttribute("src","assets/rollicon.png");
                iconAtributo.setAttribute("src","assets/atributoicon.png");
                iconMapa.setAttribute("src","assets/mapaicon.png");
                botao.setAttribute("src","assets/dice.png");
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

var resultObject = {
    Personagem: perfilEscolha,
    Perícia: periciaEscolhida.selectedOptions[0].textContent + ": " + pericia + "" + document.getElementById("vantagens__pericia").value + "-->" + periciaResultado,
    Atributo: atributoEscolhido.selectedOptions[0].textContent + ": " + atributo + "" + document.getElementById("vantagens__atributo").value + "-->" + atributoResultado,
    Resultado: resultadoFinal,
};

socket.emit('sendResult', resultObject);
}

function rolarDado() {
    return parseInt(Math.random() * 100 + 1);
}

function analisarResultadoInicial(pontos,resultado) {
    if (entidade == false) {
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
    } else {
        if (pontos - 1000 <= -100 + parseInt(resultado)) {
        console.log("eu sou o problema! :D");
        return "Extremo";
    } else if (pontos - 1000 < parseInt(resultado)) {
        if (resultado == 100) {
            if (pontos - 1000 < 100) {
                console.log("eu sou o problema! :O");
                return "Extremo";
        }
    } else {
        console.log("eu sou o problema! :(");
        return "Crítico";
    } 
    } else if (pontos - 1000 >= 99 + parseInt(resultado)) {
        console.log("eu sou o problema! >:D");
        return "Crítico Crítico";
    } else if (parseInt(resultado) == 1) {
        if (pontos - 1000 < 1) {
            console.log("eu sou o problema! D:");
            return "Crítico";
        } else {
           console.log("eu sou o problema! :/");
            return "Crítico Crítico";
        }
    } else if (pontos - 1000 > 100) {
        if (parseInt(resultado) <= pontos - 1000 - 80) {
            console.log("eu sou o problema! :0");
            return "Crítico Extremo";
        } else if (parseInt(resultado) <= pontos - 1000 - 50) {
            console.log("eu sou o problema! :S");
            return "Crítico Bom";
        } else {
            return "Crítico Normal";
        }
        } else if (parseInt(resultado) <= (pontos - 1000) / 5) {
            console.log("eu sou o problema! :0");
            return "Crítico Extremo";
        } else if (parseInt(resultado) <= (pontos - 1000) / 2) {
            console.log("eu sou o problema! :S");
            return "Crítico Bom";
        } else if (parseInt(resultado) <= pontos - 1000) {
            console.log("eu sou o problema! :P");
            return "Crítico Normal";
        }
    }
}
    

function analisarResultadoFinal(periciaResultado,atributoResultado) {
    if (periciaResultado == "Crítico Crítico") {
        //console.log("eu existo?");
        if (atributoResultado == "Crítico Crítico") {
            return "Hiper Crítico";
        } else {
            return "Super Crítico Crítico";
        }
    } else if (periciaResultado == "Crítico Extremo") {
        //console.log("eu existo?");
        if (atributoResultado == "Crítico Crítico") {
            return "Super Crítico Crítico";
        } else if (atributoResultado == "Crítico Extremo") {
            return "Super Crítico Crítico";
        } else {
            return "Super Crítico Extremo";
        }
    } else if (periciaResultado == "Crítico Bom") {
        //console.log("eu existo?");
        if (atributoResultado == "Crítico Crítico") {
            return "Super Crítico Crítico";
        } else if (atributoResultado == "Crítico Extremo") {
            return "Super Crítico Extremo";
        } else if (atributoResultado == "Crítico Bom") {
            return "Super Crítico Extremo";
        } else {
            return "Super Crítico Bom";
        }
    } else if (periciaResultado == "Crítico Normal") {
        //console.log("eu existo?");
        if (atributoResultado == "Crítico Crítico") {
            return "Super Crítico Crítico";
        } else if (atributoResultado == "Crítico Extremo") {
            return "Super Crítico Bom";
        } else if (atributoResultado == "Crítico Bom") {
            return "Super Crítico Bom";
        } else if (atributoResultado == "Crítico Normal") {
            return "Super Crítico Bom";
        } else {
            return "Super Crítico";
        }
    } else if (periciaResultado == "Crítico") {
        //console.log("eu existo?");
        if (atributoResultado == "Crítico Crítico") {
            return "Super Crítico Crítico";
        } else if (atributoResultado == "Crítico Extremo") {
            return "Super Crítico";
        } else if (atributoResultado == "Crítico Bom") {
            return "Super Crítico";
        } else if (atributoResultado == "Crítico Normal") {
            return "Super Crítico";
        } else if (atributoResultado == "Crítico") {
            return "Super Crítico";
        } else if (atributoResultado == "Desastre") {
            return "Normal";
        } else {
            return "Crítico";
        }
    } else if (periciaResultado == "Extremo") {
        if (atributoResultado == "Crítico" || atributoResultado == "Crítico Normal" || atributoResultado == "Crítico Bom" || atributoResultado == "Crítico Extremo" || atributoResultado == "Crítico Crítico") {
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
    if (resultadoFinal == "Hiper Crítico") {
        if (noturno == "true") {
        resultadoFinalLogica.setAttribute("class","hiper-critico-n resultadofinal-n");
        } else {
        resultadoFinalLogica.setAttribute("class","hiper-critico-c resultadofinal-c");
        } 
    } else if (resultadoFinal == "Super Crítico Crítico") {
        if (noturno == "true") {
        resultadoFinalLogica.setAttribute("class","super-critico-critico-n resultadofinal-n");
        } else {
        resultadoFinalLogica.setAttribute("class","super-critico-critico-c resultadofinal-c");
        }
    } else if (resultadoFinal == "Super Crítico" || resultadoFinal == "Super Crítico Bom" || resultadoFinal == "Super Crítico Extremo") {
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

                //personagem secreto 7
    if (codigo == cdg("lQLQRQTI NI VTUQXQTQ")) {
       document.getElementById("personagem-secreto-7").setAttribute("class","");
       document.getElementById("personagem-secreto-7").innerHTML = cdg("bEZTG");
       if (codigo7descoberto == false) {
        somCodigo(7);
        document.getElementById("codigo").value = "";
        codigo7descoberto = true;
       }
    }

                    //personagem secreto 8
    if (codigo == cdg("KEUTEX")) {
       document.getElementById("apocalipse-plus").setAttribute("class","");
       document.getElementById("personagem-secreto-8-1").setAttribute("class","");
       document.getElementById("personagem-secreto-8-2").setAttribute("class","");
       document.getElementById("personagem-secreto-8-1").innerHTML = cdg("jQUTEX");
       document.getElementById("personagem-secreto-8-2").innerHTML = cdg("jQUTEX jTJ•");
       if (codigo8descoberto == false) {
        somCodigo(8);
        document.getElementById("codigo").value = "";
        codigo8descoberto = true;
       }
    }

                    //personagem secreto 9
    if (codigo == cdg("JEWVMDJE")) {
       document.getElementById("cosmo-plus").setAttribute("class","");
       document.getElementById("personagem-secreto-9-1").setAttribute("class","");
       document.getElementById("personagem-secreto-9-2").setAttribute("class","");
       document.getElementById("personagem-secreto-9-3").setAttribute("class","");
       document.getElementById("personagem-secreto-9-1").innerHTML = cdg("wQKKI hEKNE");
       document.getElementById("personagem-secreto-9-2").innerHTML = cdg("wQKKI qFAX");
       document.getElementById("personagem-secreto-9-3").innerHTML = cdg("wQKKI hEKUEXVI");
       if (codigo9descoberto == false) {
        somCodigo(9);
        document.getElementById("codigo").value = "";
        codigo9descoberto = true;
       }
    }

                    //personagem secreto 10
    if (codigo == cdg("uewvq")) {
       document.getElementById("cosmo-plus").setAttribute("class","");
       document.getElementById("personagem-secreto-10-1").setAttribute("class","");
       document.getElementById("personagem-secreto-10-2").setAttribute("class","");
       document.getElementById("personagem-secreto-10-3").setAttribute("class","");
       document.getElementById("personagem-secreto-10-1").innerHTML = cdg("uEWVQ-tFAUT");
       document.getElementById("personagem-secreto-10-2").innerHTML = cdg("uEWVQ-hTWJIKTQ");
       document.getElementById("personagem-secreto-10-3").innerHTML = cdg("uEWVQ-bEJI");
       if (codigo10descoberto == false) {
        somCodigo(10);
        document.getElementById("codigo").value = "";
        codigo10descoberto = true;
       }
    }

                        //personagem secreto 11
    if (codigo == cdg("NTZIPPQAKIPHIQNIKEP")) {
       document.getElementById("cosmo-plus").setAttribute("class","");
       document.getElementById("personagem-secreto-11").setAttribute("class","");
       document.getElementById("personagem-secreto-11").innerHTML = cdg("pALEK jEWI");
       if (codigo11descoberto == false) {
        somCodigo(11);
        document.getElementById("codigo").value = "";
        codigo11descoberto = true;
       }
    }

                        //personagem secreto 12
    if (codigo == cdg("EJVEKMABB")) {
       document.getElementById("cosmo-plus").setAttribute("class","");
       document.getElementById("personagem-secreto-12-1").setAttribute("class","");
       document.getElementById("personagem-secreto-12-2").setAttribute("class","");
       document.getElementById("personagem-secreto-12-1").innerHTML = cdg("uEWVQ-kINKTRI");
       document.getElementById("personagem-secreto-12-2").innerHTML = cdg("xTZWIXZ mIZEWI");
       if (codigo12descoberto == false) {
        somCodigo(12);
        document.getElementById("codigo").value = "";
        codigo12descoberto = true;
       }
    }

    //tema secreto 1
    if (codigo == cdg("BETC•I")) {
       document.getElementById("tema-secreto-1").setAttribute("class",""); 
       document.getElementById("tema-secreto-1").innerHTML = cdg("cIZQP hTWJIK");
       if (codigo12descoberto == false) {
        somCodigo(13);
        document.getElementById("codigo").value = "";
        codigo12descoberto = true;
       }
    }

    //harmonia
    if (codigo == cdg("vqkuiztq")) {
        harmonia = true;
        atualizarPerfil();
        document.getElementById("fundo").setAttribute("class","harmonia");
       if (codigo14descoberto == false) {
        somCodigo(14);
        document.getElementById("codigo").value = "";
        codigo14descoberto = true;
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
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso7_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.8;
    }
    if (numero == 8) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso8_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.4;
    }
    if (numero == 9) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso9_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.4;
    }
    if (numero == 10) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso10_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.2;
    }
    if (numero == 11) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso11_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.3;
    }
    if (numero == 12) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/perso12_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.3;
    }
    if (numero == 13) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/tema1_unlocked.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.8;
    }
    if (numero == 14) {
    document.getElementById("codigo").innerHTML = document.getElementById("codigo").innerHTML + `<audio controls autoplay hidden src="assets/harmonia.mp3" id="advinhou-${numero}"></audio>`;
    audio = document.getElementById(`advinhou-${numero}`);
    audio.volume = 0.3;
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

var socket = io();