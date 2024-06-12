const mongoose = require('mongoose');
const Lista = require('./models/Lista');

mongoose.connect('mongodb+srv://gilberto:8z0VrqQYIMzscAhZ@morales.ivuybjr.mongodb.net/?retryWrites=true&w=majority&appName=morales')
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB: ', err);
  });

const nomes = [
  "Gilberto Morales",
  "Maria Vitória Bosque",
  "Iago Vargas",
  "Maria Clara Almeida",
  "Daniel Caceres",
  "Romeo Noro",
  "Artur Kieling",
  "Vicenzo de Souza",
  "Bruno Difante",
  "Aileen Schieffelbein",
  "Yuri Alexander",
  "Gabriel Gonzalez",
  "Gabriela de Figueiredo",
  "Gabriel Pinheiro",
  "Rafael Predebon",
  "Enzo Gabriel Paniz Perlin",
  "João Vitor dos Santos Ritter",
  "João Victor Gonçalves",
  "Felipe Isaia Faria",
  "Miguel de Figueiredo",
  "Matheus Dias Pichler",
  "Leonardo de Castro Lopes",
  "Antony Vinicius Rosa de Oliveira",
  "Rafaela Prussiano",
  "Julia Monero",
  "Anthony Guedes",
  "Lorenzo Machado",
  "Iuri Nunes",
  "Eduardo Ramires",
  "Matheus Rossato",
  "Pedro Henrique de Avila",
  "Felipe Flores Vieira",
  "Lucas Perego Gewehr",
  "Guilherme Corrêa da Silva",
  "Sofia Planella Acauan",
  "Lívia de Arruda Marafiga"
];

async function adicionarNomes() {
  try {
    for (const nome of nomes) {
      const novoNome = new Lista({ nome });
      await novoNome.save();
    }
    console.log('Nomes adicionados com sucesso!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Erro ao adicionar nomes: ', error);
  }
}

adicionarNomes();
