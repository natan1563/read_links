const chalk = require('chalk')
const pegaArquivo = require('./index')
const validaURLs = require('./http-validacao')

const caminho = process.argv

async function processaTexto(path) {
  if (!path[2])
    throw new Error('Path from parametrer file not found')

  const resultado = await pegaArquivo(path[2])
  switch(true) {
    case (path[3] && path[3] === 'validar'):
      console.log(chalk.yellow('Links validos'), await validaURLs(resultado))
      break;
    
    default:
      console.log(chalk.yellow('Lista de links: '), resultado)
  }
}

processaTexto(caminho)