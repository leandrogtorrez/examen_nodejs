
import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"
import { User } from "./user.js"


export const Task = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull:{
                msg: 'Ingrese tarea'
            },
        },
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,

    }
})

//relacion uno a muchos











