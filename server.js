const express=require ('express');
const cors=require('cons');
const mongoose=require('mongoose');
const requireDir=require('require-dir');



//iniciando o app
const app=express();
app.use(express.json());
app.use(cors());
//iniciando o db
mongoose.connect('mongodb://server-ana:27017/nodeapi');
    //com requireDir
requireDir('./src/models');
    //sem requireDir
//require('./src/models/Product');



//direciona para primeira rota
app.use('/api',require("./src/routes"));

app.listen(3001);