require("dotenv").config({
  path: "../../packages/env/.env",
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL: process.env.BASE_URL,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  WEB_PORT: process.env.WEB_PORT,
  API_PORT: process.env.API_PORT,
  JWT_SECRET: process.env.JWT_SECRET,
};
