import { createServer } from 'http'; // Importa o módulo HTTP
import { mes, dia } from './datas.js';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Datas: ' + mes() + ', ' + dia());
  res.end();
});

server.listen(8080, () => { // Inicia o servidor na porta 8080
  console.log('Server running at http://localhost:8080/');
});