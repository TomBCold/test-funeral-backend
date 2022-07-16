const { Company } = require('../db/models');

// const bodyCompany = {
//   contactId: 1,
//   name: 'ООО Фирма «Перспективные захоронения»',
//   shortName: 'Перспективные захоронения',
//   businessEntity: 'ОАО',
//   contract: JSON.stringify({
//     no: '12345',
//     issue_date: '2015-03-12T00:00:00Z',
//   }),
//   type: ['agent', 'contractor'],
//   status: 'active',
//   address: 'Moscow',
//   photo: file,
// };

class CompaniesController {
  async getCompany(req, res) {
    const { id } = req.query;
    try {
      const foundCompany = await Company.findByPk(id);
      return res.status(200)
        .json(foundCompany);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  async createCompany(req, res) {
    const {
      contactId,
      name,
      shortName,
      businessEntity,
      type,
      contract,
      status,
      address,
    } = req.body;
    const photo = `${URL}0b8fc462dcabf7610a91.png`;
    try {
      const newCompany = await Company.create({
        contactId,
        name,
        shortName,
        businessEntity,
        contract,
        type,
        status,
        address,
        photo,
      });
      return res.status(200)
        .json(newCompany);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  async updateCompany(req, res) {
    const { id } = req.query;
    const {
      contactId,
      name,
      shortName,
      businessEntity,
      contract,
      type,
      status,
      address,
    } = req.body;
    const photo = `/${req.file.filename}`;
    const updatedAt = new Date();
    try {
      const updatedCompany = await Company.update({
        contactId,
        name,
        shortName,
        businessEntity,
        contract,
        type,
        status,
        address,
        photo,
        updatedAt,
      }, {
        where: { id },
        returning: true,
        plain: true,
      });
      const company = updatedCompany[1].dataValues;
      return res.status(200)
        .json(company);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  async delCompany(req, res) {
    const { id } = req.query;
    try {
      await Company.destroy({ where: { id } });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
}

module.exports = new CompaniesController();
