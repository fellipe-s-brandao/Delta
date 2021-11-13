import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import { Modal } from "../Modal";

import { api } from "../../services/api";

export function EditUser() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [textModal, setTextModal] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);

  const { id } = useParams();

  //Faz um get para a api, trazendo as informações do id que foi passado por url
  useEffect(() => {
    api.get(`/user/${id}`).then((res) => {
      setName(res.data.name);
      setAddress(res.data.address);
    });
  }, [id]);

  //função para fazer o put/editar
  function handleEditUser(event) {
    event.preventDefault();

    if (name === "" && address === "") {
      setTextModal("Preencha todos os campos!");
      setIsModalVisible(true);
    } else {
      const data = {
        name,
        address,
      };

      //Atualiza e informa ao usuário
      api
        .put(`user/atualiza/${id}`, data)
        .then((res) => {
          setTextModal(`Sucesso ao alterar o usuário ${res.data.name}`);
          setIsModalVisible(true);
        })
        .catch((erro) => {
          console.log("erro ao inserir", erro);
          setTextModal(
            "Erro ao inserir usuário. Verifique os dados e tente novamente!"
          );
          setIsModalVisible(true);
        });
    }
  }

  //Funcção para fazer o delete do usuário
  function handleDelete(event) {
    event.preventDefault();

    //Faz o delete, informa ao usuário, limpa os campos e deabilita os inputs
    api
      .delete(`user/deletar/${id}`)
      .then((res) => {
        setTextModal("Sucesso ao Deletar o usuário");
        setIsDisabled(true);
        setIsModalVisible(true);
        setAddress("");
        setName("");
      })
      .catch((erro) => {
        console.log("erro ao deletar", erro);
        setTextModal(
          "Erro ao deletar usuário. Verifique os dados e tente novamente!"
        );
        setIsModalVisible(true);
      });
  }

  return (
    <div>
      <Container>
        <h2>Editar Usuário</h2>
        <h3>Nome</h3>
        <input
          type="text"
          value={name}
          placeholder="nome"
          onChange={(event) => {
            setName(event.target.value);
          }}
          disabled={isDisabled}
        />
        <h3>Endereço</h3>
        <textarea
          name="descricacao"
          id=""
          cols="30"
          rows="10"
          placeholder="Endereço"
          onChange={(event) => setAddress(event.target.value)}
          value={address}
          disabled={isDisabled}
        ></textarea>

        <button className="buttonEdit" onClick={handleEditUser}>
          Editar
        </button>
        <button className="buttonDelete" onClick={handleDelete}>
          Deletar
        </button>

        {isModalVisible ? (
          <Modal onClose={() => setIsModalVisible(false)}>
            <h2>{textModal}</h2>
          </Modal>
        ) : null}
      </Container>
    </div>
  );
}
