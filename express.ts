import express from "express";

const app = express();
// const json = express.json()  

app.get('/', (req, res) => {
    res.send({message: "this is the main page"});
});

app.get('/user', (req, res) => {
    res.json({  name:    "Daffa",
                address: "Panggung",
                country: "Indonesia",
    });
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})