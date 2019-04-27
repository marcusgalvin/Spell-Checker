const express = require('express'); //init express
const app = express();
const wordAnswer = require('./data'); //check the data file in directory

//Index Route
app.get('/', (req, res) => {
    const word = req.query.key;
    if (wordAnswer.hasOwnProperty(word) === true) { //boolean value, is this a word or not?
        res.send(
            `<div style= width:100px  background-color:red;">
                <p>YUP!</p>
                        <input id="input" type="text" placeholder="Enter Keyword">
                        <button id="search" onclick="onClick()" id="button">SEARCH NOW</button>


                <h3>The word <p>${word}</p> in a recognized word in the English dictionary.</h3>
            </div>`);
    }
    else {
        res.send(
            `<div width: 100px background-color:red;">
                <p>too bad!</p>
                <h3>There is no match to the word <span>${word}</span> in the English dictionary.</h3>
            </div>`)
    };
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server starts on port ${port}`);
});
