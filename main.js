const produtoService = require('./service/produto_service');


function main() {
    console.log(produtoService.listar());
    
    try{
        produtoService.inserir({ 
            nome: "Feijao", 
            categoria: "alimento", 
            preco: 8.00 
        });
    } catch(err) {
        console.log(err.message)
    }

    try{
        produtoService.inserir({ 
            nome: "Suco de laranja", 
            categoria: "bebida", 
            //preco: 9.20 
        });
    } catch(err) {
        console.log(err.message)
    }

   
    console.log("Listar: ", produtoService.listar());

    //Atualizar para produtoService
    /*console.log("Pesquisar pela categoria 'alimento", 
        produtoRepository.pesquisarPorCategoria('alimento'));

    console.log("Pesquisar pelo nome like 'E", 
        produtoRepository.pesquisarPorLikeNome('E'));*/
        
    try{
        const produtoBuscarId10 = produtoService.buscarPorId(10);
        console.log("BuscarPorId10: ", produtoBuscarId10);
    } catch (err) {
        console.log("BuscarPorId10: ",err.message);
    }
    
    try{
        const produtoBuscarId1 = produtoService.buscarPorId(1);
        console.log("BuscarPorId1: ", produtoBuscarId1);
    } catch (err) {
        console.log(err.message);
    }

    //Atualizar para produtoService
    /*produtoRepository.atualizar(2, { 
        nome: "suco", 
        categoria: "bebida", 
        preco: 9.9
    });

    produtoRepository.deletar(3);*/

    console.log("Listar: ", produtoService.listar());

}

main();