const mongoose =require('mongoose');
const Product = mongoose.model('Product');

module.exports={
    //listagem
    async index(req, res){
        const{page=1}=req.query;
        const products = await Product.paginate({},{page,limit:10});

        return res.json(products);
    },
    //criação
    async store (req,res){
        const products = await Product.create(req.body);
        return res.json(products);
    },
    //busca por id
    async show (req,res){
        const products=await Product.findById(req.params.id);

        return res.json(products);
    },
    //atualiza cadastro 
    async update (req,res){
        const products = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        //new:true é para retornar o objeto atualizado para a variavel sem isso tras a informação desatualizada
        return res.json(products);
    },

    //exclui cadastro
    async destroy(req,res){
        await Product.findByIdAndDelete(req.params.id);
        return res.send();
    }
};

