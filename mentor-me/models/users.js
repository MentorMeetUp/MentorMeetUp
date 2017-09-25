module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Users;
};
