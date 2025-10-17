const express = require ("express");
const app = express();
const PORT = 8080;

   function helloWorld(req, res) {
    res.send('<h1>Hello mundo!</h1>')
}

app.get("/hello", helloWorld);

app.get('/soma/:num1/:num2',(req,res)=>{

    const num1String = req.params.num1;
    const num2String = req.params.num2;

    const num1 = parseInt(num1String);
    const num2 = parseInt(num2String);

if(( isNaN(num1) || isNaN(num2))){
    return res.status(400).send('erro, numeros não encontrados');
}

const resultado = num1 + num2;
res.send(`O resultado da soma de ${num1} + ${num2} é: ${resultado}`);
})

app.get('/subtracao/:num1/:num2',(req,res)=>{

    const num1StringSub = req.params.num1;
    const num2StringSub = req.params.num2;
    //puxa os numeros

    const num1Sub = parseInt(num1StringSub);
    const num2Sub = parseInt(num2StringSub);

    if(( isNaN(num1Sub) || isNaN(num2Sub))){
    return res.status(400).send('erro, numeros não encontrados');
    }

    const resultado = num1Sub - num2Sub;
    res.send(`O resultado da Subtração de ${num1Sub} - ${num2Sub} é: ${resultado}`)
})

app.get('/multiplicao/:num1/:num2',(req,res)=>{

    const num1StringSub = req.params.num1;
    const num2StringSub = req.params.num2;
    //puxa os numeros

    const num1Sub = parseInt(num1StringSub);
    const num2Sub = parseInt(num2StringSub);

    if(( isNaN(num1Sub) || isNaN(num2Sub))){
    return res.status(400).send('erro, numeros não encontrados');
    }

    const resultado = num1Sub * num2Sub;
    res.send(`O resultado da Multiplicação de ${num1Sub} X ${num2Sub} é: ${resultado}`)
})



// ===============================================================
app.get('/divisao/:num1/:num2',(req,res)=>{

    const num1String = req.params.num1;
    const num2String = req.params.num2;

    const num1 = parseInt(num1String);
    const num2 = parseInt(num2String);

if(( isNaN(num1) || isNaN(num2))){
    return res.status(400).send('erro, numeros não encontrados');
}
if( num2 === 0){
    return res.status(400).send('erro MASTEEER divisao por ZeRo ');
}



const resultado = num1 / num2;
res.send(`O resultado da Divisão de ${num1} + ${num2} é: ${resultado}`);
})


app.listen(PORT,()=>{

console.log(`Servidor rodando na porta ${PORT}.`);


})  