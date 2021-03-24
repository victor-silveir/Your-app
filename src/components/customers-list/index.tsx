import Link from "next/link";
import { Span } from "../basic components/span/styles";
import { CostumersDiv, CustomersContent, CustomersItems } from "./styles";

function CustomersList(props) {
    return (
        <CustomersContent>
                    {props.clients?.map((client) => (
                        <CustomersItems key={client.id}>
                            <Link href="/customers/[id]" as={`/customers/${client.id}`}>
                                <CostumersDiv>
                                    <Span>Name: </Span>
                                    <Span>{client.name}</Span>
                                </CostumersDiv>
                            </Link>
                            <Link href={`/customers/${client.id}`}>
                                <CostumersDiv>
                                    <Span>CPF: </Span>
                                    <Span>{client.cpf}</Span>
                                </CostumersDiv>
                            </Link>
                        </CustomersItems>
                    ))}
        </CustomersContent>
    );
};

export default CustomersList;