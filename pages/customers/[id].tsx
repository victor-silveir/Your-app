import { useCallback, useState } from "react";
import Background from "../../src/components/basic components/background";
import { CustomerUpdateCard } from "../../src/components/customer-card";
import { Header, MobileHeader } from "../../src/components/header";
import Modal from "../../src/components/modal";
import dynamic from 'next/dynamic'
const UpdateCustomerForm = dynamic(
    () => import("../../src/components/update-customer-form"),
    { ssr: false })
import { useGet } from "../../src/services/axios/api";
import { Container } from "./styles";
import { mask } from 'remask'
import { CustomerData } from "../../src/models/CustomerData";
export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
    return {
        props: {
            id,
        },
    };
}

function Customer({ id }) {
    const [isDisabled, setIsDisabled] = useState(true);
    const [isOpened, setIsOpened] = useState(false);
    const { data, error } = useGet<CustomerData>(`clients/${id}`);
    if (data) {
        data.cpf = mask(data.cpf, ['999.999.999-99']);
        data.zipCode = mask(data.zipCode, ['99999-999']);
        data.phones.map((phone, index) => {
            data.phones[index].stateCode = mask(data.phones[index].stateCode, ['(99)'])
            data.phones[index].number = mask(data.phones[index].number, ['9999-9999', '99999-9999'])
        });
    }
    error && alert(error);


    const toggleForm = useCallback(() => {
        setIsDisabled(current => !current)
    }, []);
    const toggleDelete = useCallback(() => {
        setIsOpened(current => !current)
    }, []);

    if (!data) {
        return <></>
    }
    console.log(data);

    return (
        <Background fixed backgroundImage='/img/background2.jpg'>
            <Header />
            <MobileHeader />
            {isOpened && <Modal client={data} openModal={toggleDelete} />}
            <Container>
                <CustomerUpdateCard enableDelete={toggleDelete} enableUpdate={toggleForm} />
                <UpdateCustomerForm initialvalues={data} isdisabled={isDisabled ? 1 : 0} isvisible={isDisabled ? 1 : 0} />
            </Container>
        </Background>

    );
};

export default Customer;