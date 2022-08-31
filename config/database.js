const mongoose = require('mongoose')

const conexao = async()=>{
    const atlas = await mongoose.connect("mongodb+srv://usuario:usuario@fiaptecnico.hsj9v.mongodb.net/hmtl5up")    
}
const modelo = mongoose.Schema({
    estilo:String,
    imagem:String,
    titulo:String,
    texto:String,
    publicado:{type:Date,default:Date.now}
})

const conteudo = mongoose.model('conteudo',modelo)

module.exports = {conexao, conteudo}