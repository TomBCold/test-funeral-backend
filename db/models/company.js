const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Contact, { foreignKey: 'contactId' });
    }
  }
  Company.init({
    contactId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    shortName: DataTypes.STRING,
    businessEntity: DataTypes.STRING,
    contract: DataTypes.JSON,
    type: DataTypes.ARRAY(DataTypes.STRING),
    status: DataTypes.STRING,
    address: DataTypes.STRING,
    photo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
