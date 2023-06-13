const data = require("../../fakeData");

module.exports = function(req, res) {
  const name = req.query.name;
  const user = data.find((d) => d.name === name);
  const readCount = user?.read ?? 0;

  res.send(`"Usuário ${name} foi lido ${readCount} vezes."`);
};
