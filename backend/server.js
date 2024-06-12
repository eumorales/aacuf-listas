const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

console.log('\naacuf-listas | Backend\n');	

mongoose.connect('mongodb+srv://gilberto:8z0VrqQYIMzscAhZ@morales.ivuybjr.mongodb.net/?retryWrites=true&w=majority&appName=morales')
  .then(() => {
    console.log('* Conectado com o banco de dados.');
  })
  .catch((err) => {
    console.error('* Erro ao conectar ao MongoDB:', err);
  });

const listaSchema = new mongoose.Schema({ nome: String });
const Lista = mongoose.model('Lista', listaSchema);

app.get('/nomes', async (req, res) => {
  try {
    const nomes = await Lista.find();
    res.json(nomes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar nomes.' });
  }
});

app.post('/nomes', async (req, res) => {
  const { nome } = req.body;
  try {
    const nomeExistente = await Lista.findOne({ nome });

    if (nomeExistente) {
      return res.status(400).json({ message: 'O nome já está registrado na lista.' });
    }

    const novoNome = new Lista({ nome });
    await novoNome.save();
    res.status(201).json(novoNome);
  } catch (error) {
    res.status(500).json({ message: 'Não foi possível adicionar o nome na lista.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor online! Rodando na porta ${port}.`);
});
