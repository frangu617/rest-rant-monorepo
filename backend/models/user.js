'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Comment }) {
      User.hasMany(Comment, { as: 'author', foreignKey: 'author_id' })
    }

  };
  User.init({
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
<<<<<<< HEAD
    email: DataTypes.STRING,
    passwordDigest:DataTypes.STRING
=======
    email: DataTypes.STRING, 
    passwordDigest: DataTypes.STRING
>>>>>>> d048086d0e6ff30c05021b3f1b4bd7424c44e927
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
  });
  return User;
};