import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from "react";
import { AuthCredentialsModel } from "../models/AuthCredentialsModel";
import { api } from "../services/axios/api";
import jwt from 'jsonwebtoken'
import Router from "next/router";
import LoginPage from "../../pages";
import Unauthorized from "../../pages/AccessDenied";
import Home from "../../pages/home";
interface AuthState {
    token: string;
}

interface AuthContextData {
    isAuth: boolean;
    login(credentials: AuthCredentialsModel): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }) {

    const [data, setData] = useState<AuthState>(() => {

        if (process.browser) {
            const token = localStorage.getItem('@YourApp:token');

            if (token) {
                const decodedtoken = jwt.decode(token, { complete: true }).payload.exp;
                console.log(decodedtoken)
                const date = new Date().getTime() / 1000
                if (decodedtoken < date) {
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
        }).then((response) => {
            const token = response.headers[('authorization')].substring(7);
    
            localStorage.setItem('@YourApp:token', token);
    
            setData(token => token);
            
        }).finally(() => {
            Router.push('/home')
        });


    }, [])

    return (
        <AuthContext.Provider value={{ login, isAuth: !!data.token }}>
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

const ProtectRoute = ({ children }) => {
    const { isAuth } = useAuth();
    const [isWindow, setisWindow] = useState(false)
    useLayoutEffect(() => {
        if (typeof window !== "undefined") {
            setisWindow(true);
        }
    });
    if (isWindow) {
        if (!isAuth && window.location.pathname !== '/') {
            return < LoginPage />;
        }
    }
    return children;
};

export { AuthProvider, useAuth, ProtectRoute }