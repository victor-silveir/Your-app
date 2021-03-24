import { createContext, useCallback, useContext, useLayoutEffect, useState } from "react";
import { AuthCredentialsModel } from "../models/AuthCredentialsModel";
import { api } from "../services/axios/api";
import jwt from 'jsonwebtoken'
import Router from "next/router";
import LoginPage from "../../pages";
import Home from "../../pages/home";

interface AuthState {
    token: string;
}

interface AuthContextData {
    isAuth: boolean;
    token: string;
    login(credentials: AuthCredentialsModel): Promise<void>;
    logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }) {

    const [data, setData] = useState<AuthState>(() => {

        if (process.browser) {
            const token = localStorage.getItem('@YourApp:token');

            if (token) {
                const decodedtoken = jwt.decode(token, { complete: true }).payload.exp;

                const date = new Date().getTime() / 1000;

                if (decodedtoken < date) {
                    localStorage.removeItem('@YourApp:token')

                    return {} as AuthState;
                } else {

                    return { token };
                }
            };

        }
        return {} as AuthState;
    });

    const login = useCallback(async ({ userName, password }) => {

        await api.post('login', {
            userName,
            password
        }).then((response) => {
            const token = response.headers[('authorization')].substring(7);

            localStorage.setItem('@YourApp:token', token);

            setData({ token });

            Router.push('/home');
        });


    }, [])

    const logout = useCallback(() => {

        localStorage.removeItem('@YourApp:token');

        Router.reload();

    }, [])

    return (
        <AuthContext.Provider value={{ login, isAuth: !!data.token, logout, token: data.token }}>
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
    if (typeof window !== "undefined") {
        useLayoutEffect(() => {
            setisWindow(true);
        });
    }
    if (isWindow) {
        if (!isAuth && window.location.pathname !== '/') {
            Router.push('/');
            return < LoginPage />;
        }
        if (isAuth && window.location.pathname == '/') {
            Router.push('/home');
            return < Home />;
        }
    }
    return children;
};

export { AuthProvider, useAuth, ProtectRoute }