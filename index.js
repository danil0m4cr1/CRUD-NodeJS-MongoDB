const express = require("express");    
const mongoose = require("mongoose");  
const Maquinas = require("./models/maquinas"); 

const app = express();

const PORT = 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crudDB", {
  useNewUrlParser: true,      
  useUnifiedTopology: true    
}).then(() => console.log("Conectado ao MongoDB local")) 
  .catch(err => console.error("Erro ao conectar", err))

app.post("/maquinas", async (req, res) => {
  const { nome, tipo, status, ultimaManutencao } = req.body;                      
  const novaMaquina = await Maquinas.create({ nome, tipo, status, ultimaManutencao }); 
  res.status(201).json(novaMaquina);                    
});

app.get("/maquinas", async (req, res) => {
  const maquinas = await Maquinas.find();                 
  res.json(maquinas);                           
});

app.get("/maquinas/:id", async (req, res) => {
  const maquinas = await Maquinas.findById(req.params.id); 
  if (!maquinas) return res.status(404).json({ mensagem: "Máquina não encontrada" });
  res.json(maquinas);                                   
});


app.put("/maquinas/:id", async (req, res) => {
  const { nome, tipo, status, ultimaManutencao } = req.body;                  
  const maquinas = await Maquinas.findByIdAndUpdate(   
    req.params.id,                                    
    { nome, tipo, status, ultimaManutencao },                                     
    { new: true }                                        
  );
  if (!maquinas) return res.status(404).json({ mensagem: "Máquina não encontrada" }); 
  res.json(maquinas);                                   
});

app.delete("/maquinas/:id", async (req, res) => {
  const maquinas = await Maquinas.findByIdAndDelete(req.params.id); 
  if (!maquinas) return res.status(404).json({ mensagem: "Maquina não encontrado" });
  res.json({ mensagem: "Maquina deletado com sucesso" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
