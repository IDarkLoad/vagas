const data = require("../../fakeData");

module.exports = function(req, res) {
  const id = req.query.id;

  const users = data.filter((val) => val.id == id);

  if (users.length === 0) {
    return res.status(400).send("Usuário não encontrado!");
  }

  const { name, job } = req.body;

  data.forEach((val, index) => {
    if (val.id == id) {
      const updatedValues = {
        name: name || val.name,
        job: job || val.job,
      };
      data[index] = { ...data[index], ...updatedValues };
    }
  });

  const updatedUser = data.find((d) => d.id == id);

  res.send(updatedUser);
};
