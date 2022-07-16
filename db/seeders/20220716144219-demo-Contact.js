module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [{
      lastname: 'Григорьев',
      firstname: 'Сергей',
      patronymic: 'Петрович',
      phone: 79162165588,
      email: 'grigoriev@funeral.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      lastname: 'Петров',
      firstname: 'Григорий',
      patronymic: 'Сергеевич',
      phone: 79165678433,
      email: 'petrov@funeral.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      lastname: 'Сергеев',
      firstname: 'Петр',
      patronymic: 'Григорьевич',
      phone: 79168855955,
      email: 'sergeev@funeral.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contacts', null, {});
  },
};
