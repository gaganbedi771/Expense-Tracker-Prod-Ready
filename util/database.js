//defines how and to which database/schema we are connecting (username,pass,host address)
require('dotenv').config();

const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(process.env.DBname,process.env.DBusername,process.env.DBpassword,{dialect:"mysql", host:process.env.DBhost});

module.exports=sequelize;