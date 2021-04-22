import Button from "../../components/basic components/button";
import { Input } from "../../components/basic components/input/styles";
import { mask, unMask } from 'remask';
import { Span } from "../../components/basic components/span/styles";
import { EmailButtonDiv, AdressSection1, AdressSection2, ButtonDiv, CodeDiv, CpfDiv, EmailList, NameDiv, NewCustomersContent, NumberDiv, PersonalInfoDiv, PhonesContent, PhonesList, RadioGroup, CustomerButtonDiv, EmailDiv, EmailContent, Content, RadioDiv } from "../new-customer-form/styles";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { UpdateCustomerSchema } from "../../services/validation/YupSchemas";
import { ErrorField } from '../../components/basic components/ErrorsMessage/styles'
import { putCustomer } from "../../services/axios/api";
import { CustomerData } from "../../models/CustomerData";

function UpdateCustomerForm(props) {

    const { register, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: props.initialvalues,
        resolver: yupResolver(UpdateCustomerSchema)
    });
    const { fields: phones, append: appendPhone, remove: removePhone } = useFieldArray({
        control,
        name: "phones",
    });
    const { fields: emails, append: appendEmail, remove: removeEmail } = useFieldArray({
        name: "emails",
        control,

    })

    return (
        <NewCustomersContent autoComplete="off" isdisabled={props.isdisabled} isvisible={props.isvisible} onSubmit={handleSubmit(async values => {

            values.zipCode = unMask(values.zipCode);
            values.cpf = unMask(props.initialvalues.cpf);
            values.phones.map((_, index) => {
                values.phones[index].stateCode = unMask(values.phones[index].stateCode);
                values.phones[index].number = unMask(values.phones[index].number);
            });

            putCustomer<CustomerData>(props.initialvalues.id, values);

        })}>
            <h2>Personal info: </h2>
            <Content>
                <ErrorField>
                    <div>{errors.name?.message}</div>
                    <div>{errors.cpf?.message}</div>
                </ErrorField>
                <PersonalInfoDiv>
                    <NameDiv>
                        <Input padding='0.5rem' width='80%' name="name" placeholder="Name*: " ref={register} isErrored={errors.name} />
                    </NameDiv>
                    <CpfDiv>
                        <Input disabled={true} padding='0.5rem' width='80%' name="cpf" placeholder="CPF*: " ref={register} onChange={(event) => {
                            const { value } = event.target;
                            event.target.value = mask(value, ['999.999.999-99']);
                        }} isErrored={errors.cpf} />
                    </CpfDiv>
                </PersonalInfoDiv>
            </Content>
            <h2>Address:</h2>
            <Content>
                <ErrorField>
                    <div>{errors.zipCode?.message}</div>
                    <div>{errors.address?.message}</div>
                    <div>{errors.district?.message}</div>
                    <div>{errors.city?.message}</div>
                    <div>{errors.state?.message}</div>
                </ErrorField>
                <AdressSection1>
                    <Input padding='0.5rem' width='25%' name="zipCode" placeholder="CEP*:" ref={register} onChange={(event) => {
                        const { value } = event.target;
                        event.target.value = mask(value, ['99999-999']);
                    }} isErrored={errors.zipCode} />
                    <Input padding='0.5rem' width='80%' name="address" placeholder="Logradouro:*" ref={register} isErrored={errors.address} />
                    <Input padding='0.5rem' width='50%' name="complement" placeholder="Complemento:" ref={register} />
                </AdressSection1>
                <AdressSection2>
                    <Input padding='0.5rem' width='50%' name="district" placeholder="Bairro*:" ref={register} isErrored={errors.district} />
                    <Input padding='0.5rem' width='50%' name="city" placeholder="Cidade:*" ref={register} isErrored={errors.city} />
                    <Input padding='0.5rem' width='25%' name="state" placeholder="Estado*:" ref={register} isErrored={errors.state} />
                </AdressSection2>
            </Content>
            <h2>Phones: </h2>
            <Span fontSize={1.2}>Main Phone*:</Span>
            <PhonesContent>
                {phones.map((phone, index) => {

                    return (

                        <PhonesList key={phone.id}>
                            <ErrorField>
                                <div>{errors.phones?.[index]?.stateCode?.message}</div>
                                <div>{errors.phones?.[index]?.number?.message}</div>
                                <div>{errors.phones?.[index]?.type?.message}</div>
                            </ErrorField>
                            <div>
                                <CodeDiv>
                                    <Input padding='0.5rem' width='80%' name={`phones[${index}].stateCode`} placeholder="State Code*: " ref={register()} defaultValue={phone.stateCode} onChange={(event) => {
                                        const { value } = event.target;
                                        const originalValue = unMask(value);
                                        event.target.value = mask(originalValue, ['(99)']);
                                    }} isErrored={errors.phones?.[index]?.stateCode?.message} />
                                </CodeDiv>
                                <NumberDiv>
                                    <Input padding='0.5rem' width='80%' name={`phones[${index}].number`} placeholder="Number*: " ref={register()} defaultValue={phone.number} onChange={(event) => {
                                        const { value } = event.target;
                                        const originalValue = unMask(value);
                                        event.target.value = mask(originalValue, ['9999-9999', '99999-9999']);
                                    }} isErrored={errors.phones?.[index]?.number?.message} />
                                </NumberDiv>
                            </div>
                            <RadioDiv>
                                <label>Phone Type*: </label>
                                <RadioGroup isErrored={errors.phones?.[index]?.type?.message}>
                                    <label>
                                        <input disabled={props.isdisabled} type="radio" name={`phones[${index}].type`} value="RESIDENCIAL" ref={register()} defaultChecked={phones[index].type == "RESIDENCIAL"} />
                                        <div>
                                            Residencial
                                                    </div>
                                    </label>
                                    <label>
                                        <input disabled={props.isdisabled} type="radio" name={`phones[${index}].type`} value="COMERCIAL" ref={register()} defaultChecked={phones[index].type == "COMERCIAL"} />
                                        <div>

                                            Comercial
                                                    </div>
                                    </label>
                                    <label>
                                        <input disabled={props.isdisabled} type="radio" name={`phones[${index}].type`} value="CELULAR" ref={register()} defaultChecked={phones[index].type == "CELULAR"} />
                                        <div>
                                            Celular
                                                    </div>
                                    </label>
                                </RadioGroup>
                            </RadioDiv>
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
                {emails.map((email, index) => {
                    return (

                        <EmailDiv key={email.id}>
                            <EmailContent>
                                <Content>
                                    <ErrorField>
                                        <div>{errors.emails?.[index]?.message}</div>
                                    </ErrorField>
                                    <div>
                                        <Input padding='0.5rem' width='80%' name={`emails.[${index}]`} placeholder="E-mail*:" ref={register()} isErrored={errors.emails?.[index]} />
                                        <Button width='25%' height='2.5rem' fontWeight='400' color='red' type="button" onClick={() => removeEmail(index)}>Delete</Button>
                                    </div>
                                </Content>
                            </EmailContent>
                        </EmailDiv>
                    )
                })}
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

export default UpdateCustomerForm;
