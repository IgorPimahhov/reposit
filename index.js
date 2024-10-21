const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    const name = req.query.name || 'World';
    // Здесь выберите одну из строк для ответа
    res.send(`Hello, ${name}!`); // Оставьте это, если хотите, чтобы приветствие было с "Hello"
    // res.send(`Greetings, ${name}`); // Или используйте эту строку, если хотите "Greetings"
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

