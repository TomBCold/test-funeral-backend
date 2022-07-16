const { Contact } = require('../db/models');

// const bodyContact = {
//   lastname: 'Григорьев',
//   firstname: 'Сергей',
//   patronymic: 'Петрович',
//   phone: '79162165588',
//   email: 'grigoriev@funeral.com',
// };

class ContactsController {
  async getContact(req, res) {
    const { id } = req.query;
    try {
      const foundContact = await Contact.findByPk(id);
      return res.status(200).json(foundContact);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  async createContact(req, res) {
    const {
      lastname, firstname, patronymic, phone, email,
    } = req.body;
    try {
      const newContact = await Contact.create({
        lastname, firstname, patronymic, phone, email,
      });
      return res.status(200).json(newContact);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  async updateContact(req, res) {
    const { id } = req.query;
    const {
      lastname, firstname, patronymic, phone, email,
    } = req.body;
    const updatedAt = new Date();
    try {
      const updatedContact = await Contact.update({
        lastname, firstname, patronymic, phone, email, updatedAt,
      }, {
        where: { id },
        returning: true,
        plain: true,
      });
      return res.status(200).json(updatedContact[1].dataValues);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  async delContact(req, res) {
    const { id } = req.query;
    try {
      await Contact.destroy({ where: { id } });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
}

module.exports = new ContactsController();
