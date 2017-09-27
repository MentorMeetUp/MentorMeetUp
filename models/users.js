module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    aboutMe: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skill1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cost1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    skill2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cost2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    skill3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cost3: {
      type: DataTypes.STRING,
      allowNull: true
    }
}, {
      timestamps: false    
  });

    return Users;
};
