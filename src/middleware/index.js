const data = require("../../fakeData");

const validName = (req, res, next) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send("Digite um nome válido!");
  }

  next();
};

const thereIsUser = (req, res, next) => {
  const { name } = req.body;

  const users = data.filter(val => val.name === name);

  if (users.length > 0) {
    return res.status(400).send("Este usuário já existe!");
  }

  next();
};

const authenticateToken = (req, res, next) => {
  // Validando o token do criador usando o método Bearer Token
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  const { id, name } = req.query;

  const thisValue = id ? "id" : "name";

  const matchingData = data.find(d => d[thisValue] == (id ? id : name));

  if (token === matchingData.creatorToken) {
    return next();
  }

  return res.sendStatus(401);
};

module.exports = {
  validName,
  thereIsUser,
  authenticateToken
};