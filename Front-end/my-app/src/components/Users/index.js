import { Container, Avatar } from "./styles";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { api } from "../../services/api";

export function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("user/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Erro ao listar dados", err);
      });
  }, []);

  function urlImage(url){
    const UrlBase = `http://localhost:3003/${url}`;
    return UrlBase;
  }

  function urlEdit(id){
    const UrlBase = `edit/${id}`;
    return UrlBase;
  }

  return (
    <Container>
      {users.map((user) => (
        <div className="cardsUser" key={user.id}>
          <div><Avatar src={urlImage(user.featuredImage)}/></div>
          <h3>Nome: {user.name}</h3>
          <h3>Endereço: {user.address}</h3>
          <Link to={urlEdit(user.id)} className="buttonEdit">Editar</Link>
        </div>
        ))}
      
    
      
    </Container>
  );
}
