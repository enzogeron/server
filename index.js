const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear el body JSON
app.use(bodyParser.json());

// Endpoint POST que recibe y devuelve un JSON
app.post('/api/bonification', (req, res) => {
  // Obtener el JSON recibido en la solicitud
  const requestData = req.body;

  console.log(requestData);

  // Procesar los datos recibidos (puedes hacer algún cálculo o manipulación aquí)
  const responseData = {
    message: 'JSON recibido y procesado exitosamente',
    data: requestData
  };
  
  // Enviar la respuesta JSON
  res.json({
    "components": [
      {
          "idComponent": 1,
          "component": "Bonificacion",
          "values": {
              "elementX": 2000,
              "elementY": 5000
          },
          "function": "fnCalcularPorcentaje",
          "result": 15000
      }
  ],
  "finalCalculation": 6000
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server on -> port ${port}`);
});