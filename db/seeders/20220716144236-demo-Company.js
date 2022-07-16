module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [{
      contactId: 2,
      name: 'ООО Фирма «№ 1»',
      shortName: 'Перспективные захоронения',
      businessEntity: 'ОАО',
      contract: JSON.stringify({
        no: '12345',
        issue_date: '2015-03-12T00:00:00Z',
      }),
      type: ['agent', 'contractor'],
      status: 'active',
      address: 'Moscow',
      photo: '/0b8fc462dcabf7610a91.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      contactId: 2,
      name: 'ООО Фирма «№ 2»',
      shortName: 'Перспективные захоронения',
      businessEntity: 'ИП',
      contract: JSON.stringify({
        no: '23456',
        issue_date: '2015-04-12T00:00:00Z',
      }),
      type: ['agent', 'contractor'],
      status: 'active',
      address: 'Moscow',
      photo: '/0b8fc462dcabf7610a91.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      contactId: 2,
      name: 'ООО Фирма «№ 3»',
      shortName: 'Перспективные захоронения',
      businessEntity: 'ОАО',
      contract: JSON.stringify({
        no: '34567',
        issue_date: '2015-05-12T00:00:00Z',
      }),
      type: ['agent', 'contractor'],
      status: 'active',
      address: 'Moscow',
      photo: '/0b8fc462dcabf7610a91.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  },
};
