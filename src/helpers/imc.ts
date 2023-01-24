export type Level = {
  title: string;
  color: string;
  icon: 'down' | 'up';
  imc: number[],
  yourImc?: number;
}

export const levels: Level[] = [
  { title: 'Anorexia extrema', color: '#56a3ab', icon: 'down', imc: [0, 15.9] },
  { title: 'Magreza', color: '#86a3ab', icon: 'down', imc: [16, 18.5] },
  { title: 'Normal', color: '#4ead69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#c2b039', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#a3423f', icon: 'down', imc: [30.1, 99] }
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for(let i in levels) {
    if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy: Level = { ...levels[i] };

      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelCopy;
    }
  }

  return null;
}