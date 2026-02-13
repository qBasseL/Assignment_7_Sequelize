import { sequelize } from "../db.connection.js";
import { DataTypes } from "sequelize";

export const UserModel = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
      field: "U_id",
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "U_name",
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      field: "U_email",
      validate: {
        isEmail: { msg: "Please Enter A Proper Email Format" },
      },
    },

    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "U_password",
      validate: {
        checkPasswordLength(value) {
          if (value.length <= 6) {
            throw new Error(`Password Must Be More Than 6 Characters`);
          }
        },
      },
    },

    role: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
      field: "U_role",
      defaultValue: 'user'
    },
  },
  {
    createdAt: "U_createdAt",
    updatedAt: "U_updatedAt",
    paranoid: true,
  },
);
