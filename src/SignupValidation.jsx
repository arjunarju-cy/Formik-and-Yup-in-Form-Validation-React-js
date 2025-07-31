import *  as Yup from 'Yup';


export const SignupValidation = Yup.object({
  name: Yup.string().min(3).required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.string('password')], 'Passwords not matched').required('Password is required')
})