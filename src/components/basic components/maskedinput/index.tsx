import { Field } from 'formik'
import { MaskInput } from './styles'



const MaskedInput(props) = () =>{

    return (
        <MaskInput
        mask={props.mask}
        id={props.id}
        placeholder={props.placeholder} />
        );
    };
}
    
export default MaskedInput;