import dotenv from 'dotenv';
import { dirname, resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express';

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

class App {
  constructor() {
    this.app = express(); // vai ser setado pelo express
    this.middlewares(); // vai ser chamado
    this.routes(); // vai ser chamado tbm;
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app; // atenção eu estava invocando a função ao invez do methodo ...
