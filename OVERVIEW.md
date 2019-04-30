# Visão geral

![sdk simple workflow](assets/img/panamah-sdk-simple-flow.png)

Para consumir o serviço do Panamah é necessário que o desenvolvedor siga os
seguintes passos:

- importar a biblioteca específica da linguagem de sua aplicação
  - [delphi](https://github.com/casamagalhaes/panamah-sdk-delphi)
  - [java](https://github.com/casamagalhaes/panamah-sdk-java)
  - [javascript](https://github.com/casamagalhaes/panamah-sdk-javascript)
  - [python](https://github.com/casamagalhaes/panamah-sdk-python)
- chamar, no bootstrap da aplicação, a função **init()** da sdk
- fazer o envio dos dados observando os
  [modelos do esquema de dados](https://github.com/casamagalhaes/panamah-sdk-java/tree/master/src/main/java/br/com/casamagalhaes/panamah/sdk)
  e usando a função **send()**
- caso precise chamar o envio do lote imediatamente, usar a função **flush()**
- para acompanhar a montagem e o envio dos lotes, usar a função **progress()**

## Diagrama detalhado

![sdk simple workflow](assets/img/panamah-sdk.png)

Para os usuários da sdk todo o processo é transparente, estando visível apenas
as funções básicas já apresentadas.