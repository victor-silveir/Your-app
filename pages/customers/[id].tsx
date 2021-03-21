import { useCallback, useState } from "react";
import Background from "../../src/components/basic components/background";
import { CustomerUpdateCard } from "../../src/components/customer-card";
import { Header, MobileHeader } from "../../src/components/header";
import Modal from "../../src/components/modal";
import NewCustomerForm from "../../src/components/new-customer-form";
import { Container } from "./styles";

function Customer() {
    const client = {
        name: 'victor',
        cpf: '068123891238'
    }
    const [isDisabled, setIsDisabled] = useState(true);
    const [isOpened, setIsOpened] = useState(false);

    const toggleForm = useCallback(() => {
        setIsDisabled(current => !current)
    }, []);
    const toggleDelete = useCallback(() => {
        setIsOpened(current => !current)
    }, []);

    return (
        <Background fixed backgroundImage='/img/background2.jpg'>
            <Header />
            <MobileHeader />
            {isOpened && <Modal client={client} openModal={toggleDelete}/>}
            <Container>
                <CustomerUpdateCard enableDelete={toggleDelete} enableUpdate={toggleForm} />
                <NewCustomerForm isdisabled={isDisabled? 1 : 0} isvisible={isDisabled? 1 : 0}/>
            </Container>
        </Background>

    );
};

export default Customer;