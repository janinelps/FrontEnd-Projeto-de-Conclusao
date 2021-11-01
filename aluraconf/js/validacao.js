export function valida(input) {
    const tipoDeInput = input.name;

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemErro(tipoDeInput, input)
    }

}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch'
]

const mensagemDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é valido.'
    }
}

export function mostraMensagemErro(tipoDeInput, input) {
    let mensagem = ''

    tiposDeErro.forEach(erro => {

        if (input.validity[erro]) {
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    });

    return mensagem
}

export function formularioValido() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        valida(input)
    })

    const formIsNotValid = document.getElementsByClassName('input-container--invalido');

    if (formIsNotValid.length == 0) {
        alert('Inscrição realizada com sucesso.')
        inputs.forEach(input => {
            input.value = '';
        })
    } else {
        alert('Preencha os campos para realizar sua inscrição.')
    }
}