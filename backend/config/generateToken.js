const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "reachmeVerification", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
