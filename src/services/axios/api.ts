import axios from 'axios'
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
    baseURL: 'http://localhost:8080/'
});

export async function customerPost(data: CustomerData, token) {
    await api.post('/clients/', data, { 
        headers: { 
            'Authorization': `Bearer ${token}` 
        } 
    }).catch((err) => {

        if(err.response.data.status == 400) {
            alert(err.response.data.errors? err.response.data.errors[0].message : err.response.data.msg)
        }

    });
};

export function customerGetAll<Data = any>(token: string) {
    const {data, error} = UseSWR<Data>(token, async token => {
        const response = await api.get('/clients/', { 
            headers: { 
                'Authorization': `Bearer ${token}` 
            } 
        });

        const data = response.data;

        return data;
    });
    return {data, error};
};