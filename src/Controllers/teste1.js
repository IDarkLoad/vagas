const data = require("../../fakeData");

const getUser = (req, res) => {
  const { name } = req.query;

  const user = data.find((val) => val.name === name);

  if (user) {
    user.read = user.read ? user.read + 1 : 1;
    return res.status(200).send(user);
  }

  return res.status(400).send("Nenhum usuário foi localizado!");
};

const getUsers = (req, res) => {
  const updatedData = data.map((val) => {
    const addReading = val.read ? val.read + 1 : 1;
    return { ...val, read: addReading };
  });

  res.status(200).send(updatedData);
};

module.exports = {
  getUser,
  getUsers,
};