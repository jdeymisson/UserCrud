import { sequelize } from "../instance/mysql";
import { Model, DataTypes } from 'sequelize';


export interface UserInstance extends Model {
    id: number,
    email: string,
    name: string,
    cidade: string
}

export const User = sequelize.define<UserInstance>("User", {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        cidade: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'usuario',
        timestamps: false
    })