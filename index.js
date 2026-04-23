const express = require('express');
const app = express();

let visitCount = 0;

app.get('/', (req, res) => {
  visitCount++;
  res.send(`Hello World - CI/CD funcionando! Até agora a pagina foi recarregada ${visitCount} vezes e contando. \n`);
});

app.get('/status', (req, res) => {
  const payload = {
    status: 'online',
    visitas: visitCount,
    timestamp: new Date().toISOString()
  };

  // Gera JSON "pretty" com 2 espaços de indentação e adiciona uma quebra de linha final
  res.type('application/json'); // opcional: define o Content-Type como application/json
  res.send(JSON.stringify(payload, null, 2) + '\n');
});

app.listen(3000);
module.exports = app; // Exportamos para o teste
