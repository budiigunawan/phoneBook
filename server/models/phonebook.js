'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhoneBook = sequelize.define('PhoneBook', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  PhoneBook.associate = function(models) {
    // associations can be defined here
  };
  return PhoneBook;
};