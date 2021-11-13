import { Container, Content } from "./styles";
import { Link } from "react-router-dom";

import logoDelta from "../../assets/images/deltagrupo-logo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        
      <img className="imgDelta" src={logoDelta} alt="Delta" />
        <div>
          <Link className="buttonMenu" to="/">
            Home
          </Link>
          <Link className="buttonMenu" to="/add">
            Adicionar Usuário
          </Link>
        </div>

      </Content>
    </Container>
  );
}
