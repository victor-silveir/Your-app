import axios from 'axios'
import { url } from 'node:inspector';
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

export async function customerPost(data: CustomerData, token) {
    await api.post('/clients/', data).catch((err) => {

        if (err.response.data.status == 400) {
            alert(err.response.data.errors ? err.response.data.errors[0].message : err.response.data.msg)
        }

    });
};

export function getAllCustomer<Data = any>(url: string, token: string) {
    const { data, error } = UseSWR<Data>(url, async url => {
        const response = await api.get(`${url}`)

        const data = response.data;

        return data;
    });
    return { data, error };
};

export async function getCustomerById(id) {
    await api.get(`clients/${id}`)
}
