import {Container} from './styles';

export function Modal({children, id = 'modal', onClose = () => {}}){

    const handleOutsideClick = (event) => {
        if(event.target.id === id) onClose()
    }

    return(
        <Container id="modal" onClick={handleOutsideClick}>
            <div>
                <div className="textChildren">{children}</div>    
                <button onClick={onClose} className="buttonFechar" >Fechar</button>

            </div>
        </Container>
    )
}