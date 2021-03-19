import { CustomerCard } from "../../src/components/customer-card";
import { Container } from "./styles";
import { Header, MobileHeader } from "../../src/components/header";
import NewCustomerForm from "../../src/components/new-customer-form";
import Background from "../../src/components/basic components/background";
import { useCallback, useState } from "react";
import CustomersList from "../../src/components/customers-list";

export async function getStaticProps() {
    const res = await fetch(`http://localhost:8080/clients/`, { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTgwMDAxNjE2MTAzNzk4fQ.eC0osSNIPmCsX_xMFCGW43fngNNjjzFO0mE1csq2oTajzC7aTmzdV-DOYRcuVzgiQcrkSbOR733wmIZ7FU-l1A' } })
    const clients = await res.json();

    return { props: { clients } }
}

function Customers({ clients }) {

    const [isRendered, setIsRendered] = useState(true);

    const handleRender = useCallback(() => {
        setIsRendered(current => !current)
    }, [])

    return (
        <Background fixed backgroundImage='img/background2.jpg'>
            <Header />
            <MobileHeader />
            <Container>
                <CustomerCard render={handleRender} />
                {isRendered ? <CustomersList clients={clients} />
                    : <NewCustomerForm />
                }
            </Container>
        </Background>
    );
};

export default Customers;