'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhoneBook = sequelize.define('PhoneBook', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name must be filled'
        }
      }
    },
    address: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Phone number must be filled'
        }
      }
    },
    email: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  PhoneBook.associate = function(models) {
    // associations can be defined here
  };
  return PhoneBook;
};