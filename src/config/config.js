```javascript
const config = {
  serverPort: 3000,
  database: {
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'password',
    databaseName: 'mydb'
  },
  otherSettings: {
    setting1: 'value1',
    setting2: 'value2'
  }
};

module.exports = config;
```