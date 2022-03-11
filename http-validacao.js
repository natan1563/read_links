const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro) {
  throw new Error(erro.message)
}

async function checaStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise
    .all(arrayURLs
      .map(async url => {
        const resposta = await fetch(url)
        return resposta.status
    }))

    return arrayStatus
  } catch (e) {
    manejaErros(e)
  }
}

function gerarArrayDeURLs(arrayLinks) {
  return arrayLinks
  .map(objetoLink => Object
    .values(objetoLink)
    .join()
  )
}

async function validaURLs(arrayLinks) {
  const links = gerarArrayDeURLs(arrayLinks)
  const statusLinks = await checaStatus(links)
  
  const resultados = arrayLinks.map((objeto, index) => ({
    ...objeto, 
    status: statusLinks[index]
  }))

  return resultados
}

module.exports = validaURLs