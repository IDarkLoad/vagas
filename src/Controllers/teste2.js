const { v4: uuidv4 } = require('uuid');
const data = require("../../fakeData");

module.exports = function(req, res) {
  const { name, job } = req.body;

  if (!job) {
    const newUserWithoutJob = {
      id: uuidv4(),
      creatorToken: uuidv4(),
      name,
    };

    data.push(newUserWithoutJob);

    return res.status(201).send(newUserWithoutJob);
  }

  const newUser = {
    id: uuidv4(),
    creatorToken: uuidv4(),
    name,
    job,
  };

  res.status(201).send(newUser);

  data.push(newUser);
};