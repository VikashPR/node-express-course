const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mockUserData = [
  {
    name: 'Mark',
  },
  {
    name: 'Jill',
  },
];
app.get('/users', function (req, res) {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData,
  });
});

app.get('/users/:id', function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id,
  });
});
app.post('/login', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = 'billyTheKid';
  const mockPassword = 'superSecret';

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: 'password and username match!',
      token: 'encrypted token goes here',
    });
  } else {
    res.json({
      success: false,
      message: 'password and username do not match',
    });
  }
});

app.post('/product/:id', function (req, res) {
  const pId = req.params.id;
  if (pId == 1) {
    res.json({
      success: true,
      message: 'Mask',
      product: pId,
    });
  } else if (pId == 2) {
    res.json({
      success: true,
      message: 'Gloves',
      product: pId,
    });
  } else {
    res.json({
      success: false,
      message: 'Product not found',
      pId: pId,
    });
  }
});

app.listen(8000, function () {
  console.log('server is bunning');
});
