<h1 align="center"> Analisador de Testes RPG </h1>

Nesse site, o jogador poderá escolher seu personagem e o tema (baseado em campanhas passadas e na atual) e em seguinte realizar testes de perícias e atributos sem ter a necessidade de olhar a sua ficha de personagem ou rolar dados físicos.
O intuito é auxiliar e acelerar o processo de rolagem de dados e testes durante as campanhas de roleplay, para que não consumam muito tempo e não haja tanto esforço.

<h2 align="center"> Como funciona o sistema de testes no RPG? </h2>

O código escolherá dois valores entre 1 a 100 para ser o resultado da rolagem da Perícia e do Atributo. O valor escolhido será comparado com a quantidade de pontos na Perícia e Atributo escolhidos para determinar o resultado real de cada um dos valores:

Caso o valor escolhido seja 1, o resultado será Crítico.
Caso o valor seja igual ou menor que 1/5 da quantidade de pontos, o resultado será Extremo.
Caso o valor seja igual ou menor que 1/2 da quantidade de pontos, o resultado será Bom.
Caso o valor seja igual ou menor que a quantidade de pontos, o resultado será Normal.
Caso o valor seja maior que a quantidade de pontos, o resultado será Falha.
Caso o valor escolhido seja 100, o resultado será Desastre.

Tendo descoberto o resultado real tanto da rolagem da Perícia e do Atributo, o código irá comparar os dois resultados e gerar o resultado final. A comparação é feita analisando se o resultado real do Atributo é melhor ou pior que a da Perícia.

Caso o resultado na Perícia seja pior que o do Atributo, o resultado final será o resultado da perícia uma posição acima. Ou seja, caso o resultado da Perícia seja Normal e o Atributo seja melhor, o resultado final será Bom.
Existem muitas outras exceções no sistema de rolagens. Para saber mais sobre, é possível ler sobre no [Documento do Sistema](https://docs.google.com/document/d/1anr24vyAd1Es7cK5H3Xwdw0ck8d7iCuFS5cBHY1k8V8/edit?usp=sharing) na seção "ROLAGEM".
