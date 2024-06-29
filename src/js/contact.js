const userName = document.querySelector('#name')
const message = document.querySelector('#message')
const mail = document.querySelector('#mail')
const clearBtn = document.querySelector('.clear')
const sendBtn = document.querySelector('.send')

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min ${min} znaków.`)
	} else {
	}
}

const checkMail = mail => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/
	if (reg.test(mail.value)) {
		clearError(mail)
	} else {
		showError(mail, 'E-mail jest niepoprawny')
	}
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form-box')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		alert('Wiadomość została wysłana!')

		userName.value = ''
		mail.value = ''
		message.value = ''
	}
}

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')
	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
	if (input.value === '') {
		console.log('blad')
	} else {
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm([userName, mail, message])
	checkLength(userName, 2)
	checkLength(message, 5)
	checkMail(mail)
	checkErrors()
})

clearBtn.addEventListener('click', e => {
	e.preventDefault()
	;[userName, mail, message].forEach(el => {
		el.value = ''
		clearError(el)
	})
})
