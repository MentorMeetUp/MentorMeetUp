module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aboutMe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skill1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill5: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  return Users;
};
