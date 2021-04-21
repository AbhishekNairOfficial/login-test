import { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+$/
const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showSuccess, setShowSuccess] = useState(false)
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const Alert = (props) => {
		return <MuiAlert elevation={6} variant='filled' {...props} />
	}

	const onEmailChange = (event) => {
		setEmailError('')
		setEmail(event.target.value)
	}

	const onPasswordChange = (event) => {
		setPasswordError('')
		setPassword(event.target.value)
	}

	const handleClose = () => {
		setShowSuccess(false)
	}

	const validate = () => {
		if (!EMAIL_REGEX.test(email)) {
			setEmailError('Please enter a valid email')
			return false
		}
		if (!PASSWORD_REGEX.test(password)) {
			setPasswordError('Please enter a valid password')
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
			email: email,
			password: password,
		}
		setTimeout(() => {
			// make network call
			setEmail('')
			setPassword('')
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
			<TextField
				type='email'
				label='Email Address'
				value={email}
				error={!!emailError}
				helperText={emailError}
				autoComplete='false'
				onChange={onEmailChange}
			/>
			<TextField
				label='Password'
				type='password'
				error={!!passwordError}
				helperText={passwordError}
				value={password}
				onChange={onPasswordChange}
			/>
			<hr />
			<Button onClick={onSubmit} variant='contained' color='primary'>
				Login
			</Button>
		</>
	)
}

export default Login
