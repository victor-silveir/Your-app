import { Formlogin } from './styles'
import { LoginSchema } from "../../services/validation/YupSchemas";
import { useCallback } from "react";
import { useAuth } from "../../hooks/AuthHook";
import { Input } from "../basic components/input/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorField } from "../basic components/ErrorsMessage/styles";
import Button from "../basic components/button";

function FormLogin({initialData}) {

    const {isAuth, login} = useAuth();
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: initialData,
        resolver: yupResolver(LoginSchema)
    });

    const handleLogin = useCallback((values) => {
        console.log(values);
        login({
            userName: values.userName,
            password: values.password
        });
        console.log(isAuth)
    }, [])

    return (
        
            <Formlogin  autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
            <img src="/img/Hourglass.svg"/>
            <h3>YourApp - An app to CRUD</h3>
            <h1>Login</h1>
                <Input name='userName' placeholder="Username: " padding="1rem" ref={register} isErrored={errors?.userName}/>
                {errors?.userName &&
                <ErrorField>
                    <div>{errors.userName?.message}</div>
                </ErrorField>
                }
                <Input name='password' type="password" placeholder="Password: " padding="1rem" ref={register} isErrored={errors?.password}/>
               {errors?.password &&
                   <ErrorField>
                    <div>{errors.password?.message}</div>
                </ErrorField>
                }
                <Button backgroundHover="#ff9000" type="submit">Login</Button>
            </Formlogin>

    );
};

export default FormLogin;