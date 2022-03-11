const chalk = require('chalk')
const fs = require('fs')

function extrairLinks(texto) {
  const regEx = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
  const arrayResultados = []
  let temp;

  while ((temp = regEx.exec(texto)) !== null) {
    arrayResultados.push({
      [temp[1]]: temp[2]
    })
  }
  return arrayResultados.length ? arrayResultados : 'This file does not have links'
}

function tratarErro(erro) {
  console.log(chalk.red(erro.code, 'Nao ha arquivo no caminho'))
}

async function pegaArquivo(caminhoArquivo) {
  const encoding = 'utf8'
  try {
    const texto = await fs.promises.readFile(caminhoArquivo, encoding)
    return extrairLinks(texto)
  } catch(e) {
    tratarErro(e)
  }
}

module.exports = pegaArquivo