const form = document.querySelector('form')


function nameValidate(event) {
    let erro = true 
    if (form[0].value === "") {
        setError(form[0], "Campo Obrigatório")
    } else if(form[0].value.length < 3) {
        setError(form[0], "Deve ter pelo menos 3(três) caracteres")
    } else if (!isName(form[0].value)){
        setError(form[0], "Digite um nome válido")
    } else {
        setSuccess(form[0])
        erro = false
    }

    if (event.type === "submit") {
        if (erro) {
            return true
        } else {
            return false            
        }
    }
}

function lastNameValidate(event) {
    let erro = true
    if (form[1].value === "") {
        setError(form[1], "Campo Obrigatório")
    } else if (form[1].value.length < 3){
        setError(form[1], "Deve ter pelo menos 3(três) caracteres")
    } else if (!isName(form[1].value)){  
        setError(form[1], "Digite um nome válido")      
    } else {
        setSuccess(form[1])
        erro = false
    }

    if (event.type === "submit") {
        if (erro) {
            return true
        } else {
            return false            
        }
    }
}

function emailValidate(event) {
    let erro = true
    if (form[2].value === "") {
        setError(form[2], "Campo Obrigatório")
    } else if (!isEmail(form[2].value)) {
        setError(form[2], "Digite um email válido")
    } else {
        setSuccess(form[2])
        if (event.type === "submit") {
            erro = false
        }
    }

    if (event.type === "submit") {
        if (erro) {
            return true
        } else {
            return false            
        }
    }
}

function passwordValidate(event) {
    let erro = true
    if (form[3].value == "") {
        setError(form[3], "Campo Obrigatório")
    } else if (form[3].value.length < 8 || form[3].value.length > 24) {
        setError(form[3], "Digite uma senha entre 8 e 24 caracteres")
    } else if(!strongPassword(form[3].value)) {
        setError(form[3], "A senha deve ter pelo menos 1 letra maiuscula, um número e um caractere especial")
    } else {
        setSuccess(form[3])
        erro = false
    }

    if (event.type === "submit") {
        if (erro) {
            return true
        } else {
            return false            
        }
    }
}

function isName(name) {
    return /^((?!.*\d)(?!.*[);(@{}!#$%¨&*|\\°^~?])[a-zA-Zà-úÀ-Ú]{2,} ?)+$/.test(name)
}

function isEmail(email) {
    return /^[^\s]+@[^\s]+\.\w{2,3}$/.test(email)
}

function strongPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[);(@{}!#$%¨&*|\\°^~?]).{8,24}/.test(password)
}

function setError(campo, mensagem) {
    const img = campo.parentNode.querySelector('img')
    const spanError = campo.parentNode.querySelector('.error')

    spanError.innerHTML = mensagem
    
    campo.classList.add('active')
    img.classList.add('active')
    spanError.classList.add('active')
}

function setSuccess(campo) {
    const img = campo.parentNode.querySelector('img')
    const spanError = campo.parentNode.querySelector('.error')

    spanError.innerHTML = ""
    
    campo.classList.remove('active')
    img.classList.remove('active')
    spanError.classList.remove('active')
}

function testInputsValues(event) {
    return [nameValidate(event), lastNameValidate(event), emailValidate(event), passwordValidate(event)].every(value => value == false)
}

function validaForm(event) {    
    const completeForm = testInputsValues(event)

    if (!completeForm) {
        event.preventDefault()
    }
}

form.addEventListener('submit', validaForm)
form[0].addEventListener('blur', nameValidate)
form[1].addEventListener('blur', lastNameValidate)
form[2].addEventListener('blur', emailValidate)
form[2].addEventListener('invalid', e => e.preventDefault())
form[3].addEventListener('blur', passwordValidate)