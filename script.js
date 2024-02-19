
const getWeightInput = document.querySelector('#getWeight');
const getHeightInput = document.querySelector('#getHeight');
const submitFormBtn = document.querySelector('#submitForm');
const title = document.querySelector('.title');
const form = document.querySelector('.form');
const result = document.querySelector('.result');
const spanIMC = document.querySelector('.IMCResult');
const spanClass = document.querySelector('.classResult');

submitFormBtn.addEventListener('click', () => {
  const weight = getWeightInput.value;
  const height = getHeightInput.value;
  if (weight === '' || weight <= 0 || height === '' || height <= 0) {
    submitFormBtn.style.background = 'red';
    alert('Preencha todos os campos corretamente antes de enviar');
  } else {
    title.style.display = 'none';
    form.style.display = 'none';
    result.style.display = 'flex';
    submitFormBtn.style.display = 'none';

    let classResult;
    const IMC = (weight / (height * height));

    if (IMC < 16.9) {
      classResult = 'Muito abaixo do peso';
    } else if (IMC >= 17 && IMC <= 18.4) {
      classResult = 'Abaixo do peso';
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      classResult = 'Peso normal';
    } else if (IMC >= 25 && IMC <= 29.9) {
      classResult = 'Acima do peso';
    } else if (IMC >= 30 && IMC <= 34.9) {
      classResult = 'Obesidade grau I';
    } else if (IMC >= 35 && IMC <= 40) {
      classResult = 'Obesidade grau II';
    } else if (IMC > 40) {
      classResult = 'Obesidade grau III';
    }

    spanIMC.textContent = IMC.toFixed(1);
    spanClass.textContent = classResult;
  }
});

const repeatBtn = document.querySelector('#repeatBtn');
repeatBtn.addEventListener('click', () => {
  location.reload();
});
