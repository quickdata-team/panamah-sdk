# Boas práticas

A seguir, apresentamos um conjunto de práticas recomendadas pela QuickData. Segui-las garantirá uma melhor qualidade dos dados e, consequentemente, dos serviços prestados pela QuickData.

## 1 - Cadastro

### 1.1 - Assinante

- O ID do assinante (assinanteId/subscriberId) deve corresponder ao CNPJ da matriz de uma cadeia de lojas.
- Os campos "nome" e "fantasia" referem-se, respectivamente, à razão social e ao nome fantasia do assinante.

### 1.2 - Lojas

- A relação entre assinante e lojas é de 1 para N, ou seja, um único assinante deve conter todas as lojas.
- O campo "numeroDocumento" e o ID da loja (lojaId) devem corresponder ao CNPJ da loja.
- É importante preencher o campo "qtdCheckouts" com o valor correto, pois isso será necessário para comparações entre lojas de mesmo porte.

### 1.3 - Produtos

- Conforme mencionado anteriormente na Visão Geral, um produto deve conter apenas um único código de barras EAN.
- A descrição do produto deve ser o mais precisa possível, evitando descrições genéricas como "REFRI. COLA".

## 2 - Envio de dados (Stream)

### 2.1 - Duplicação de dados

- É importante que o parceiro evite enviar os mesmos dados, sejam vendas ou dados cadastrais, várias vezes, sem nenhuma alteração.

### 2.2 - Cadastro e processamento

- Após o envio dos dados, leva-se aproximadamente de 15 a 20 minutos para que sejam processados.

## 3 - Portal do parceiro

### 3.1 - Acesso ao portal

- Ao solicitar acesso ao nosso portal, você receberá um usuário e uma senha e poderá ter acesso a algumas telas, em especial à tela "Subida de dados". Além das informações cadastrais, essa tela exibe a "Quantidade de vendas" no período especificado, bem como o "Último recebimento". É importante verificar se um ou mais assinantes estão enviando dados por meio do portal.

> Em relação à periodicidade da análise de recebimento, ela é sempre feita no dia anterior (D-1). Isso significa que analisaremos todos os dados recebidos no dia anterior. Estamos estudando práticas para diminuir essa periodicidade e tornar o processo o mais próximo possível do tempo real.