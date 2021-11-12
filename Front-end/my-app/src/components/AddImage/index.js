import React, { useState } from "react";
import { api } from "../../services/api";
import { Modal } from "../Modal";

import { Div, Container } from "./styles";

export function AddImage({ id, onClose = () => {} }) {
  const [imgPreview, setImgPreview] = useState(null);
  const [imgSelected, setImgSelected] = useState(null);
  const [error, setError] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [textModal, setTextModal] = useState("");

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];

    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
      setImgSelected(selected);
    } else {
      setError(true);
    }
  };

  const handleSaveImage = () => {
    const formatData = new FormData();
    formatData.append("featuredImage", imgSelected);

    const headers = {
      headers: {
        "Content-Type": "featuredImage",
      },
    };

    api
      .post(`user/featured-image/${id}`, formatData, headers)
      .then((res) => {
        setTextModal("Usuário salvo com sucesso!");
        setIsModalVisible(true);
      })
      .catch((err) => {
        setTextModal("Erro ao salvar usuário!");
        setIsModalVisible(true);
      });
  };

  return (
    <Div>
      <Container>
        {error && <p className="errorMsg">Arquivo não suportado!</p>}
        <div
          className="imgPreview"
          style={{
            background: imgPreview
              ? `url("${imgPreview}") no-repeat center/cover`
              : "#fff",
          }}
        >
          {!imgPreview && (
            <>
              <h2>Adiconar imagem para o usuário</h2>
              <label htmlFor="fileUpload" className="customFileUpload">
                Inserir Imagem
              </label>
              <input type="file" id="fileUpload" onChange={handleImageChange} />
              <span>(jpg, jpeg or png)</span>
            </>
          )}
        </div>
        {imgPreview && (
          <>
            <button className="removeImage" onClick={() => setImgPreview(null)}>
              Remove image
            </button>
            <button className="saveImage" onClick={() => handleSaveImage()}>
              {" "}
              Salvar imagem
            </button>
            {textModal === "Usuário salvo com sucesso!" ? (
                <button className="removeImage" onClick={onClose} >
                {" "}
                Fechar
              </button>
            ) : null}
            
          </>
        )}
        {isModalVisible ? (
          <Modal onClose={() => setIsModalVisible(false)}>
            <h3>{textModal}</h3>
          </Modal>
        ) : null}
      </Container>
    </Div>
  );
}
