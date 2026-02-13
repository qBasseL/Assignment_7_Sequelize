import { Sequelize } from "sequelize";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "../../config/config.service.js";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
});

export const authenticateDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({});
    console.log(`Connected to database Successfully`);
  } catch (error) {
    console.error(`Couldn't connect to database`, error);
  }
};
