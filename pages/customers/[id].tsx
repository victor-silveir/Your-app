import { useCallback, useEffect, useState } from "react";
import Background from "../../src/components/basic components/background";
import { CustomerUpdateCard } from "../../src/components/customer-card";
import { Header, MobileHeader } from "../../src/components/header";
import Modal from "../../src/components/modal";
import NewCustomerForm from "../../src/components/new-customer-form";
import UpdateCustomerForm from "../../src/components/update-customer-form";
import { useAuth } from "../../src/hooks/AuthHook";
import { api} from "../../src/services/axios/api";
import { Container } from "./styles";




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


function Customer({ }) {
    const [isDisabled, setIsDisabled] = useState(true);
    const [isOpened, setIsOpened] = useState(false);
    const [client, setClient] = useState<CustomerData>()
    const {isAuth} = useAuth();

    useEffect(() => {
        if(isAuth) {
            api.get('clients/1').then((res) => {
                setClient(res.data);
            }).catch(err => {
                alert(err.response.data);
            })} 
        }, [])

        const toggleForm = useCallback(() => {
            setIsDisabled(current => !current)
        }, []);
        const toggleDelete = useCallback(() => {
            setIsOpened(current => !current)
        }, []);

        if(!client) {
            return <h1>Carregando...</h1>
        }

    return (
        <Background fixed backgroundImage='/img/background2.jpg'>
            <Header />
            <MobileHeader />
            {isOpened && <Modal client={client} openModal={toggleDelete} />}
            <Container>
                <CustomerUpdateCard enableDelete={toggleDelete} enableUpdate={toggleForm} />
                <UpdateCustomerForm initialvalues={client} isdisabled={isDisabled ? 1 : 0} isvisible={isDisabled ? 1 : 0} />
            </Container>
        </Background>

    );
};

export default Customer;