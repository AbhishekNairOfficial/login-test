import { forwardRef, useImperativeHandle, useState } from 'react'
import TextField from '@material-ui/core/TextField'

const Input = (props, ref) => {
	const [value, setValue] = useState('')
	const [error, setError] = useState('')

	const onChange = (e) => {
		setError('')
		setValue(e.target.value)
	}

	useImperativeHandle(ref, () => ({
		value: value,
		clear: () => {
			setValue('')
			setError('')
		},
		setError: setError,
	}))

	return (
		<TextField
			value={value}
			error={!!error}
			helperText={error}
			onChange={onChange}
			{...props}
		/>
	)
}

export default forwardRef(Input)
