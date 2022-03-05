const chalk = require('chalk')
const fs = require('fs')

function pegaArquivo(path) {
  const encode = 'utf-8'
  fs.readFile(path, encode, (_, texto) => {
    console.log(chalk.green(texto))
  })
}

pegaArquivo('./arquivos/texto1.md')