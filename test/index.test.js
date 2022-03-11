const pegaArquivo = require('../index')

const arrayResult = [
  {
    'FileList': 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]
const result = async (file) => {
  return await pegaArquivo(`C:\\Users\\Nata\\Documents\\project\\node-basico\\test\\arquivos\\${file}`)
}
describe('pegaArquivo::', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  })
  it('deve retornar um array com resultados', async () => {
    expect(await result('texto1.md')).toEqual(arrayResult)
  })
  it('deve retornar mensagem: "This file does not have links"', async () => {
    expect(await result('texto2.md')).toBe('This file does not have links')
  })
})