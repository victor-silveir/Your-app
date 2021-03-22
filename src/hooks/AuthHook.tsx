import { apiResolver } from "next/dist/next-server/server/api-utils";
import { createContext, useCallback, useState } from "react";
import { AuthCredentialsModel } from "../models/AuthCredentialsModel";
import { api } from "../services/axios/api";

interface AuthState {
    token: string;
}

interface AuthContectData {
    token: string;
    login(credentials: AuthCredentialsModel): Promise<void>;
}

const AuthContext = createContext<AuthContectData>({} as AuthContectData);

function AuthProvider({ children }) {

    const [data, setData] = useState<AuthState>(() => {

        const token = localStorage.getItem('@YourApp:token');
        
        if(token) {
            return token
        }

        return {} as AuthState;
    })

    const login = useCallback(async ({ userName, password }) => {
        const response = await api.post('login', {
            userName,
            password
        });

        const token = response.headers.get('Authorization');

        localStorage.setItem('@YourApp:token', token);

        setData(token)

    }, [])

    return (
        <AuthContext.Provider value={{ login, token: data.token }}>
            { children}
        </AuthContext.Provider>
    );
};