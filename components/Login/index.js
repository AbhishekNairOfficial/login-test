import { useRef, useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Input from '../Input'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+$/
const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

const Login = () => {
	const [showSuccess, setShowSuccess] = useState(false)
	const emailRef = useRef()
	const passwordRef = useRef()

	const Alert = (props) => {
		return <MuiAlert elevation={6} variant='filled' {...props} />
	}

	const handleClose = () => {
		setShowSuccess(false)
	}

	const validate = () => {
		if (!EMAIL_REGEX.test(emailRef.current.value)) {
			emailRef.current.setError('Please enter a valid email')
			return false
		}
		if (!PASSWORD_REGEX.test(passwordRef.current.value)) {
			passwordRef.current.setError('Please enter a valid password')
			return false
		}
		return true
	}

	const onSubmit = () => {
		const validInput = validate()
		if (!validInput) {
			return
		}
		const body = {
			email: emailRef.current,
			password: passwordRef.current,
		}
		setTimeout(() => {
			// make network call
			emailRef.current.clear()
			passwordRef.current.clear()
			setShowSuccess(true)
		}, 800)
	}

	console.count('render')

	return (
		<>
			<Snackbar
				open={showSuccess}
				autoHideDuration={6000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity='success'>
					Login Successful!
				</Alert>
			</Snackbar>
			<h1>Login</h1>
			<Input
				type='email'
				label='Email Address'
				autoComplete='false'
				ref={emailRef}
			/>
			<Input label='Password' type='password' ref={passwordRef} />
			<hr />
			<Button onClick={onSubmit} variant='contained' color='primary'>
				Login
			</Button>
		</>
	)
}

export default Login
