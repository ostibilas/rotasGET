const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
    res.send('Servidor com a rota da atividade 02 para enviar digite Acesse /calculadora')
})

app.get('/calculadora', (req, res) => {

    const { operacao, numUm, numDois } = req.query

    const n1 = parseInt(numUm);
    const n2 = parseInt(numDois);

    if (!operacao || isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('Erro: Dados inválidos ou faltando!!!');
    }

    switch (operacao) {
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'subtracao':
            resultado = n1 - n2;
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            break;
        case 'divisao':
            if (n2 === 0) {
                return res.status(400).send('Erro: Divisão por zero não é permitida.');
            }
            resultado = n1 / n2;
            break;
        default:
            return res.status(400).send('Erro: Operação não reconhecida. Use soma, subtracao, multiplicacao ou divisao.');
    }

    res.send(`Resultado da ${operacao} é: ${resultado}`);

})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});