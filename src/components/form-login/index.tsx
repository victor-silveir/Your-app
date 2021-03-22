import { Formik } from "formik";
import { InputField } from "../basic components/input-field/styles";
import { Formlogin } from './styles'
import { ButtonCustom } from '../basic components/button/styles'
import { LoginSchema } from "../../services/validation/YupSchemas";
import { useCallback } from "react";
import { useAuth } from "../../hooks/AuthHook";

function FormLogin({initialData}) {

    const {isAuth, login} = useAuth();

    const Login = useCallback((values) => {
        console.log(values);
        login({
            userName: values.userName,
            password: values.password
        });
        console.log(isAuth)
    }, [])

    return (
        <Formik initialValues={initialData} onSubmit={Login} validationSchema={LoginSchema}>
            {({ errors, touched }) => (
            <Formlogin>
            <img src="img/Hourglass.svg"/>
            <h3>YourApp - An app to CRUD</h3>
            <h1>Login</h1>
                <InputField name='userName' placeholder="Username: " padding="1rem"/>
                {touched.userName && errors.userName && <div>{errors.userName}</div>}
                <InputField name='password' placeholder="Password: " padding="1rem"/>
                {touched.password && errors.password && <div>{errors.password}</div>}
                <ButtonCustom type="submit">Login</ButtonCustom>
            </Formlogin>
            )}
        </Formik>
    );
};

export default FormLogin;