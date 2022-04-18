
const express = require('express');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));




const Usuario = require('./controllers/UsuarioController');
const UsuarioComum = require('./controllers/UsuarioComumController');
const Curso = require('./controllers/CursoController');
const Materia = require('./controllers/MateriaController');
const CursoMateria = require('./controllers/CursoMateriaController');
const Categoria = require('./controllers/CategoriaController');
const Publicacao = require('./controllers/PublicacaoController');
const PublicacaoCategoria = require('./controllers/PublicacaoCategoriaController');
const Resposta = require('./controllers/RespostaController');
const Conquista = require('./controllers/ConquistaController');
const AnexoPublicacao = require('./controllers/AnexoPublicacaoController');
const ElogioResposta = require('./controllers/ElogioRespostaController');
const MateriaCategoria = require('./controllers/MateriaCategoriaController');

app.use('/', Usuario);
app.use('/', UsuarioComum);
app.use('/', Curso);
app.use('/', Materia);
app.use('/', CursoMateria);
app.use('/', Categoria);
app.use('/', Publicacao);
app.use('/', PublicacaoCategoria);
app.use('/', Resposta);
app.use('/', Conquista);
app.use('/', AnexoPublicacao);
app.use('/', ElogioResposta);
app.use('/', MateriaCategoria);


app.listen(3000, ()=>{
    console.log("server is running, url: http://localhost:3000");
});