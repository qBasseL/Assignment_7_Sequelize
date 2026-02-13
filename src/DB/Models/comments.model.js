import { sequelize } from "../db.connection.js";
import {DataTypes} from 'sequelize'

export const CommentModel = sequelize.define(
    'Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            field: "C_id"
        },

        content: {
            type: DataTypes.STRING(300),
            allowNull: false,
            field: "C_content"
        }
    }, {
        paranoid: true,
        createdAt: "C_createdAt",
        updatedAt: "C_updatedAt"
    }
)