const express = require ('./node_modules/express');
const app = express();
const cors = require("./node_modules/cors/lib");
const pool = require ("./db");
const { Pool } = require('pg/lib');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//USER LOG IN AND REGISTRATION //




// MAIN DATABASE ROUTES //

//ROUTES//

//CREATE
app.post("/create", async(req,res)=>{
    try {
      const {title,rating,review} = req.body;
      const newCreate = await pool.query(
          "INSERT INTO movielist (title,rating,review) VALUES($1,$2,$3) RETURNING *",
          [title,rating,review]
      );
      res.json (newCreate.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//GET ALL

app.get("/create", async (req,res) => {
    try {
       const allTodos = await pool.query ("SELECT * FROM movielist");
       res.json (allTodos.rows); 
    } catch (error) {
        console.error(error.message);  
    }
});

// GET ONE

app.get("/create/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query ("SELECT * FROM movielist WHERE movie_id = $1",
        [id]);
        res.json (todo.rows[0]); 
    } catch (error) {
        console.error(error.message);  
    }
});

//DELETE

app.delete("/create/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query ("DELETE FROM movielist WHERE movie_id = $1",
        [id]);
        res.json ("Success"); 
    } catch (error) {
        console.log(error.message);  
    }
});

//UPDATE
app.put("/create/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const {title,rating,review} = req.body;
        const updateTodo = await pool.query ("UPDATE movielist SET title = $1, rating = $2, review = $3 WHERE movie_id = $4",
        [title,rating,review, id]);
        res.json ("Success"); 
    } catch (error) {
        console.log(error.message);  
    }
});

app.listen(5000,() => {
    console.log('Server is active on port 5000');
});