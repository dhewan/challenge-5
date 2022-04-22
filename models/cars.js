'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class cars extends Model {
  }
  cars.init({
    nama: DataTypes.STRING,
    tarif: DataTypes.INTEGER,
    ukuran: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
  }); 
  return cars;
};