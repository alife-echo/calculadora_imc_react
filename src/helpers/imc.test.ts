import { calculateImc } from './imc'
describe('group test imc', () => {
  it('should return objetc after code refactor', () => {
    let storageFuncionImc = calculateImc(1.80, 90)
    expect.objectContaining(storageFuncionImc)
  })
})


export { }