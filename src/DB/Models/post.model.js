import { sequelize } from "../db.connection.js";
import { DataTypes } from "sequelize";

export const PostModel = sequelize.define(
    'Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            field: "P_id"
        },

        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "P_title"
        },

        content: {
            type: DataTypes.STRING(300),
            allowNull: false,
            field: "P_content"
        }
    }, {
        paranoid: true,
        createdAt: 'P_createAt',
        updatedAt: "P_updatedAt"
    }
)