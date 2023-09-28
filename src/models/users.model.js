import { Model } from "sequelize";
class User extends Model {
    static associate(models) {
        // Define associations with other models if needed
    }
}

export default (sequelize, Sequelize) => {
  User.init(
    {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      }
},
{
  sequelize,
  modelName: "User",
}
    );
    return User;
}



  