require('dotenv').config({ path: require('find-config')('.env') })

module.exports = 
{
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host":     process.env.DB_HOST,
    "dialect":  process.env.DB_DIALECT,
    "port":     process.env.DB_PORT,
    "EMAIL_USERNAME":process.env.EMAIL_USERNAME,
    "EMAIL_PASSWORD":process.env.EMAIL_PASSWORD
  },
  "test": {
    "username": "postgres",
    "password": "xK47z9Q22rRzpNJsIvs3",
    "database": "railway",
    "host": "containers-us-west-77.railway.app",
    "dialect": "postgres",
    "port": "6404"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host":     process.env.DB_HOST,
    "dialect":  process.env.DB_DIALECT,
    "port":     process.env.DB_PORT,
    "EMAIL_USERNAME":process.env.EMAIL_USERNAME,
    "EMAIL_PASSWORD":process.env.EMAIL_PASSWORD
  }
}
