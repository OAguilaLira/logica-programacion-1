let numero1 = parseInt(prompt("Ingresa el primer número"));
let numero2 = parseInt(prompt("Ingresa el segundo número"));
let numero3 = parseInt(prompt("Ingresa el tercer número"));

const valores = [numero1, numero2, numero3];

if (numero1 === numero2 && numero2 === numero3) {
  alert("Los números son iguales.");
} else {

  let mayorAMenor = [...valores];  
  let menorAMayor = [...valores];  

  // Ordenamiento de mayor a menor
  for (let i = 0; i < mayorAMenor.length; i++) {
    for (let j = 0; j < mayorAMenor.length - 1; j++) {
      if (mayorAMenor[j] < mayorAMenor[j + 1]) {
        let temp = mayorAMenor[j];
        mayorAMenor[j] = mayorAMenor[j + 1];
        mayorAMenor[j + 1] = temp;
      }
    }
  }

  // Ordenar de menor a mayor
  for (let i = 0; i < menorAMayor.length; i++) {
    for (let j = 0; j < menorAMayor.length - 1; j++) {
      if (menorAMayor[j] > menorAMayor[j + 1]) {
        let temp = menorAMayor[j];
        menorAMayor[j] = menorAMayor[j + 1];
        menorAMayor[j + 1] = temp;
      }
    }
  }

  const divResultado = document.getElementById("resultado");
  divResultado.innerHTML = `
    <p>Ordenados de mayor a menor: ${mayorAMenor.join(", ")}</p>
    <p>Ordenados de menor a mayor: ${menorAMayor.join(", ")}</p>
  `;
}

