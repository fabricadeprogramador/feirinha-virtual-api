const cors = require("cors") // CommonsJS
const express = require("express")
const app = express()

// Configuração do express
app.use(express.json()) // Aceitar req JSON
app.use(cors({ // CORS (Cross Origin Resource Sharing)
    origin: "*"
}))

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Feirinha Virtual"
    })
})

app.post("/users", (req, res) => {
    console.log(req.body)
    if(req.body.age < 18) {
        res.status(400).json({ message: "A idade precisa ser maior ou igual a 18" })
    } else {
        res.json({ message: "Usuário salvo com sucesso" })
    }
    // TODO: Fazer validações
    // TODO: Cadastrar req.body no DB
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

app.post("/login", (req, res) => {
    if(req.body.email == "jao@gmail.com" && req.body.password == "123") {
        res.json({
            _id: "123456",
            nome: "Jão da Silva Carvalho",
            email: "jao@gmail.com"
        })
    } else {
        res.status(404).json({ message: "Usuário não encontrado, email ou senha incorretos" })
    }
})

app.listen(3000, ()=> { // "Ligando" a API
    console.log("API rodando na porta 3000")
})
