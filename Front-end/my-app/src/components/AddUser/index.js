import { useState } from "react";
import { Container } from "./styles";
import { Modal } from "../Modal";

import { AddImage } from "../AddImage";
import { api } from "../../services/api";

export function AddUser() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [idUser, setIdUser] = useState("");

  const [featuredImage, setFeaturedImage] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [textModal, setTextModal] = useState("");

  function handleCreateUser(event) {
    event.preventDefault();

    if (name === "" && address === "") {
      setTextModal("Preencha todos os campos!");
      setIsModalVisible(true);
    } else {
      const data = {
        name,
        address,
      };
      api
        .post("user/insere", data)
        .then((res) => {
          setIdUser(res.data._id);
          setFeaturedImage(true);
        })
        .catch((erro) => {
          console.log("erro ao inserir", erro);
          setTextModal(
            "Erro ao inserir usuário. Verifique os dados e tente novamente!"
          );
          setIsModalVisible(true);
        });


      setName("");
      setAddress("");
      setFeaturedImage("");
    }
  }

  return (
    <div>
      <Container onSubmit={handleCreateUser}>
        <h2>Adicionar Usuário</h2>
        <input
          type="text"
          value={name}
          placeholder="nome"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <textarea
          name="descricacao"
          id=""
          cols="30"
          rows="10"
          placeholder="Endereço"
          onChange={(event) => setAddress(event.target.value)}
          value={address}
        ></textarea>

        <button className="buttonSave" type="submit">Cadastrar</button>

        {isModalVisible ? (
          <Modal onClose={() => setIsModalVisible(false)}>
            <h3>{textModal}</h3>
          </Modal>
        ) : null}
      </Container>
      {featuredImage ? (
        <AddImage onClose={() => setFeaturedImage(false)} id={idUser}/>
      ) : null}
    </div>
  );
}
