const jwt = require('jsonwebtoken');

const user = {
  id: '123',
  username: 'shemaremy',
  email: 'user@example.com'
};

const secretKey = 'your_secret_key';

const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
  expiresIn: '1h'
});

console.log(token);

