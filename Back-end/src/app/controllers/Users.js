import { Router } from "express";
import User from "@/app/schemas/User";
import Multer from "@/app/middleware/Multer";

const router = Router();

router.get("/", (request, response) => {
  User.find()
    .then((data) => {
      const users = data.map((user) => {
        return {
          id: user._id,
          name: user.name,
          address: user.address,
          featuredImage: user.featuredImage,
        };
      });
      response.send(users);
    })
    .catch((error) => {
      console.error("Erro ao obter os dados do usuário", error);
      response.status(400).send({
        error: "Não foi possível obter os dados do usuário. Tente novamente.",
      });
    });
});

router.get("/:idUser", (request, response) => {
  User.findOne({ _id: request.params.idUser })
    .then((data) => {
      if (data) {
        response.send(data);
      } else {
        console.error("Usuário não encontrado");
        return response.status(404).send({ error: "Usuário não encontrado" });
      }
    })
    .catch((error) => {
      console.error("Erro ao obter os dados do usuário", error);
      response.status(400).send({
        error: "Não foi possível obter os dados do usuário. Tente novamente.",
      });
    });
});

router.post("/insere", (request, response) => {
  const { name, address } = request.body;
  User.create({
    name,
    address,
  })
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((error) => {
      console.error("Erro ao salvar no banco de Dados", error);
      response.status(400).send({
        error:
          "Não foi possível salvar o usuário. Verifique os dados e tente novamente.",
      });
    });
});

router.put("/atualiza/:userId", (request, response) => {
  const { name, address, featuredImage } = request.body;

  User.findByIdAndUpdate(
    request.params.userId,
    {
      name,
      address,
      featuredImage,
    },
    { new: true }
  )
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((error) => {
      console.error("Erro ao atualizar usuario no banco de Dados", error);
      response.status(400).send({
        error:
          "Não foi possível atualizar o usuário. Verifique os dados e tente novamente.",
      });
    });
});

router.delete("/deletar/:userId", (request, response) => {
  User.findByIdAndRemove(request.params.userId)
    .then(() => {
      response.send({ message: "Usuário removido com sucesso." });
    })
    .catch((error) => {
      console.error("Erro ao remover usuario", error);
      response.status(400).send({ message: "Erro ao remover usuário." });
    });
});

router.post(
  "/featured-image/:userId",
  Multer.single("featuredImage"),
  (request, response) => {
    const { file } = request;
    if (file) {
      User.findByIdAndUpdate(
        request.params.userId,
        {
          $set: {
            featuredImage: file.path,
          },
        },
        { new: true }
      )
        .then((user) => {
          return response.send({ user });
        })
        .catch((error) => {
          console.error("Erro associar imagem ao usuario", error);
          response
            .status(500)
            .send({ error: "Ocorreu um erro, tente novamente" });
        });
    } else {
      return response.status(400).send({ error: "Nenhuma imagem enviada" });
    }
  }
);

export default router;
