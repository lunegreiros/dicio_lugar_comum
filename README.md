### Dicionário de lugar comum
API para Dicionário de Lugar Comum

---

Usando a palavra 'boca' como exemplo:
#### Request URL
```
https://dicio-lugar-comum.herokuapp.com/api/boca
```

#### Response
A resposta é um objeto com duas propriedades: a palavra pesquisada e um Array de strings para as expressões. Cada string possui uma expressão de lugar-comum
```
{
  "palavra": "boca",
  "expressoes": [
    "botar a boca no mundo",
    "correr à boca pequena",
    "da boca pra fora",
    "de dar água na boca",
    "em boca fechada não entra mosquito",
    "vira essa boca pra lá!",
    "coração foi parar na boca",
    "ficaria de boca aberta",
    "cala a boca e me beija",
    "peixe morre pela boca"
  ]
}
```
