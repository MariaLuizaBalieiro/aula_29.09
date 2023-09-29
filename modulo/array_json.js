// objetivo: aprender a trabalhar com estrutura de dados array e json 
// Data: 29/09
// autor: Maria Luiza Balieiro 
// versão: 1.0


// [] = estrutura array
// {} = estrutura JSON

const introducaoArray = function(){
  //criando um array de forma manual
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo'];

  //exibe os dados do array em formato de tabela 
    console.table(listaDeNomes);

 // retorna a quantidade de elementos de uma array
    console.log(listaDeNomes.length);


 // adiciona elementos novos no fim da lista 
    listaDeNomes.push('Roberto');
    console.table(listaDeNomes);

 // adiciona elementos no início da lista
    listaDeNomes.unshift('Ricardo');
    console.table(listaDeNomes);

    
 // remove o ultimo elemento do array 
    listaDeNomes.pop();
    console.table(listaDeNomes);

// remove o primeiro elemento do array 
    listaDeNomes.shift();
    console.table(listaDeNomes);


    // remove um elemento, porém você precisa informar tanto o indice quanto a quantidade que você deseja remover
    // 2 referente ou indice e 1 é referente a quantidade de itens
    listaDeNomes.splice(2,1);
    console.table(listaDeNomes);

    
    // não tem problema guardar variaveis diferentes em um objeto só por exemplo: listaDeNomes.push('André de silva', 'Ricardo da Silva', 'João de Silva' 10)
    listaDeNomes.push('André de silva', 'Ricardo da Silva', 'João de Silva');
    console.log(listaDeNomes);


    // typeof - retorna tipos de dados de um elemento 
    console.log(typeof(listaDeNomes[6]));
}



const percorrendoArray = function(){
let listaDeProdutos = ['Mouse', 'Teclado', 'Mouse Pad', 'Impressora', 'HD' , 'Gabinete' ];

// // while
// let cont = 0;
// while(cont < listaDeProdutos.length){
//     console.log('Nome do produto: ' + listaDeProdutos[cont]);
//     cont += 1;
// } 

// for 
// for(let cont = 0; cont < listaDeProdutos.length; cont++){
//     console.log('Nome do produto: ' + listaDeProdutos[cont]);
// }


// // foreach
// listaDeProdutos.forEach(function(produto){
//     console.log('Nome do produto: ' + produto)

// })


// retorna o indice do elemento que foi encontrado
// caso não exista o indice buscado retorna -1 
console.log(listaDeProdutos.indexOf('Impressora'))


// retorna verdadeiro ou falso, e o item existe então sera true e não existir será false 
console.log(listaDeProdutos.includes('Mouse'))





}


// se está na lista é melhor usar o includes 
// indice é melhor usar o indexOf
const filtrarProduto = function  (nomeProduto){

    let listaDeProdutos = ['Mouse', 'Teclado', 'Mouse Pad', 'Impressora', 'HD' , 'Gabinete' ];
    let nome = nomeProduto;

    let status = false;
    // return listaDeProdutos.includes(nome);


    listaDeProdutos.forEach(function(produto){
        // fazendo assim independente de como a pessoa escrever a palavra (com maiusculo ou minusculo) ele vai reconhecer a palavra
        if(produto.toUpperCase == nome.toUpperCase)
        status = true;

    })


    return status;





}

console.log(filtrarProduto('Mouse'));

// percorrendoArray();

// introducaoArray();