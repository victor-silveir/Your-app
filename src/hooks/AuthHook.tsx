import { createContext, useCallback, useContext, useState } from "react";
import { AuthCredentialsModel } from "../models/AuthCredentialsModel";
import { api } from "../services/axios/api";
import jwt from 'jsonwebtoken'
interface AuthState {
    token: string;
}

interface AuthContextData {
    token: string;
    login(credentials: AuthCredentialsModel): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }) {

    const [data, setData] = useState<AuthState>(() => {

        if (process.browser) {   
            const token = localStorage.getItem('@YourApp:token');
            
            if (token) {
                const decodedtoken = jwt.decode(token, {complete: true}).payload.exp;
                console.log(decodedtoken)
                const date =  new Date().getTime() / 1000
                if(decodedtoken < date) {
                    console.log('errou')
                    localStorage.removeItem('@YourApp:token')
                    return {} as AuthState;
                } else {
                    console.log(`ta liberado kkk`)
                    return { token };
                }
            };
            
        }
            return {} as AuthState;
    });

    const login = useCallback(async ({ userName, password }) => {
        const response = await api.post('login', {
            userName,
            password
        });

        const token = response.headers[('authorization')].substring(7);

        localStorage.setItem('@YourApp:token', token);

        setData(token);

    }, [])

    return (
        <AuthContext.Provider value={{ login, token: data.token }}>
            { children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('AuthProvider is required to useAuth');
    }

    return context;
};

export { AuthProvider, useAuth }