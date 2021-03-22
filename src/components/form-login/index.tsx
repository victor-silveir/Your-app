import { Formik } from "formik";
import { InputField } from "../basic components/input-field/styles";
import { Formlogin } from './styles'
import { ButtonCustom } from '../basic components/button/styles'
import { LoginSchema } from "../../services/validation/YupSchemas";

function FormLogin({handleData, initialData}) {
    return (
        <Formik initialValues={initialData} onSubmit={handleData} validationSchema={LoginSchema}>
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