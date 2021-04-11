import { useCallback, useEffect, useState } from "react";
import Background from "../../src/components/basic components/background";
import { CustomerUpdateCard } from "../../src/components/customer-card";
import { Header, MobileHeader } from "../../src/components/header";
import Modal from "../../src/components/modal";
import dynamic from 'next/dynamic'
const UpdateCustomerForm = dynamic(
    () => import("../../src/components/update-customer-form"),
    { ssr: false })
import { useAuth } from "../../src/hooks/AuthHook";
import { api } from "../../src/services/axios/api";
import { Container } from "./styles";
import { mask } from 'remask'
export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
    return {
      props: {
        id,
      },
    };
  }

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


function Customer({id}) {
    const [isDisabled, setIsDisabled] = useState(true);
    const [isOpened, setIsOpened] = useState(false);
    const [client, setClient] = useState<CustomerData>()
    const { isAuth } = useAuth();
    
    useEffect(() => {
        if (isAuth) {
            api.get(`clients/${id}`).then((res) => {
                res.data.cpf = mask(res.data.cpf, ['999.999.999-99']);
                res.data.zipCode = mask(res.data.zipCode, ['99999-999']);
                res.data.phones.map((phone, index) => {
                    res.data.phones[index].stateCode = mask(res.data.phones[index].stateCode, ['(99)'])
                    res.data.phones[index].number = mask(res.data.phones[index].number, ['9999-9999', '99999-9999'])
                    res.data.phones[index].type = res.data.phones[index].type
                });
                setClient(res.data);
            }).catch(err => {
                alert(err.response.data);
            })
        }
    }, [])

    const toggleForm = useCallback(() => {
        setIsDisabled(current => !current)
    }, []);
    const toggleDelete = useCallback(() => {
        setIsOpened(current => !current)
    }, []);

    if (!client) {
        return <></>
    }
    console.log(client);

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