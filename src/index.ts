import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { configMongoose } from '../database';
import router from './router';

const app = express();
const PORT = 8080;

dotenv.config();

console.log(__dirname,'');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

configMongoose();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
