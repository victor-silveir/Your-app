import { Formik } from "formik";
import { InputField } from "../basic components/input-field/styles";
import { Formlogin } from './styles'
import { ButtonCustom } from '../basic components/button/styles'



function FormLogin({handleData, initialData}) {
    return (
        <Formik initialValues={initialData} onSubmit={handleData} >
            <Formlogin>
            <img src="img/Hourglass.svg"/>
            <h3>YourApp - An app to CRUD</h3>
            <h1>Login</h1>
                <InputField name='userName' placeholder="Username: " Padding="1rem"/>
                <InputField name='password' placeholder="Password: " Padding="1rem"/>
                <ButtonCustom type="submit">Login</ButtonCustom>
            </Formlogin>
        </Formik>
    );
};

export default FormLogin;