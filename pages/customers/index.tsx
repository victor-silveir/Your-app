import { CustomerCard } from "../../src/components/customer-card";
import { Container } from "./styles";
import { Header, MobileHeader } from "../../src/components/header";
import NewCustomerForm from "../../src/components/new-customer-form";
import Background from "../../src/components/basic components/background";
import { useCallback, useState } from "react";
import CustomersList from "../../src/components/customers-list";
import { useAuth } from "../../src/hooks/AuthHook";
import { useGet } from "../../src/services/axios/api";
import { CustomerData } from "../../src/models/CustomerData";

function Customers() {

    const [isRendered, setIsRendered] = useState(true);
    const { data } = useGet<CustomerData[]>('clients/');
    const handleRender = useCallback(() => {
        setIsRendered(current => !current)
    }, [])

    return (
        <Background fixed backgroundImage='/img/background2.jpg'>
            <Header />
            <MobileHeader />
            <Container>
                <CustomerCard text={isRendered ? "Register new Customer" : "View Customers"} render={handleRender} />
                {isRendered ? <CustomersList clients={data} />
                    : <NewCustomerForm />
                }
            </Container>
        </Background>
    );
};

export default Customers;