const data = require("../../fakeData");

module.exports = function(req, res) {
  const { name } = req.query;

  const userIndex = data.findIndex((val) => val.name === name);

  if (userIndex === -1) {
    return res.status(400).send("Usuário não encontrado!");
  }

  data.splice(userIndex, 1);

  res.status(204).send("success");
};
