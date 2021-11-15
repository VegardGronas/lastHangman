const pg = require('pg');
const dbURI = "postgres://gxvbyoejyhlosm:12871a23ce9b7f2f6af5c64a86d4d6a2ce50a3b3aff6a1ed4d56eb227432195c@ec2-54-171-25-232.eu-west-1.compute.amazonaws.com:5432/dceu1tcfpc4nil";
const connstring = process.env.DATABASE_URL || dbURI;
const pool = new pg.Pool({
    connectionString: connstring,
    ssl: {rejectUnauthorized: false}
});

const dbMethods = {};

dbMethods.createGame = function(progress, word, attempt){
    const hiddenWord = [];

    console.log(progress, word, attempt);
    for(let i = 0; i < attempt.length; i++){
        hiddenWord.push("X");
    }
    const sql = "INSERT INTO newgame (id, progress, word, attempt) VALUES(DEFAULT, $1, $2, $3) RETURNING *";
    const values = [progress, word, hiddenWord.join('')]; 
    return pool.query(sql, values);
}

dbMethods.getWord = function(id){
    const sql = "SELECT * FROM words WHERE id = $1";
    const values = [id]; 
    return pool.query(sql, values);
}

dbMethods.getAllWords = function(){
    const sql = "SELECT * FROM words";
    return pool.query(sql);
}

dbMethods.getGames = function(){
    const sql = "SELECT * FROM newgame";
    return pool.query(sql);
}

module.exports = dbMethods;