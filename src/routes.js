const express = require('express');
const middleware = require('./middleware');
const teste1 = require('./Controllers/teste1');
const teste2 = require('./Controllers/teste2');
const teste3 = require('./Controllers/teste3');
const teste4 = require('./Controllers/teste4');
const teste5 = require('./Controllers/teste5');

const routes = express.Router();

routes.get("/user", middleware.validName, teste1.getUser);
routes.get("/users", teste1.getUsers);
routes.post("/users", middleware.thereIsUser, teste2);
routes.delete("/users", middleware.authenticateToken, teste3);
routes.put("/users", middleware.authenticateToken, teste4);
routes.get("/users/access", teste5);

module.exports = routes;