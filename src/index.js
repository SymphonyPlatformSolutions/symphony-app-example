const initContent = () => {
  document.title = "My Symphony App"
  const title = "<h1>Hello, World!</h1>"

  let numbers = [...new Array(100)]
    .map(() => Math.floor(Math.random() * 256) + 1);

  const numbersListOptions = numbers.map(number => `<li>Option ${number}</li>`)
    .join('')

  document.querySelector("#root").innerHTML = `${title}<ul>${numbersListOptions}</ul>`
}

initContent()
