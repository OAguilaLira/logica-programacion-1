const formularioValores = document.getElementById("formulario");
const valores = [];
formularioValores.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;

  valores.push(form["valor1"].value);
  valores.push(form["valor2"].value);
  valores.push(form["valor3"].value);

  for (let i = 0; i < valores.length; i++) {}
});
