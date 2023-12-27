const dataLowercase = 'azertyuiopqsdfghjklmwxcvbn';
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = '0123456789';
const dataSymbols = '$*^ù!,!"(-é_ç)';
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');

console.log(rangeValue);

// console.log(dataUppercase);

function generatePassword() {
  let data = [];
  let password = '';

  if (Lowercase.checked) data.push(...dataLowercase);
  if (UpperCase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert('Veuillez sélectionner des critères');
    return;
  }

  for (i = 0; i < rangeValue.ariaValueMax; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

  passwordOutput.value = password;

  passwordOutput.ariaSelected();
  document.execCommand('copy');

  generateButton.textContent = 'Copié !';

  setTimeout(() => {}, 2000);
  generateButton.textContent = 'Générer mot de passe';
}

generateButton.addEventListener('click', generatePassword);
