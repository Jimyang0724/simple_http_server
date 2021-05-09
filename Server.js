const express = require('express');
const app = express();
const port = 3000;
let users = [];


app.get('/', (req, res) => {
    require('dns').lookup(require('os').hostname(), (err, add, fam) => {
        res.send("success connect to " + add + ':' + port);
    })
    console.log(req.ip);
});


app.get('/users/find', express.json(), (req, res) => {
    console.log("find request");
    res.send(users);
    console.log(JSON.stringify(users));
})


app.post('/users/add', express.json(), (req, res) => {
    console.log("add request");

    // const newUserData = JSON.stringify(req.body);
    const newUser = {account: req.body.account, 
                    password: req.body.password,
                    id: users.length+1};
    users = [...users, newUser];

    res.send(newUser);
    console.log(users);
});


app.listen(port, () => {
    require('dns').lookup(require('os').hostname(), (err, add, fam) => {
        console.log('Express app started on ' + add + ':' + port);
    })
});