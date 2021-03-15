import { Formik } from "formik";
import { InputField } from "../basic components/input-field/styles";
import { Formlogin } from './styles'



function FormLogin(handleData, initialData) {
    return (
        <Formik initialValues={initialData} onSubmit={handleData} >
            <Formlogin>
                <InputField name='userName'/>
                <InputField name='password'/>
            </Formlogin>
        </Formik>
    );
};

export default FormLogin;