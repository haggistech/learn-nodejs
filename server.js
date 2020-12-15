const express = require('express');
const people = require('./people.json');

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
      title: 'Contact',
    });
 });

 app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
  });
});

  app.get('/tutorials', (req, res) => {
    res.render('tutorials', {
      title: 'Tutorials',
    });
});

app.get('/image-upload', (req, res) => {
    res.render('image-upload', {
      title: 'Upload an Image',
    });
});

app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `About ${person.firstname} ${person.lastname}`,
      person,
    });
  });

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});