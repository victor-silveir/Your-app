import axios from 'axios'
import Router from 'next/router';
import useSWR from 'swr'

export const api = axios.create({
    baseURL: ' https://your-app-backend.herokuapp.com/',
    headers: { 'Access-Control-Allow-Origin': '*' }
});

export function useGet<Data = any>(url: string) {
    const { data, error } = useSWR<Data>(url, async url => {
        const response = await api.get(`${url}`)

        const data = response.data;

        return data;
    }, { revalidateOnFocus: true });
    return { data, error };
};

export async function putCustomer<Data = any>(id, values) {
    await api.put<Data>(`/clients/${id}`, values).then(() => {
        Router.reload();
        alert(`Congratulations! Customer ${values.name} was updated!`);
    }).catch((err) => {
        if (err.response.data.status == 400) {
            alert(err.response.data.errors ? err.response.data.errors[0].message : err.response.data.msg)
        } else {
            Router.reload();
            alert(`Ops something went wrong, please try again later!`);
        }

    });
};

export async function deleteCustomer<Data = any>(id, values) {
    await api.delete<Data>(`/clients/${id}`, {data: values}).then(() => {
        Router.push('/customers');
        alert(`Congratulations! Customer ${values.name} was deleted!`);
    }).catch((err) => {
        if (err.response.data.status == 400) {
            alert(err.response.data.errors ? err.response.data.errors[0].message : err.response.data.msg)
        } else {
            Router.reload();
            alert(`Ops something went wrong, please try again later!`);
        }

    });
};

export async function postCustomer<Data = any>(values) {
    await api.post<Data>(`/clients/`, values).then(() => {
        Router.reload();
        alert(`Congratulations! Customer ${values.name} was created!`);
    }).catch((err) => {
        if (err.response.data.status == 400) {
            alert(err.response.data.errors ? err.response.data.errors[0].message : err.response.data.msg)
        } else {
            Router.reload();
            alert(`Ops something went wrong, please try again later!`);
        }

    });
};

