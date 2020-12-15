const express = require('express');
const people = require('./people.json');
const sendMail = require('./mail');
const log = console.log;


const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
  });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
      title: `Contact`,
    });
 });

 app.get('/about', (req, res) => {
  res.render('about', {
    title: `About Us`,
  });
});

  app.get('/tutorials', (req, res) => {
    res.render('tutorials', {
      title: `Tutorials`,
    });
});

app.get('/image-upload', (req, res) => {
    res.render('image-upload', {
      title: `Upload an Image`,
    });
});

app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `About ${person.firstname} ${person.lastname}`,
      person,
    });
});

// Configuring our data parsing
app.use(express.urlencoded({
  extend: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
  const { name, subject, email, text } = req.body;
  console.log('Data: ', req.body);

  sendMail(name, email, subject, text, function(err, data) {
      if (err) {
          res.status(500).json({ message: 'Internal Error' });
      } else {
          res.status({ message: 'Email sent!!!' });
      }
  });
  // res.json({ message: 'Message received!!!' })
});

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});