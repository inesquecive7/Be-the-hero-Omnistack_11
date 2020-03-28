const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * informar que estou a usar JSON:
 */
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota localhost:333/users
 * Recurso users - tabela da BD
 */
/**
 * Métodos HTTP:
 * 
 * GET - > Buscar/listar info do backend
 * POST: cirar uma info no backend
 * PUT: alterar uma info no backend
 * DELETE: deletar uma info no backend
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: parâmetros nomeados enviados dentro do url/rota após o "?",
  * geralmente servem para:
  * filtros
  * paginação
  * podem ser anexados com &
  * exemplo -- '/users?name=Ines'
  * exemplo -- 'users?page=2&idade=15'
  * 
  * 
  * 
  * Route Params: usados para identificar um único recurso
  * exemplo -- '/users/:id' '/users/1'(td o q vem depois da barra é um id)
  * 
  * Request Body: corpo da requisição usado pra criar ou alterar recursos
  * 
  * exemplo  método POST, formato JSON
  */

  /**
   * query builder . KNEX
   */


app.listen(3333);