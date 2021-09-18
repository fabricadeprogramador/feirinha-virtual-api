const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Feirinha Virtual"
    })
})

app.get("/clientes", (req, res) => {
    res.json([
        {
            nome: "Jão da Silva"
        },
        {
            nome: "Maria da Silva"
        },
        {
            nome: "Zé da Silva"
        }
    ])
})

app.listen(3000, ()=> {
    console.log("API rodando na porta 3000")
})
