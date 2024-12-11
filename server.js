
const express = require('express')
const app = express()

//Q1
app.get('/greetings/:username', (req,res) => {
    res.send(`Hello there, ${req.params.username}!`)
})

//Q2
app.get('/roll/:number', (req,res) => {
  
const num = parseInt(req.params.number) //conv string to num 
const randomNum = Math.floor(Math.random() * num) 

    if(num){
        res.send(`You rolled a ${randomNum}`)
    } else {
        res.send('You must specify a number')
    }
})


//Q3

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index',(req,res) => {

    const index =  req.params.index
    const item = collectibles[index - 1]

    if (index <=collectibles.length){
        res.send(`So, you want the ${item.name}? For $${item.price}, it can be yours!`)
    } else{
        res.send(`This item is not yet in stock. Check back soon!`)
    }


})

//Q4
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes/',(req,res) =>{
    const minPrice = req.query['min-price']
    const maxPrice = req.query['max-price']

    if(minPrice) {

    }

})


app.listen(3000, () => {
    console.log('Listening on port 3000')
})

