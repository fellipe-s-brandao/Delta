import { Container, Content } from "./styles";
import {Link} from 'react-router-dom'


export function Header({ onOpenNewTransactionModal }) {
  return (
    <Container>
      <Content>
        <Link className="buttonMenu" to='/'>Home</Link>
      <Link className="buttonMenu" to='/add'>Adicionar Usuário</Link>
      </Content>
    </Container>
  );
}
