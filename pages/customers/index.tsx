import CustomerCard from "../../src/components/customer-card";
import Background from "../../src/components/basic components/background";
import { Container } from "./styles";
import { Header, MobileHeader } from "../../src/components/header";
import { CostumersDiv, CustomersContent, CustomersItems } from "../../src/components/customers-list/styles";
import Link from 'next/link'
import { Span } from "../../src/components/basic components/span/styles";
import NewCustomerForm from "../../src/components/new-customer-form";

export async function getStaticProps() {
    const res = await fetch(`http://localhost:8080/clients/`, { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTgwMDAxNjE2MTAzNzk4fQ.eC0osSNIPmCsX_xMFCGW43fngNNjjzFO0mE1csq2oTajzC7aTmzdV-DOYRcuVzgiQcrkSbOR733wmIZ7FU-l1A' } })
    const clients = await res.json();

    return { props: { clients } }
}

function Customers({clients}) {
    return (
        <Background  fixed backgroundImage='img/background2.jpg'>
            <Header />
            <MobileHeader />
            <Container>
            <CustomerCard />
            <CustomersContent>
                {clients.map((client) => (
                    <CustomersItems key={client.id}>
                        <Link href={`customers/${client.id}`}>
                        <CostumersDiv>
                            <Span>Name: </Span>
                            <Span>{client.name}</Span>
                        </CostumersDiv>
                    </Link>
                        <Link href={`customers/${client.id}`}>
                        <CostumersDiv>
                            <Span>CPF: </Span>
                            <Span>{client.cpf}</Span>
                        </CostumersDiv>
                    </Link>
                </CustomersItems>
            ))};
        </CustomersContent> 
        <NewCustomerForm />
            </Container>
        </Background>
    );
};

export default Customers;