import Button from '../basic components/button';
import { Input } from '../basic components/input/styles';
import { ModalContainer, ModalContent, ModalItens, ModalButtons } from './styles'

function Modal({openModal, client}, props) {
    return (
        <ModalContainer {...props}>
            <ModalContent>
                <h2>Are you sure you want do delete? </h2>
                <ModalItens>
                    <label htmlFor="Name">Name: </label>
                    <Input padding='1rem' width='85%' name="Name" value={client.name} disabled={true} />
                </ModalItens>
                <ModalItens>
                    <label htmlFor="Name">CPF: </label>
                    <Input padding='1rem' width='85%' name="CPF" value={client.cpf} disabled={true} />
                </ModalItens>
                <ModalButtons>
                    <Button backgroundHover='red' color='#232129' type="button" onClick={() => { }}>Delete</Button>
                    <Button color='#232129' type="button" onClick={openModal}>Cancel</Button>
                </ModalButtons>
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;