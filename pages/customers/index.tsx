import { CustomerCard } from "../../src/components/customer-card";
import { Header, MobileHeader } from "../../src/components/header";
import NewCustomerForm from "../../src/components/new-customer-form";
import Background from "../../src/components/basic components/background";
import { useCallback, useEffect, useState } from "react";
import CustomersList from "../../src/components/customers-list";
import { useGet } from "../../src/services/axios/api";
import { CustomerData } from "../../src/models/CustomerData";
import Footer from "../../src/components/footer";
import { useAuth } from "../../src/hooks/AuthHook";
import styled from 'styled-components'

const Container = styled.div`
    max-width: 90rem;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    place-content: center;
    margin: 0 auto;

    @media(max-width: 45rem) {
        width: 150%;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
`

function Customers() {

    const [isRendered, setIsRendered] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);
    const { userName } = useAuth();
    console.log(userName);
    const { data } = useGet<CustomerData[]>('clients/');
    const handleRender = useCallback(() => {
        setIsRendered(current => !current)
    }, [])
    
    useEffect(() => {
        if (userName == "comum") {
            setIsAdmin(false);
        }
    }, [])

    return (
        <Background fixed backgroundImage='/img/background2.jpg'>
            <Header />
            <MobileHeader />
            <Container>
                {isAdmin && <CustomerCard text={isRendered ? "Register new Customer" : "View Customers"} render={handleRender} />
                }
                {isRendered ? <CustomersList clients={data} />
                    : <NewCustomerForm />
                }
            </Container>
            <Footer isfixed/>
        </Background>
    );
};

export default Customers;