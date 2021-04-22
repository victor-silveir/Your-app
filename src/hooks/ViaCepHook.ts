import axios from "axios";

export default async function useCep<Data = any>(event) {

    const value  = event.target.value;

    const cep = value.replace(/[^0-9]/g, '');

    if (!cep && cep.lenght != 8) {
        return;
    }

    const promise = await (await axios.get<Data>(`https://viacep.com.br/ws/${cep}/json/`)).data;
    return promise;
}