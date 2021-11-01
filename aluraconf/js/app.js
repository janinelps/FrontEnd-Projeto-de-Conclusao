import { valida, formularioValido } from './validacao.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {

    input.addEventListener('blur', (evento) => valida(evento.target));
})


const button = document.querySelector('button')

button.addEventListener('click', (evento) => formularioValido(evento.target))


