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



const manipulandoArryJson = function(){
   
// [] = estrutura array
// {} = estrutura JSON {atributos: valor}

// criando objetos JSON
let contato = {nome: 'José da Silva', telefone: '1222677', gmail: 'José@gmail.com'}
let contato2 = {nome: 'Maria da Silva', telefone: '1277', gmail: 'Maria@gmail.com'}
let contato3 = {nome: 'João da Silva', telefone: '127755', gmail: 'João@gmail.com'}

// criando um array com dados Json
let arrayContatos = [contato, contato2, contato3];
// adicionando elementos individuais nos obj JSON 
contato.celular = '887997';
// console.log (arrayContatos);


//  console.log(arrayContatos[1].nome);
  arrayContatos.forEach(function(dadosContato){
   console.log('Nome: ' + dadosContato.nome);
   console.log('Gmail: ' + dadosContato.gmail);
   console.log('Telefone: ' + dadosContato.telefone);
  //   tratamentos de dados para quando não houver conteúdo 
  if (dadosContato.celular != undefined);
  console.log('Celular: ' + dadosContato.celular);
   console.log('************************************************** \n')  })

}

// manipulandoArryJson();


const cadastrarProdutos = function(){
   let listaDeMarcas= [
      {id: 1, nome_marca: 'Dell'},
      {id: 2, nome_marca: 'Apple'},
      {id: 3, nome_marca: 'Lenovo'},
      {id: 4, nome_marca: 'Positivo'},
      {id: 5, nome_marca: 'Razer '},
      {id: 6, nome_marca: 'Logitech'},
      {id: 7, nome_marca: 'Multilaser'}

   ];
   let listaDeCategorias = [
      {id: 1, nome_categoria: 'Periferico', descricao_categoria: 'Perifericos de computadosres '},
      {id: 2, nome_categoria: 'Hardware', descricao_categoria: 'Para montar computadores '},
      {id: 3, nome_categoria: 'Computadores ', descricao_categoria: 'Computadores completos'},
      {id: 1, nome_categoria: 'Games', descricao_categoria: 'Acessórios para games'},
   ];
   let listaDeSituacao = [

      {id:1, situacao: 'Novo'},
      {id:2, situacao: 'Semi-novo'},
   ];

let listaDeCores = [
   {id: 1, cor: 'Branco'},
   {id: 2, cor: 'Preto'},
   {id: 3, cor: 'Cinza'},
   {id: 4, cor: 'Rosa'},
   {id: 5, cor: 'Verde musgo'},
]

   let produto1 = {
      nome: 'Mouse', 
      descricaco: 'Mouse optico com fio', 
      quantidade: 40, 
      valor:60.00,
      maraca:listaDeMarcas[0],
      categoria: listaDeCategorias[0],
      situacao: listaDeSituacao[0],
      cor: [
         listaDeCores[0],
         listaDeCores[1],
         listaDeCategorias[2]
      ]
    

   };

console.log(produto1);

let produto2 = {
   nome: 'Teclado', 
   descricaco: 'Teclado com fio ', 
   quantidade: 40, 
   valor:60.00,
   maraca:listaDeMarcas[2],
   categoria: listaDeCategorias[1],
   situacao: listaDeSituacao[2],
   cor: listaDeCores
 

};

console.log(produto2);

}

cadastrarProdutos();