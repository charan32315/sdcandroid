const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = sequelize.define("User", {
id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
}, 
name: {
type: DataTypes.STRING,
allowNull: false,
},
email: {
type: DataTypes.STRING,
allowNull: false,
unique: true,
},
age: {
type: DataTypes.INTEGER,
},
password:{
    type: DataTypes.STRING,
    required: true,
},
});
sequelize.sync({ force: false }) // Creates table if not exists
.then(() => console.log("User table created"))
.catch((err) => console.error(" Error creating table:", err));
module.exports = User;