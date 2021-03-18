import { ButtonCustom } from "../basic components/button/styles";
import { Customer } from "./styles";


function CustomerCard(render) {
    return (
        <Customer>
            <h1>Customers</h1>
            <p>Control your customers information in the list or register new customers!</p>
            <ButtonCustom type='button' onClick={render}>Register new Customer</ButtonCustom>
        </Customer>
    );
};

export default CustomerCard;