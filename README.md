# Classificação de Níveis de Jogadores 🎮

Este repositório contém um código simples em JavaScript que classifica jogadores com base em sua experiência (XP). O projeto foi criado para praticar lógicas condicionais e é ideal para quem está aprendendo conceitos básicos de programação.

## O que o código faz?
O código verifica o valor de XP fornecido e retorna o nível correspondente do jogador, exibindo uma mensagem no console com o nome do jogador e seu nível atual.

## Como funciona?

### Entrada 🔐
- O valor inicial de XP é definido diretamente no código como uma variável.
- Exemplo: `let XP = 75000;`

### Lógica condicional ⚖️
- O programa utiliza condições `if-else` para verificar em qual intervalo de XP o jogador se encontra.
- A variável `score` é atribuída ao respectivo nível com base na tabela:

| Nível       | Intervalo de XP            |
|--------------|----------------------------|
| **Ferro**    | XP < 1000                 |
| **Bronze**   | 1001 ≤ XP ≤ 2000       |
| **Prata**    | 2001 ≤ XP ≤ 5000       |
| **Ouro**     | 5001 ≤ XP ≤ 7000       |
| **Platina**  | 7001 ≤ XP ≤ 8000       |
| **Ascendente** | 8001 ≤ XP ≤ 9000    |
| **Imortal**  | 9001 ≤ XP ≤ 10000      |
| **Radiante** | XP > 10000                |

### Saída 💡
- O código exibe no console uma mensagem indicando o nome do jogador e o seu nível:

```
Digite o nome de seu jogador
O herói de nome Jogador está no nível de Radiante
```

## Exemplo de Saída 📈
Se `XP = 75000`, a saída será:
```
O herói de nome Jogador está no nível de Radiante
```

### Testando Outros Valores de XP 🔄
- **XP = 500**  → "Ferro"
- **XP = 1500** → "Bronze"
- **XP = 8500** → "Ascendente"

---

## Como Executar? ⚡
1. Certifique-se de que você tem o **Node.js** instalado.
2. Clone o repositório:
   ```bash
   git clone https://github.com/seu_usuario/classificacao-jogadores.git
   ```
3. Navegue até o diretório:
   ```bash
   cd classificacao-jogadores
   ```
4. Execute o código:
   ```bash
   node index.js
   ```

---

## Sugestões e Melhorias 🚀
Se você tiver ideias para melhorar este projeto, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**. Adoramos colaborações!

