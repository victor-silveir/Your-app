import { ButtonCustom } from "./styles";

function Button(props) {
    return (
        <ButtonCustom {...props} >{props.children}</ButtonCustom>
    );
};

export default Button;