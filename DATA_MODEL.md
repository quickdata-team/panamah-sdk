# Modelo de dados

## ASSINANTE

| Campo     | Tipo         | Obrigatório        | Observações |
|-----------|--------------|--------------------|-------------|
| id        | string       | :heavy_check_mark: |             |
| nome      | string       | :heavy_check_mark: |             |
| fantasia  | string       | :heavy_check_mark: |             |
| ramo      | string       | :heavy_check_mark: |             |
| uf        | string       | :heavy_check_mark: |             |
| cidade    | string       | :heavy_check_mark: |             |
| revendaId | string       |                    |             |
| bairro    | string       | :heavy_check_mark: |             |
| series    | list[string] |                    |             |
| ativo     | boolean      | :heavy_check_mark: |             |
| cnpj      | string       |                    |             |

## REVENDA

| Campo    | Tipo   | Obrigatório        | Observações |
|----------|--------|--------------------|-------------|
| id       | string | :heavy_check_mark: |             |
| nome     | string | :heavy_check_mark: |             |
| fantasia | string | :heavy_check_mark: |             |
| ramo     | string | :heavy_check_mark: |             |
| uf       | string | :heavy_check_mark: |             |
| cidade   | string | :heavy_check_mark: |             |
| bairro   | string | :heavy_check_mark: |             |


## SECAO

| Campo     | Tipo   | Obrigatório        | Observações |
|-----------|--------|--------------------|-------------|
| id        | string | :heavy_check_mark: |             |
| codigo    | string | :heavy_check_mark: |             |
| descricao | string | :heavy_check_mark: |             |

## GRUPO

| Campo     | Tipo   | Obrigatório        | Observações |
|-----------|--------|--------------------|-------------|
| id        | string | :heavy_check_mark: |             |
| codigo    | string | :heavy_check_mark: |             |
| descricao | string | :heavy_check_mark: |             |
| secaoId   | string | :heavy_check_mark: |             |

## SUBGRUPO

| Campo     | Tipo   | Obrigatório        | Observações |
|-----------|--------|--------------------|-------------|
| id        | string | :heavy_check_mark: |             |
| codigo    | string | :heavy_check_mark: |             |
| descricao | string | :heavy_check_mark: |             |
| secaoId   | string | :heavy_check_mark: |             |
| grupoId   | string | :heavy_check_mark: |             |

## HOLDING

| Campo     | Tipo   | Obrigatório        | Observações |
|-----------|--------|--------------------|-------------|
| id        | string | :heavy_check_mark: |             |
| descricao | string | :heavy_check_mark: |             |

## LOJA

| Campo           | Tipo    | Obrigatório        | Observações  |
|-----------------|---------|--------------------|--------------|
| ativa           | boolean | :heavy_check_mark: |              |
| id              | string  | :heavy_check_mark: |              |
| descricao       | string  | :heavy_check_mark: |              |
| numeroDocumento | string  | :heavy_check_mark: | CNPJ da Loja |
| matriz          | boolean | :heavy_check_mark: |              |
| holdingId       | string  | :heavy_check_mark: |              |
| ramo            | string  | :heavy_check_mark: |              |
| logradouro      | string  |                    |              |
| numero          | string  |                    |              |
| uf              | string  | :heavy_check_mark: |              |
| cidade          | string  | :heavy_check_mark: |              |
| bairro          | string  | :heavy_check_mark: |              |
| cep             | string  |                    |              |
| distrito        | string  |                    |              |
| complemento     | string  |                    |              |
| telefone        | string  |                    |              |
| qtdCheckouts    | number  |                    |              |
| areaM2          | number  |                    |              |
| qtdFuncionarios | number  |                    |              |


## META

| Campo   | Tipo   | Obrigatório        | Observações |
|---------|--------|--------------------|-------------|
| id      | string | :heavy_check_mark: |             |
| mes     | number | :heavy_check_mark: |             |
| ano     | number | :heavy_check_mark: |             |
| lojaId  | string | :heavy_check_mark: |             |
| secaoId | string | :heavy_check_mark: |             |
| valor   | number | :heavy_check_mark: |             |


## FORMA_PAGAMENTO

| Campo     | Tipo   | Obrigatório        | Observações |
|-----------|--------|--------------------|-------------|
| id        | string | :heavy_check_mark: |             |
| descricao | string | :heavy_check_mark: |             |


## FUNCIONARIO

| Campo           | Tipo         | Obrigatório        | Observações |
|-----------------|--------------|--------------------|-------------|
| dataNascimento  | date         |                    |             |
| id              | string       | :heavy_check_mark: |             |
| login           | string       |                    |             |
| nome            | string       | :heavy_check_mark: |             |
| numeroDocumento | string       |                    |             |
| ativo           | boolean      | :heavy_check_mark: |             |
| senha           | string       |                    |             |
| lojaIds         | list[string] |                    |             |


## ACESSO

| Campo          | Tipo         | Obrigatório        | Observações |
|----------------|--------------|--------------------|-------------|
| id             | string       | :heavy_check_mark: |             |
| funcionarioIds | list[string] | :heavy_check_mark: |             |


## CLIENTE

| Campo           | Tipo   | Obrigatório        | Observações |
|-----------------|--------|--------------------|-------------|
| id              | string | :heavy_check_mark: |             |
| nome            | string | :heavy_check_mark: |             |
| numeroDocumento | string | :heavy_check_mark: |             |
| ramo            | string | :heavy_check_mark: |             |
| uf              | string | :heavy_check_mark: |             |
| cidade          | string | :heavy_check_mark: |             |
| bairro          | string | :heavy_check_mark: |             |


## FORNECEDOR

| Campo           | Tipo   | Obrigatório        | Observações |
|-----------------|--------|--------------------|-------------|
| id              | string | :heavy_check_mark: |             |
| nome            | string | :heavy_check_mark: |             |
| numeroDocumento | string | :heavy_check_mark: |             |
| ramo            | string | :heavy_check_mark: |             |
| uf              | string | :heavy_check_mark: |             |
| cidade          | string | :heavy_check_mark: |             |
| bairro          | string | :heavy_check_mark: |             |


## PRODUTO

| Campo                    | Tipo               | Obrigatório        | Observações               |
|--------------------------|--------------------|--------------------|---------------------------|
| composicao               | object             |                    |                           |
| tipoComposicao           | string             |                    |                           |
| descricao                | string             | :heavy_check_mark: |                           |
| dataInclusao             | date               |                    |                           |
| finalidade               | string             |                    |                           |
| ativo                    | boolean            |                    |                           |
| grupoId                  | string             |                    |                           |
| id                       | string             | :heavy_check_mark: |                           |
| pesoVariavel             | boolean            |                    |                           |
| quantidadeItensEmbalagem | number             |                    |                           |
| secaoId                  | string             | :heavy_check_mark: |                           |
| subgrupoId               | string             |                    |                           |
| fornecedores             | list[Fornecedores] |                    |                           |
| eans                     | list[Eans]         |                    | Enviar apenas 1 único EAN |

### Fornecedores


| Campo     | Tipo     | Obrigatório        | Observações |
|-----------|----------|--------------------|-------------|
| id        | string   | :heavy_check_mark: |             |
| principal | booleano | :heavy_check_mark: |             |

### Eans

| Campo     | Tipo     | Obrigatório        | Observações |
|-----------|----------|--------------------|-------------|
| id        | string   | :heavy_check_mark: |             |
| tributado | booleano |                    |             |

## EAN

| Campo     | Tipo    | Obrigatório        | Observações |
|-----------|---------|--------------------|-------------|
| id        | string  | :heavy_check_mark: |             |
| produtoId | string  | :heavy_check_mark: |             |
| tributado | boolean |                    |             |


## TROCA_FORMA_PAGAMENTO

| Campo                   | Tipo   | Obrigatório        | Observações |
|-------------------------|--------|--------------------|-------------|
| autorizadorId           | string |                    |             |
| data                    | date   | :heavy_check_mark: |             |
| formaPagamentoDestinoId | string | :heavy_check_mark: |             |
| formaPagamentoOrigemId  | string | :heavy_check_mark: |             |
| id                      | string | :heavy_check_mark: |             |
| lojaId                  | string | :heavy_check_mark: |             |
| vendaId                 | string |                    |             |
| operadorId              | string |                    |             |
| sequencialPagamento     | string | :heavy_check_mark: |             |
| valor                   | number | :heavy_check_mark: |             |
| valorContraValeOuTroco  | number |                    |             |


## TROCA_DEVOLUCAO

| Campo         | Tipo        | Obrigatório        | Observações |
|---------------|-------------|--------------------|-------------|
| autorizadorId | string      |                    |             |
| data          | date        | :heavy_check_mark: |             |
| vendaId       | string      |                    |             |
| id            | string      | :heavy_check_mark: |             |
| itens         | list[Itens] | :heavy_check_mark: |             |
| lojaId        | string      | :heavy_check_mark: |             |
| numeroCaixa   | string      |                    |             |
| operadorId    | string      |                    |             |
| sequencial    | string      |                    |             |
| valor         | number      | :heavy_check_mark: |             |
| vendedorId    | string      |                    |             |

### Itens


| Campo         | Tipo   | Obrigatório        | Observações                                                 |
|---------------|--------|--------------------|-------------------------------------------------------------|
| desconto      | número |                    |                                                             |
| produtoId     | string | :heavy_check_mark: |                                                             |
| quantidade    | número | :heavy_check_mark: | Valor máximo: 999999999.9999, Valor mínimo: -999999999.9999 |
| valorTotal    | número | :heavy_check_mark: | Valor máximo: 999999999.99, Valor mínimo: -999999999.99     |
| valorUnitario | número | :heavy_check_mark: | Valor máximo: 999999999.99, Valor mínimo: -999999999.99     |
| vendedorId    | string |                    |                                                             |

## EVENTO_CAIXA

| Campo             | Tipo                     | Obrigatório        | Observações |
|-------------------|--------------------------|--------------------|-------------|
| id                | string                   | :heavy_check_mark: |             |
| lojaId            | string                   | :heavy_check_mark: |             |
| numeroCaixa       | string                   | :heavy_check_mark: |             |
| funcionarioId     | string                   |                    |             |
| dataHora          | date                     | :heavy_check_mark: |             |
| tipo              | string                   | :heavy_check_mark: |             |
| valoresDeclarados | list[Valores Declarados] |                    |             |

### Valores Declarados

| Campo            | Tipo   | Obrigatório        | Observações                                             |
|------------------|--------|--------------------|---------------------------------------------------------|
| formaPagamentoId | string | :heavy_check_mark: |                                                         |
| valor            | número | :heavy_check_mark: | Valor máximo: 999999999.99, Valor mínimo: -999999999.99 |


## VENDA

| Campo                     | Tipo             | Obrigatório        | Observações |
|---------------------------|------------------|--------------------|-------------|
| id                        | string           | :heavy_check_mark: |             |
| lojaId                    | string           | :heavy_check_mark: |             |
| clienteId                 | string           |                    |             |
| funcionarioId             | string           |                    |             |
| data                      | date             | :heavy_check_mark: |             |
| dataHoraInicio            | date             |                    |             |
| dataHoraFim               | date             |                    |             |
| dataHoraVenda             | date             | :heavy_check_mark: |             |
| desconto                  | number           |                    |             |
| efetiva                   | boolean          | :heavy_check_mark: |             |
| quantidadeItens           | number           | :heavy_check_mark: |             |
| quantidadeItensCancelados | number           |                    |             |
| sequencial                | string           | :heavy_check_mark: |             |
| servico                   | number           |                    |             |
| tipoDesconto              | string           |                    |             |
| tipoPreco                 | string           | :heavy_check_mark: |             |
| valor                     | number           | :heavy_check_mark: |             |
| valorItensCancelados      | number           |                    |             |
| acrescimo                 | number           |                    |             |
| numeroCaixa               | string           |                    |             |
| chave                     | string           |                    |             |
| xml                       | base64           |                    |             |
| itens                     | list[Itens]      | :heavy_check_mark: |             |
| pagamentos                | list[Pagamentos] | :heavy_check_mark: |             |

### Itens

| Campo            | Tipo     | Obrigatório        | Observações                                                 |
|------------------|----------|--------------------|-------------------------------------------------------------|
| acrescimo        | número   |                    |                                                             |
| desconto         | número   |                    |                                                             |
| efetivo          | booleano | :heavy_check_mark: |                                                             |
| funcionarioId    | string   |                    |                                                             |
| preco            | número   | :heavy_check_mark: |                                                             |
| produtoId        | string   | :heavy_check_mark: |                                                             |
| codigoRegistrado | string   |                    |                                                             |
| promocao         | booleano |                    |                                                             |
| quantidade       | número   | :heavy_check_mark: | Valor máximo: 999999999.9999, Valor mínimo: -999999999.9999 |
| servico          | número   |                    |                                                             |
| valorTotal       | número   | :heavy_check_mark: | Valor máximo: 999999999.99, Valor mínimo: -999999999.99     |
| valorUnitario    | número   | :heavy_check_mark: | Valor máximo: 999999999.99, Valor mínimo: -999999999.99     |
| tipoPreco        | string   | :heavy_check_mark: |                                                             |
| custo            | número   |                    |                                                             |
| markup           | número   |                    |                                                             |
| lucro            | número   |                    |                                                             |

### Pagamentos


| Campo            | Tipo   | Obrigatório        | Observações                                             |
|------------------|--------|--------------------|---------------------------------------------------------|
| formaPagamentoId | string | :heavy_check_mark: |                                                         |
| sequencial       | string | :heavy_check_mark: |                                                         |
| valor            | número | :heavy_check_mark: | Valor máximo: 999999999.99, Valor mínimo: -999999999.99 |


## COMPRA

| Campo           | Tipo         | Obrigatório        | Observações |
|-----------------|--------------|--------------------|-------------|
| id              | string       | :heavy_check_mark: |             |
| lojaId          | string       | :heavy_check_mark: |             |
| fornecedorId    | string       |                    |             |
| funcionarioId   | string       |                    |             |
| dataEntrada     | date         | :heavy_check_mark: |             |
| dataEmissao     | date         | :heavy_check_mark: |             |
| dataHoraCompra  | date         | :heavy_check_mark: |             |
| desconto        | number       |                    |             |
| efetiva         | boolean      | :heavy_check_mark: |             |
| quantidadeItens | number       | :heavy_check_mark: |             |
| tipoDesconto    | string       |                    |             |
| valor           | number       | :heavy_check_mark: |             |
| acrescimo       | number       |                    |             |
| itens           | list[Itens] | :heavy_check_mark: |             |


### Itens

| Campo         | Tipo   | Obrigatório        | Observações                                                 |
|---------------|--------|--------------------|-------------------------------------------------------------|
| acrescimo     | número |                    |                                                             |
| desconto      | número |                    |                                                             |
| produtoId     | string | :heavy_check_mark: |                                                             |
| quantidade    | número | :heavy_check_mark: | Valor máximo: 999999999.9999, Valor mínimo: -999999999.9999 |
| valorTotal    | número | :heavy_check_mark: | Valor máximo: 999999999.99, Valor mínimo: -999999999.99     |
| valorUnitario | número | :heavy_check_mark: | Valor máximo: 999999999.99, Valor mínimo: -999999999.99     |

## LOCAL_ESTOQUE

| Campo               | Tipo    | Obrigatório        | Observações |
|---------------------|---------|--------------------|-------------|
| id                  | string  | :heavy_check_mark: |             |
| lojaId              | string  | :heavy_check_mark: |             |
| descricao           | string  | :heavy_check_mark: |             |
| disponivelParaVenda | boolean | :heavy_check_mark: |             |


## ESTOQUE_MOVIMENTACAO

| Campo          | Tipo   | Obrigatório        | Observações |
|----------------|--------|--------------------|-------------|
| id             | string | :heavy_check_mark: |             |
| localEstoqueId | string | :heavy_check_mark: |             |
| dataHora       | date   | :heavy_check_mark: |             |
| produtoId      | string | :heavy_check_mark: |             |
| quantidade     | number | :heavy_check_mark: |             |
| custo          | number | :heavy_check_mark: |             |
| preco          | number | :heavy_check_mark: |             |
| markup         | number |                    |             |


## TITULO_PAGAR

| Campo          | Tipo             | Obrigatório        | Observações |
|----------------|------------------|--------------------|-------------|
| id             | string           | :heavy_check_mark: |             |
| lojaId         | string           | :heavy_check_mark: |             |
| fornecedorId   | string           | :heavy_check_mark: |             |
| documento      | string           | :heavy_check_mark: |             |
| valorNominal   | number           | :heavy_check_mark: |             |
| valorJuros     | number           | :heavy_check_mark: |             |
| valorMulta     | number           | :heavy_check_mark: |             |
| valorDevido    | number           | :heavy_check_mark: |             |
| valorPago      | number           | :heavy_check_mark: |             |
| dataEmissao    | date             | :heavy_check_mark: |             |
| dataVencimento | date             | :heavy_check_mark: |             |
| pagamentos     | list[Pagamentos] | :heavy_check_mark: |             |

### Pagamentos

| Campo    | Tipo   | Obrigatório        | Observações                                             |
|----------|--------|--------------------|---------------------------------------------------------|
| dataHora | data   | :heavy_check_mark: |                                                         |
| valor    | número | :heavy_check_mark: | Valor máximo: 999999999.99, Valor mínimo: -999999999.99 |

## TITULO_RECEBER

| Campo          | Tipo             | Obrigatório        | Observações |
|----------------|------------------|--------------------|-------------|
| id             | string           | :heavy_check_mark: |             |
| lojaId         | string           | :heavy_check_mark: |             |
| clienteId      | string           | :heavy_check_mark: |             |
| documento      | string           | :heavy_check_mark: |             |
| valorNominal   | number           | :heavy_check_mark: |             |
| valorJuros     | number           | :heavy_check_mark: |             |
| valorMulta     | number           | :heavy_check_mark: |             |
| valorDevido    | number           | :heavy_check_mark: |             |
| valorPago      | number           | :heavy_check_mark: |             |
| dataEmissao    | date             | :heavy_check_mark: |             |
| dataVencimento | date             | :heavy_check_mark: |             |
| pagamentos     | list[Pagamentos] | :heavy_check_mark: |             |

### Pagamentos

| Campo    | Tipo   | Obrigatório        | Observações                                             |
|----------|--------|--------------------|---------------------------------------------------------|
| dataHora | data   | :heavy_check_mark: |                                                         |
| valor    | número | :heavy_check_mark: | Valor máximo: 999999999.99, Valor mínimo: -999999999.99 |