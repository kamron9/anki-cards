import { AuthProps } from '@/components/Form/AuthForm'

export const validateForm = (data: AuthProps) => {
	let errors = []

	// Check if all fields are filled
	if (!data.fullName || !data.username || !data.password) {
		errors.push('All fields must be filled')
	}

	// Check if passwords match
	else if (data.password !== data.confirmPassword) {
		errors.push('Passwords do not match')
	}

	// Check if Full Name is at least 3 characters
	else if (data.fullName.length < 3) {
		errors.push('Full Name must be at least 3 characters')
	}
	// Check if Username is at least 3 characters
	else if (data.username.length < 3) {
		errors.push('Username must be at least 3 characters')
	}
	//Check if password is at least 6 characters
	else if (data.password.length < 6) {
		errors.push('Password must be at least 6 characters')
	}

	return errors
}
