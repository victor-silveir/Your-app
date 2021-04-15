import axios, { AxiosResponse } from 'axios'
import UseSWR from 'swr'

interface CustomerData {
    id?: number;
    name: string;
    cpf: string;
    zipCode: string;
    address: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    phones: { stateCode: string, number: string, type: number }[];
    emails: string[];
}

export const api = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: { 'Access-Control-Allow-Origin': '*' }
});

export function getAllCustomer<Data = any>(url: string, token: string) {
    const { data, error } = UseSWR<Data>(url, async url => {
        const response = await api.get(`${url}`)

        const data = response.data;

        return data;
    });
    return { data, error };
};

