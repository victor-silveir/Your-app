import * as Yup from 'yup';
import cpfTest from './TestCpf';

export const LoginSchema = Yup.object().shape({
    userName: Yup.string().required('Username is Required!'),
    password: Yup.string().required('Password is Required!')
});

export const CustomerSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!').min(3, 'At least 3 characters is required!').max(100, 'Maximum of 100 characters'),
    cpf: Yup.string().required('CPF is required!').test('cpf', 'CPF invalid', (value) => (cpfTest(value))),
    zipCode: Yup.string().required('Zip Code is required!'),
    address: Yup.string().required('Address is Required!'),
    district: Yup.string().required('District is Required!'),
    city: Yup.string().required('City is Required!'),
    state: Yup.string().required('State is Required!'),
    phones: Yup.array().of(
      Yup.object().shape({
        stateCode: Yup.string().required('State code is required!'),
        number: Yup.string().required('Phone number is required!'),
        type: Yup.number().required('Phone type is required!').nullable()
    })),
    emails: Yup.array().required('At least 1 e-mail is required!').of(Yup.string().required('E-mail is required!').email('Invalid e-mail!'))
});

export const UpdateCustomerSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!').min(3, 'At least 3 characters is required!').max(100, 'Maximum of 100 characters'),
    zipCode: Yup.string().required('Zip Code is required!'),
    address: Yup.string().required('Address is Required!'),
    district: Yup.string().required('District is Required!'),
    city: Yup.string().required('City is Required!'),
    state: Yup.string().required('State is Required!'),
    phones: Yup.array().of(
      Yup.object().shape({
        stateCode: Yup.string().required('State code is required!'),
        number: Yup.string().required('Phone number is required!'),
        type: Yup.string().required('Phone type is required!').nullable()
    })),
    emails: Yup.array().required('At least 1 e-mail is required!').of(Yup.string().required('E-mail is required!').email('Invalid e-mail!'))
});