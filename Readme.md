# Barra AntiCorona
![image](https://escoladesaudepublica.github.io/barra-anti-corona/barra-anti-corona.png)

A **Barra AntiCorona** tem o objetivo de ser um meio fácil de atribuir a **qualquer site** um alerta que irá redirecionar à uma fonte de informação confiável  sobre o Coronavírus (Covid-19) de um orgão público de saúde, podendo ser específica para cada estado.

A barra contém um link que fará o direcionamento do usuário para a página de informação oficinal.
É possível alterar a cor do plano de fundo, para melhor condizer com seu site, e dizer qual estado você pretende redirecionar.

A barra será adicionada ao inicio do body do seu site, havendo a possibilidade de fechá-la se o usuário assim desejar.

O arquivo com as definições das URLs dos estados é o:  
[barra-anti-corona.js](https://github.com/EscolaDeSaudePublica/barra-anti-corona/blob/master/barra-anti-corona.js)

## Como utilizar?

Basta adicionar em qualquer espaço do html do seu site a seguinte linha e alterar a UF de acordo com seu estado, `se desejar utilizar a URL saude.gov.br inserir BR`:

```html
<script src="https://escoladesaudepublica.github.io/barra-anti-corona/barra-anti-corona.js" data-uf="UF"></script>
```

Se desejar alterar o plano de fundo da aplicação, adicione também o atributo `data-color` no script.

```html
<script src="https://escoladesaudepublica.github.io/barra-anti-corona/barra-anti-corona.js" data-uf="UF" data-color="#ff00ff"></script>
```

## Exemplo:
!['ScreenShot'](https://escoladesaudepublica.github.io/barra-anti-corona/screenshot.png)
