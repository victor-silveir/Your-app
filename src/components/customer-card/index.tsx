import Button from "../basic components/button";
import { Customer } from "./styles";


function CustomerCard({render}) {
    return (
        <Customer>
            <h1>Customers</h1>
            <p>Control your customers information in the list or register new customers!</p>
            <Button height='3.5rem' fontWeight='400' color='#232129'  type='button' onClick={render}>Register new Customer</Button>
        </Customer>
    );
};

export default CustomerCard;