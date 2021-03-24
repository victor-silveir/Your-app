import { CustomerCard } from "../../src/components/customer-card";
import { Container } from "./styles";
import { Header, MobileHeader } from "../../src/components/header";
import NewCustomerForm from "../../src/components/new-customer-form";
import Background from "../../src/components/basic components/background";
import { useCallback, useState } from "react";
import CustomersList from "../../src/components/customers-list";
import { useAuth } from "../../src/hooks/AuthHook";
import { customerGetAll } from "../../src/services/axios/api";

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

function Customers() {
    
    const [isRendered, setIsRendered] = useState(true);
    const{token} = useAuth();
    const{data, error} = customerGetAll<CustomerData[]>(token);

    
    const handleRender = useCallback(() => {
        setIsRendered(current => !current)
    }, [])
    
    return (
        <Background fixed backgroundImage='img/background2.jpg'>
            <Header />
            <MobileHeader />
            <Container>
                <CustomerCard render={handleRender} />
                {isRendered ? <CustomersList clients={data} />
                    : <NewCustomerForm />
                }
            </Container>
        </Background>
    );
};

export default Customers;