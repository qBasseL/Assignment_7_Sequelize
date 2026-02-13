import { Sequelize } from "sequelize";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "../../config/config.service.js";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  DB_HOST,
  DB_PORT,
  dialect: "mysql",
});

export const authenticateDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({alter: true});
    console.log(`Connected to database Successfully`);
  } catch (error) {
    console.log(`Couldn't connect to database`);
  }
};
