const express=require ('express');
const routes=express.Router();
const ProductController=require('./controllers/ProductController')

//rota listagem 
routes.get('/products',ProductController.index);
//rota adiciona
routes.post('/products',ProductController.store);
//rota busca por id 
routes.get('/products/:id',ProductController.show);
//rota atualiza
routes.put('/products/:id',ProductController.update);
//rota remove
routes.delete('/products/:id',ProductController.destroy);



module.exports=routes;