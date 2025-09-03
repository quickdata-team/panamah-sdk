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

### 2.3 - Envio de dados pendentes

É possível consultar e enviar **dados pendentes** que ainda não foram processados com sucesso pela API Panamah.
Atualmente, essa funcionalidade está disponível apenas para **produtos**.

Como o envio dos modelos de dados é independente e ocorre de forma assíncrona, pode acontecer de os dados de venda ficarem incompletos, justamente porque os produtos correspondentes ainda não foram processados.

A função de envio de dados pendentes é importante justamente para atenuar esses problemas e garantir que as informações de venda fiquem o mais completas possível.
Por isso, é necessário acionar esse recurso periodicamente.

Os dados pendentes podem ser consultados:

* **Via SDKs** (Delphi, Java e JavaScript)
* **Via Panamah [API core](https://core-docs.panamah.io/#operation/getPendingResources)**

A resposta sempre retorna uma lista de pendências organizadas por **assinante** e **tipo de recurso** (ex.: `PRODUTO`).
Cada item contém:

* `assinanteId` → Identificador do assinante que possui pendências
* `models` ou `ids` → Lista de modelos ou identificadores dos recursos pendentes (normalmente produtos ainda não sincronizados)

Esses objetos podem ser usados para:

* Conferir quais registros ainda não foram enviados
* Reprocessar/envia-los novamente
* Monitorar consistência dos dados entre sua base e a Panamah

---

#### 2.3.1 - Delphi

1. Obtenha a instância do stream:

   ```pascal
   var Stream := TPanamahStream.GetInstance;
   ```

2. Configure um callback de erro, se desejar:

   ```pascal
   Stream.OnError := procedure(E: Exception)
   begin
     Writeln('Erro: ' + E.Message);
   end;
   ```

3. Inicialize o SDK:

   ```pascal
   Stream.Init(authorizationToken, secret, assinanteId);
   ```

4. Busque as pendências:

   ```pascal
   var Pending := Stream.GetPendingResources;
   ```

5. Itere sobre os resultados:

   ```pascal
   for I := 0 to Pending.Count - 1 do
   begin
     var Group := Pending.PendingResources[I];
     for J := 0 to Group.Count - 1 do
     begin
       var Model := Group[J];
       Writeln(Model.SerializeToJSON); // inspeciona o id ou todo o JSON do produto pendente
     end;
   end;
   ```

---

#### 2.3.2 - Java

1. Configure e autentique:

   ```java
   PanamahConfig config = PanamahConfig.fromEnv("staging");
   PanamahUtil.auth(config);
   ```

2. Obtenha pendências (paginado):

   ```java
   Map<String, PanamahPendencias> pendencias = PanamahUtil.pending(config, 0, 100);
   ```

3. Percorra os assinantes e tipos:

   ```java
   for (Map.Entry<String, PanamahPendencias> entry : pendencias.entrySet()) {
       String assinanteId = entry.getKey();
       PanamahPendencias lista = entry.getValue();
       
       System.out.println("Assinante: " + assinanteId);
       for (String idProduto : lista.getProdutos()) {
           System.out.println("Produto pendente: " + idProduto);
           // aqui você pode reenviar esse produto para o stream
       }
   }
   ```

> ⚠️ Caso a autenticação expire, o SDK automaticamente renova o token e repete a requisição.

---

#### 2.3.3 - JavaScript

1. Inicialize o stream (single-tenant ou multi-tenant):

   ```javascript
   await PanamahStream.init({
     authorizationToken,
     secret,
     assinanteId // ou omita em multi-tenant
   });
   ```

2. Busque pendências:

   ```javascript
   const pendencias = await PanamahStream.getPendingResources();
   ```

3. Itere e processe os modelos:

   ```javascript
   pendencias.forEach(p => {
     console.log("Assinante:", p.assinanteId);
     p.models.forEach(model => {
       console.log("Produto pendente:", model.id);
       // Exemplo: reenviar manualmente ou logar para auditoria
     });
   });
   ```

4. Finalize garantindo envio/limpeza de buffer:

   ```javascript
   await PanamahStream.flush();
   ```

## 3 - Portal do parceiro

### 3.1 - Acesso ao portal

- Ao solicitar acesso ao nosso portal, você receberá um usuário e uma senha e poderá ter acesso a algumas telas, em especial à tela "Subida de dados". Além das informações cadastrais, essa tela exibe a "Quantidade de vendas" no período especificado, bem como o "Último recebimento". É importante verificar se um ou mais assinantes estão enviando dados por meio do portal.

> Em relação à periodicidade da análise de recebimento, ela é sempre feita no dia anterior (D-1). Isso significa que analisaremos todos os dados recebidos no dia anterior. Estamos estudando práticas para diminuir essa periodicidade e tornar o processo o mais próximo possível do tempo real.