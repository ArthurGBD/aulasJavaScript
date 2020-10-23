let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // EVITE ATRIBUIR UNDEFINED
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // SEM PRECO
console.log(!!produto.preco)
console.log(produto)
