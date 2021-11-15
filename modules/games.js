const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/games', async (req, res, next) => {
    try{
        const data = await db.getGames();

        if(data.rows.length > 0){
            res.status(200).json(data.rows);
        }
        else{
            throw "Not games to be found";
        }
    }
    catch(err){
        console.log(err);
    }
})

router.post('/add/games', async (req, res, next) => {
    try{
        const allWords = await db.getAllWords();
        const word = allWords.rows[allWords.rows.length -1];
        const data = await db.createGame("Running", word.word, word.word);
        
        if(data.rows.length > 0){
            res.status(200).json({msg: "Game was created"}).end();
        }
        else{
            throw "The game was not created";
        }
    }
    catch(err){
        res.status(500).json("Error in database")
    }
})

router.get('/words', async (req, res, next) => {
    try{
        const data = await db.getWord();

        if(data.rows.length > 0){
            res.status(200).json(data);
        }
        else{
            res.status(400).json("No word");
        }
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;