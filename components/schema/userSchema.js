import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const userLoginSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
});

export const userLoginDefaultValues = {
  email: 'admin1@example.com',
  password: 'password'
}

export const userRegisterSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string(),
  email: yup.string().required('Email is required').email('Invalid email'),
  phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
  confirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const userRegisterDefaultValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  confirmPassword: '',
  phoneNumber: ''
}

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
});

export const forgotPasswordDefaultValues = {
  email: '',
}
