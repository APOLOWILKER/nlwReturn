import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors())
const PORT = 3333;
app.use(express.json())



// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informações 
// POST = Cadastrar informações
// PUT = Atualizar informações
// PATCH = Atualizar informação única de uma entidade.
// DELETE = Deletar informações

app.use(routes);

app.listen(PORT, () => {
  console.log(`HTTP server running! in ${PORT}`)
});


// === SERVIÇOS ESPECIALIZADOS EM ENVIO DE E-MAIL. ===
// MAILGUN
// MAILCHIMP
// MAILTRAP