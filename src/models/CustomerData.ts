export interface CustomerData {
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