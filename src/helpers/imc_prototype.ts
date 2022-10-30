export type Level = {
  title: string,
  color: string,
  icon: 'down' | 'up',
  imc: number[],
  yourImc?: number

}

export const levels: Level[] = [
  { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
  { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] },

]

export const calculateImc = (setHeight: number, setWeight: number) => {
  const height = setHeight
  const weight = setWeight
  const imc = weight / (height * height)
  for (let i = 0; i < levels.length; i++) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      let levelStorage: Level = levels[i]
      levelStorage.yourImc = imc
      return levelStorage
    }
  }
  return null
}

/* import { calculateImc } from "./imc"

describe('Tests Imcs', () => {
  it('should show level', () => {
    let resultImc = calculateImc(1.8, 100)
    expect.arrayContaining(resultImc)
  })
}) */