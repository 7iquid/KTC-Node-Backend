require('dotenv').config({ path: require('find-config')('.env') })

module.exports = 
{
  "development": {
    "username":  "tamina",
    "password":  "GFIBKE6zWZVdn9QINNowZBZO9eGxBvJf",
    "database":  "tamina",
    "host":     "dpg-cel0nmpa6gdkdn1aqts0-a",
    "dialect":  "postgres",
    "port":      "5432",
    "EMIL_USERNAME": "tavlegktc@gmail.com",
    "EMIL_PASSWORD": "gsqdjhdwyoelcwkx"
  },
  "test": {
    "username":  "postgres",
    "password":  "PW6acPtyfNQokcqAeBcH",
    "database":  "railway",
    "host":     "containers-us-west-77.railway.app",
    "dialect":  "postgres",
    "port":      "6404",
    "EMIL_USERNAME": "tavlegktc@gmail.com",
    "EMIL_PASSWORD": "gsqdjhdwyoelcwkx"
  },
  "production": {
    "username":  "tamina",
    "password":  "GFIBKE6zWZVdn9QINNowZBZO9eGxBvJf",
    "database":  "tamina",
    "host":     "dpg-cel0nmpa6gdkdn1aqts0-a",
    "dialect":  "postgres",
    "port":      "5432",
    "EMIL_USERNAME": "tavlegktc@gmail.com",
    "EMIL_PASSWORD": "gsqdjhdwyoelcwkx"
  },
}
