module.exports = {
  HOST: "localhost",
  USER: "assignment",
  PASSWORD: "123456",
  DB: "assignment",
  dialect: "mysql",
  dialectModule: require("mysql2"),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
