import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors())           // cross origin resource share
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));  // disponibiliza os arquivos da pasta ../uploads

app.listen(3333);  // fica acessivel na porta 3333