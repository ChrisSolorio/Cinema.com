const router = require ('express').Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require ("../utils/jwtGenerator");
const validInfo = require ("../middleware/validinfo");
const authorization = require ("../middleware/authorization");

//registering

router.post ("/register",validInfo, async (req,res) => {
    try {
        //1. Destructure the req.body

        const {name,email,password} = req.body;

        //check if user exists

        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
            email
        ]);

        if (user.rows.length !== 0) {
            return res.status (401).send ("Email already in use");
        }

        //bcrypt the password
        const saltRound = 10;
        const salt = await bcrypt.genSalt (saltRound);

        const bcryptPassword = await bcrypt.hash (password,salt);

        //enter new user in database
        const newUser = await pool.query ("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", 
        [name, email, bcryptPassword]);

        // Generate json web token

        const token = jwtGenerator(newUser.rows[0].user_id);

        res.json ({token});


        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error in Registration");
    }
});


router.post ("/login", validInfo, async (req,res) =>{
    try {
        //1. destructure the req.body

        const {email,password} = req.body;

        //2.check if user doesn't exist (throw error)

        const user = await pool.query ("SELECT * FROM users WHERE user_email = $1", [
            email
        ]);

        if (user.rows.length === 0) {
            return res.status(401).json("Password or email is incorrect")
        }

        //3. check if incoming password is the same as database password
        const validPassword = await 
        bcrypt.compare (password, user.rows[0].user_password);

        if (!validPassword) {
            return res.status(401).json ("Password or email is incorrect")
        }

        //4. Give them the jwt token
        const token = jwtGenerator(user.rows[0].user_id);

        res.json({token})
        
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.get("/verify", authorization, async(req,res) => {
    try {

        res.json(true);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;