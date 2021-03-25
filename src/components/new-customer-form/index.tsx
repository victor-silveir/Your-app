import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import React, { useState } from "react";
import { useAuth } from "../../hooks/AuthHook";
import { customerPost } from "../../services/axios/api";
import { CustomerSchema } from "../../services/validation/YupSchemas";
import Button from "../basic components/button";
import { ErrorField } from "../basic components/ErrorsMessage/styles";
import { InputField } from "../basic components/input-field/styles";
import { Input } from "../basic components/input/styles";
import MaskedInput from "../basic components/maskedinput";
import { Span } from "../basic components/span/styles";
import { EmailButtonDiv, AdressSection1, AdressSection2, ButtonDiv, CodeDiv, CpfDiv, EmailList, NameDiv, NewCustomersContent, NumberDiv, PersonalInfoDiv, PhonesContent, PhonesList, RadioGroup, CustomerButtonDiv, ErrorContainer, EmailDiv } from "./styles";

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

const inicialValues2 = {
    phones: [{
        number: "",
    }],
    emails: [
        ''
    ]

}

function NewCustomerForm(props) {
   const  phones=['']
    const { token } = useAuth();

    return (
        <Formik onSubmit={async (values) => {
           console.log(values)
        }} initialValues={inicialValues} >
            {({ values, errors, touched }) => (
                <NewCustomersContent autoComplete='off' >
                    <h1>New Customer</h1>
                    <h2>Personal Info: </h2>
                    <PersonalInfoDiv>
                        <NameDiv>
                            <InputField padding='0.5rem' width='80%' name="name" placeholder="Name*: " />
                        </NameDiv>
                        <CpfDiv>
                            <InputField padding='0.5rem' width='80%' name="cpf" placeholder="CPF*: " />
                        </CpfDiv>
                    </PersonalInfoDiv>
                    <ErrorContainer>
                        {touched.name && errors.name && <ErrorField>{errors.name}</ErrorField>}
                        {touched.cpf && errors.cpf && <ErrorField>{errors.cpf}</ErrorField>}
                    </ErrorContainer>
                    <h2>Address:</h2>
                    <AdressSection1>
                        <InputField padding='0.5rem' width='25%' name="zipCode" placeholder="CEP*:" />
                        <InputField padding='0.5rem' width='80%' name="address" placeholder="Logradouro:*" />
                        <InputField padding='0.5rem' width='50%' name="complement" placeholder="Complemento:" />
                    </AdressSection1>
                    <AdressSection2>
                        <InputField padding='0.5rem' width='50%' name="district" placeholder="Bairro*:" />
                        <InputField padding='0.5rem' width='50%' name="city" placeholder="Cidade:*" />
                        <InputField padding='0.5rem' width='25%' name="state" placeholder="Estado*:" />
                    </AdressSection2>
                    <ErrorContainer>
                        {touched.zipCode && errors.zipCode && <ErrorField>{errors.zipCode}</ErrorField>}
                        {touched.address && errors.address && <ErrorField>{errors.address}</ErrorField>}
                        {touched.district && errors.district && <ErrorField>{errors.district}</ErrorField>}
                        {touched.city && errors.city && <ErrorField>{errors.city}</ErrorField>}
                        {touched.state && errors.state && <ErrorField>{errors.state}</ErrorField>}
                    </ErrorContainer>
                    <h2>Phones: </h2>
                    <Span fontSize={1.2}>Main Phone*:</Span>
                    <FieldArray name="phones" >
                        {({ remove, push }) => (

                            <PhonesContent>
                                {phones.map((phone, index) => {

                                    return (

                                        <PhonesList key={index}>
                                            <div>
                                                <CodeDiv>
                                                    <InputField padding='0.5rem' width='80%' name={`phones.${index}.stateCode`} placeholder="State Code*: " />
                                                </CodeDiv>
                                                <NumberDiv>

                                                </NumberDiv>
                                            </div>
                                            <InputField name={`phones.${index}.number`}>
                                                {({ field, form }) => {
                                                    return (<MaskedInput
                                                        name={`phones.${index}.number`}
                                                        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                                        id={`phones.${index}.number`}
                                                        placeholder="Phone Number*:" />)
                                                    }} 
                                                    </InputField>
                                            <RadioGroup>
                                                <label>
                                                    <Input type="radio" name={`phones.${index}.type`} value={new Number(1)} checked={values.phones[index].type == new Number(1)} />
                                                    <div>
                                                        Residencial
                                                    </div>
                                                </label>
                                                <label>
                                                    <Input type="radio" name={`phones.${index}.type`} value={new Number(2)} checked={values.phones[index].type == new Number(2)} />
                                                    <div>

                                                        Comercial
                                                    </div>
                                                </label>
                                                <label>
                                                    <Input type="radio" name={`phones.${index}.type`} value={new Number(3)} checked={values.phones[index].type == new Number(3)} />
                                                    <div>
                                                        Celular
                                                    </div>
                                                </label>
                                            </RadioGroup>
                                            <ErrorContainer>
                                                <ErrorMessage name={`phones[${index}].stateCode`} component={ErrorField} />
                                                <ErrorMessage name={`phones[${index}].number`} component={ErrorField} />
                                                <ErrorMessage name={`phones[${index}].type`} component={ErrorField} />
                                            </ErrorContainer>
                                            <ButtonDiv>
                                                <Button width='25%' height='3rem' fontWeight='400' color='red' type="button" onClick={() => remove(index)}>Delete Phone</Button>
                                            </ButtonDiv>
                                        </PhonesList>
                                    )
                                })}
                                <Button width='25%' height='3rem' fontWeight='400' color='#ff9000' type="button" onClick={() => push({ stateCode: '', number: '', type: '' })}>New Phone</Button>
                            </PhonesContent>
                        )}
                    </FieldArray>
                    <h2>E-mails:</h2>
                    <FieldArray name="emails">
                        {({ remove, push }) => (
                            <>
                                <EmailList>
                                    {values.emails.map((email, index) => (
                                        <EmailDiv key={index}>
                                            <div>
                                                <InputField padding='0.5rem' width='80%' name={`emails.${index}`} placeholder="E-mail*:" />
                                                <Button width='25%' height='2.5rem' fontWeight='400' color='red' type="button" onClick={() => remove(index)}>Delete</Button>
                                            </div>
                                            <ErrorContainer>
                                                <ErrorMessage name={`emails[${index}]`} component={ErrorField} />
                                            </ErrorContainer>

                                        </EmailDiv>

                                    ))}
                                </EmailList>
                                <EmailButtonDiv>
                                    <Button width='25%' height='3rem' fontWeight='400' color='#ff9000' type="button" onClick={() => push('')}>New E-mail</Button>
                                </EmailButtonDiv>
                            </>
                        )}
                    </FieldArray>
                    <CustomerButtonDiv>
                        <Button backgroundHover='green' width='40%' height='4rem' fontWeight='400' color='#ff9000' type='submit'>Save Customer</Button>
                        <Button backgroundHover='red' width='40%' height='4rem' fontWeight='400' color='#ff9000' type='submit'>Cancel</Button>
                    </CustomerButtonDiv>
                </NewCustomersContent>
            )}
        </Formik>
    );
};

export default NewCustomerForm;