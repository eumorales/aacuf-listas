const mongoose = require('mongoose');
const listaSchema = new mongoose.Schema({ nome: String });
const Lista = mongoose.model('Lista', listaSchema);

module.exports = Lista;