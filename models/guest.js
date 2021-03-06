module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define("Guest", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric:true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    room_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    checkin: {
      type: DataTypes.DATEONLY
    },
    checkout: {
      type: DataTypes.DATEONLY
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    getterMethods: {
      isAdmin: function() {
        return this.getDataValue('isAdmin');
      }
    }
  });

  Guest.associate = function(models) {
    Guest.hasOne(models.Room);
    Guest.hasOne(models.Table);
/*
    Guest.hasMany(models.Res, {
      foreignKey: 'resId',
      as: 'res',
      onDelete: 'CASCADE',
      constraints: false, 
      allowNull: true, 
      defaultValue: null
    });

*/  
  }

  return Guest;
};
