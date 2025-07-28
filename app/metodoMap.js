function aplicarDesconto (livros){
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro =>{
        //os '...' faz uma cópia de tudo que tem de livro e val alterar o preço
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}