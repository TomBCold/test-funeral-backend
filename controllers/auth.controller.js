const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const { User } = require('../db/models');
const logger = require('../services/logger')(module);

const generateAccessToken = (user) => {
  const payload = {
    user,
  };
  return jwt.sign(payload, config.jwt_secret, { expiresIn: config.jwt_ttl });
};

class AuthController {
  async authorization(req, res) {
    try {
      const user = req?.query;
      const checkUser = await User.findOne({ where: { username: user.username } });
      if (!checkUser) {
        logger.error(`Пользователь ${user.username} не найден`);
        return res.status(400).json({ error: `Пользователь ${user.username} не найден` });
      }
      const validPassword = bcrypt.compareSync(user.password, checkUser.password);
      if (!validPassword) {
        return res.status(400).json({ error: 'Введен неверный пароль' });
      }
      const token = generateAccessToken(user);
      res.header('Authorization', `Bearer ${token}`);
      return res.status(200).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  async registration(req, res) {
    try {
      const { username, password, email } = req.body;
      const checkUser = await User.findOne({ where: { username } });
      if (checkUser) {
        return res.status(400).json({ error: 'Пользователь с таким логином уже существует' }).end();
      }
      const hashedPass = bcrypt.hashSync(password, 7);
      await User.create({ username, password: hashedPass, email });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
}

module.exports = new AuthController();
