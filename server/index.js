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
    host: "us-cdbr-east-06.cleardb.net",
    user: "b8e2f6e7660b84",
    password: "2072aa8f",
    database: "heroku_7d255f93c1022de",
});

app.post("/register", (req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "INSERT INTO user (full_name, email, password) VALUES (?,?,?)",
        [fullname, email, password],
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

function login(email, password, callback) {

    const query = 'SELECT id, email, password FROM users WHERE email = ?';

    connection.query(query, [email], function (err, results) {
        if (err) return callback(err);
        if (results.length === 0) return callback(new WrongUsernameOrPasswordError(email));
        const user = results[0];

        bcrypt.compare(password, user.password, function (err, isValid) {
            if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

            callback(null, {
                user_id: user.id.toString(),
                email: user.email
            });
        });
    });
}
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
app.post("/signin", (req, res) => {
    const company_email = req.body.company_email;
    const company_password = req.body.company_password;
    db.query(
        "SELECT * FROM user_company WHERE company_email = ? AND company_password = ?",
        [company_email, company_password],
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
// app.get("/profileuiser", (req,res)=>{
//     const 
// })




app.post("/createpost", async (req, res) => {
    const positionReq = req.body.positionReq;
    const salary = req.body.salary;
    const jobDesc = req.body.jobDesc;
    const requirement = req.body.requirement;

    const sqlInsert = "INSERT INTO post (position, salary, job_desc, requirement) VALUES (?,?,?,?)";
    db.query(sqlInsert, [positionReq, salary, jobDesc, requirement], (err, result) => {
        console.log(result);
    })
})

app.post("/applypost", async (req, res) => {
    const reasons = req.body.reasons;
    const describe = req.body.describe;
    const sqlInsert = "INSERT INTO applicants (reasons, describe) VALUES (?,?)";
    db.query(sqlInsert, [reasons, describe], (err, result) => {
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

