const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userId",
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "findmeajob",
});

/* app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO usertest (full_name, email, password) VALUES ('anjing', 'anjing@gmail.com', 'anjing123'); "
    db.query(sqlInsert, (err,res) =>{
    })
}); */

app.post("/register", (req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const dob = req.body.dob;

    db.query(
        "INSERT INTO user (full_name, email, password, dob) VALUES (?,?,?,?)",
        [fullname, email, password, dob],
        (err, result) => {
            console.log(err);
        }
    );

});
app.post("/companyregister", (req, res) => {
    const companyname = req.body.companyname;
    const companyemail = req.body.companyemail;
    const companypassword = req.body.companypassword;

    db.query(
        "INSERT INTO user_company (company_name, company_email, company_password) VALUES (?,?,?)",
        [companyname, companyemail, companypassword],
        (err, result) => {
            console.log(err);
        }
    );

});

app.get("/signin", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
})
app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "SELECT * FROM user WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                req.session.user = result;
                console.log(req.session.user);
                res.send({ message: "Successfully Signed in" });

            } else {
                res.send({ message: "WRONG EMAIL/PASSWORD" });
            }
        }
    )
});

app.post("/createpost", (req, res) => {
    const positionReq = req.body.positionReq;
    const salary = req.body.salary;
    const jobDesc = req.body.jobDesc;
    const requirement = req.body.requirement;

    const sqlInsert = "INSERT INTO post (position, salary, job_desc, requirement) VALUES (?,?,?,?)";
    db.query(sqlInsert, [positionReq, salary, jobDesc, requirement], (err, result) => {
        console.log(result);
    })
})
app.get("/explore", (req, res) => {
    const sqlSelect = "SELECT * FROM post";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});
app.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    /* const post = await post/FindByPk(id);
    res.send(post); */
    const sqlSelect = "SELECT * FROM post WHERE id = ?";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
})

app.listen(3001, () => {
    console.log("runnin on port 3001");
});

