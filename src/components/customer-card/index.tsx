import { isPropertySignature } from "typescript";
import Button from "../basic components/button";
import { Customer } from "./styles";


export function CustomerCard({ render, text }) {
    return (
        <Customer>
            <h1>Customers</h1>
            <p>Control your customers information in the list or register new customers!</p>
            <Button height='3.5rem' fontWeight='400' color='#232129' type='button' onClick={render}>{text}</Button>
        </Customer>
    );
};

export function CustomerUpdateCard({ enableUpdate, enableDelete }) {
    return (

        <Customer>
            <h1>Customers</h1>
            <p>Control your customers information in the list or register new customers!</p>
            <Button backgroundHover='blue' height='4.5rem' fontWeight='400' color='#232129' type='button' onClick={enableUpdate}>Update Customer</Button>
            <Button backgroundHover='red' height='4.5rem' fontWeight='400' color='#232129' type='button' onClick={enableDelete}>Delete Customer</Button>
        </Customer>
    );
};