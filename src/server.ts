import express, { Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv';
import mustache from 'mustache-express';

import routerUsers from './routes/router'

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

//ROTAS
server.use(routerUsers);

server.use((req: Request, res: Response) => res.status(404).send('<h1>Página não encontrada</h1>'));

server.listen(process.env.PORT);