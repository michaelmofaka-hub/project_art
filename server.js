const express = require('express');
const app = express();

// Serve static files (CSS, JS, images)
app.use(express.static(__dirname));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route for the explore page
app.get('/explore', (req, res) => {
    res.sendFile(__dirname + '/explore.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/gallery.html');
});

app.get('/artists', (req, res) => {
    res.sendFile(__dirname + '/index.html#artists');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/index.html#contact');
});

app.get('/sign-in', (req, res) => {
    res.sendFile(__dirname + '/index.html#sign_in');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
