
import Button from "../src/components/basic components/button";
import { Input } from "../src/components/basic components/input/styles";
import MaskedInput from "../src/components/basic components/maskedinput";
import { Span } from "../src/components/basic components/span/styles";
import { useAuth } from "../src/hooks/AuthHook";
import { EmailButtonDiv, AdressSection1, AdressSection2, ButtonDiv, CodeDiv, CpfDiv, EmailList, NameDiv, NewCustomersContent, NumberDiv, PersonalInfoDiv, PhonesContent, PhonesList, RadioGroup, CustomerButtonDiv, ErrorContainer, EmailDiv } from "../src/components/new-customer-form/styles";
import { useFieldArray, useForm } from "react-hook-form";

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

const inicialValues: CustomerData = {
    name: '',
    cpf: '',
    zipCode: '',
    address: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    phones: [{
        stateCode: '',
        number: '',
        type: 1
    }],
    emails: [
        ''
    ]
}



function A(props) {
    const { register, handleSubmit, errors, control } = useForm({
        defaultValues: inicialValues,
    });
    const { fields: phones, append: appendPhone, remove: removePhone} = useFieldArray({
        control,
        name: "phones",
    });
    const { fields: emails, append: appendEmail, remove: removeEmail } = useFieldArray({
        control,
        name: "emails",
    })
    const { token } = useAuth();

    return (
        <NewCustomersContent autoComplete="off" onSubmit={handleSubmit(values => {console.log(values) 
        console.log(inicialValues)})}>
            <h1>New Customer</h1>
            <h2>Personal info: </h2>
            <PersonalInfoDiv>
                <NameDiv>
                    <Input padding='0.5rem' width='80%' name="name" placeholder="Name*: " ref={register} />
                </NameDiv>
                <CpfDiv>
                    <Input padding='0.5rem' width='80%' name="cpf" placeholder="CPF*: " ref={register} />
                </CpfDiv>
            </PersonalInfoDiv>
            <h2>Address:</h2>
            <AdressSection1>
                <Input padding='0.5rem' width='25%' name="zipCode" placeholder="CEP*:" ref={register} />
                <Input padding='0.5rem' width='80%' name="address" placeholder="Logradouro:*" ref={register} />
                <Input padding='0.5rem' width='50%' name="complement" placeholder="Complemento:" ref={register} />
            </AdressSection1>
            <AdressSection2>
                <Input padding='0.5rem' width='50%' name="district" placeholder="Bairro*:" ref={register} />
                <Input padding='0.5rem' width='50%' name="city" placeholder="Cidade:*" ref={register} />
                <Input padding='0.5rem' width='25%' name="state" placeholder="Estado*:" ref={register} />
            </AdressSection2>
            <h2>Phones: </h2>
            <Span fontSize={1.2}>Main Phone*:</Span>
            <PhonesContent>
                {phones.map((phone, index) => {

                    return (

                        <PhonesList key={phone.id}>
                            <div>
                                <CodeDiv>
                                    <Input padding='0.5rem' width='80%' name={`phones[${index}].stateCode`} placeholder="State Code*: " ref={register()} defaultValue={phone.stateCode}/>
                                </CodeDiv>
                                <NumberDiv>
                                    <Input padding='0.5rem' width='80%' name={`phones[${index}].number`} placeholder="Number*: " ref={register()} defaultValue={phone.number}/>
                                </NumberDiv>
                            </div>
                            <RadioGroup>
                                                <label>
                                                    <input type="radio" name={`phones[${index}].type`} value={1} ref={register()}/>
                                                    <div>
                                                        Residencial
                                                    </div>
                                                </label>
                                                <label>
                                                    <input type="radio" name={`phones[${index}].type`} value={2}  ref={register()}/>
                                                    <div>

                                                        Comercial
                                                    </div>
                                                </label>
                                                <label>
                                                    <input type="radio" name={`phones[${index}].type`} value={3} ref={register()}/>
                                                    <div>
                                                        Celular
                                                    </div>
                                                </label>
                                            </RadioGroup>
                                            <ButtonDiv>
                                                <Button width='25%' height='3rem' fontWeight='400' color='red' type="button" onClick={() => removePhone(index)}>Delete Phone</Button>
                                            </ButtonDiv>
                        </PhonesList>
                    );
                })}
                <Button width='25%' height='3rem' fontWeight='400' color='#ff9000' type="button" onClick={() => appendPhone({ stateCode: '', number: '', type: '1' })}>New Phone</Button>
            </PhonesContent>
            <h2>E-mails:</h2>
            <EmailList>
                                    {emails.map((email, index) => (
                                        <EmailDiv key={email.id}>
                                            <div>
                                                <Input padding='0.5rem' width='80%' name={`emails.[${index}]`} placeholder="E-mail*:" ref={register()}/>
                                                <Button width='25%' height='2.5rem' fontWeight='400' color='red' type="button" onClick={() => removeEmail(index)}>Delete</Button>
                                            </div>                                  
                                        </EmailDiv>

                                    ))}
                                </EmailList>
                                <EmailButtonDiv>
                                    <Button width='25%' height='3rem' fontWeight='400' color='#ff9000' type="button" onClick={() => appendEmail([''])}>New E-mail</Button>
                                </EmailButtonDiv>
            <CustomerButtonDiv>
                <Button backgroundHover='green' width='40%' height='4rem' fontWeight='400' color='#ff9000' type='submit'>Save Customer</Button>
                <Button backgroundHover='red' width='40%' height='4rem' fontWeight='400' color='#ff9000' type='submit'>Cancel</Button>
            </CustomerButtonDiv>

        </NewCustomersContent>
    );
};

export default A;