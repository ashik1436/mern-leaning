const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '143610@Ashik'
});

//home route
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) AS count FROM user`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;

            let count = result[0].count;   // ✅ FIX
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("some error");
    }
});

//show route
app.get("/user",(req,res)=>{
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;

            
           // res.send(result);
           res.render("show.ejs",{users})
        });
    } catch (err) {
        console.log(err);
        res.send("some error");
    }
})

//edit route

app.get("/user/:id/edit",(req,res)=>{
    let { id } =req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            let user =users[0];


            
           // res.send(result);
            res.render("edit.ejs",{user})
        });
    } catch (err) {
        console.log(err);
        res.send("some error");
    }
   
});

//UPDATE (DB) ROUTE 
// UPDATE (DB) Route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;

    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;

            let user = result[0];

            if (formPass != user.password) {
                res.send("WRONG password");
            }else{
                let q2=`UPDATE user SET username = '${newUsername}' WHERE id ='${id}'`;
                connection.query(q2,(err,result)=>{
                    if (err) throw err;
                    res.redirect("/user")
                    
                })
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});


app.listen(8080, () => {
    console.log("app is listening on port 8080");
});
