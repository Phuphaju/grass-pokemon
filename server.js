const express = require('express')
const app = express()
const PORT = 8000
const cors = require(cors)

app.use(cors())

const pokemon = {
    'bulbasaur':{
        'region': 'Kanto',
        'Type': 'Grass, Poison',
        'Abilities': 'Overgrow, Chlorophyll',
    },
    'chicorita':{
        'region': 'Jhoto',
        'Type': 'Grass',
        'Abilities': 'Overgrow, Leaf Guard'
    },
    'treecko':{
        'region': 'Hoenn',
        'Type': 'Grass',
        'Abilities': 'Overgrow, Leaf Guard'
    },
    'Turtwig':{
        'region': 'Spoilers...'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const pokemonName = req.params.name.toLowerCase()
    if(pokemon[pokemonName]){
        res.json(pokemon[pokemonName])
    }else{
        res.json(pokemon['Turtwig'])
    }
    // res.json(pokemon)
})

app.listen(PORT, ()=>{
    console.log(`The server is runnning on port ${PORT}! You better go catch it!`)
})