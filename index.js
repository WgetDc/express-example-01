const express = require("express");
const app = express();

app.get("/hola", function (req, res) {
  res.send({
    data: [
      {
        id: "1",
        contenido: "Fracciones",
        curso: "7",
        imagen: "url de la imagem",
      },
      {
        id: "2",
        contenido: "Fracciones 2",
        curso: "7",
        imagen: "url de la imagem 2",
      },
      {
        id: "3",
        contenido: "Fracciones 3",
        curso: "7",
        imagen: "url de la imagem 3",
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
