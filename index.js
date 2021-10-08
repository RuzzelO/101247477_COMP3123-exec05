const express = require('express');
const app = express();
const router = express.Router();
let user = require("./user.json")

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/


router.use("/files", express.static('public'))

http://localhost:8089/home.html
router.get('/home.html', (req,res) => {
  res.sendFile(__dirname + "/public/home.html");
});

/*
- Return all details from user.json file to client as JSON format
*/

http://localhost:8089/profile
router.get('/profile', (req,res) => {
  let profileData = JSON.stringify(user, null, 2)
  res.send("<pre>" + profileData + "<pre>")
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
*/

//http://localhost:8089/login?un=bret&up=bret@123 
router.get('/login', (req,res) => {
  let username = req.query.un
  let password = req.query.up

  if (username == user.username && password == user.password){
    let response = {
        status: true,
        message: "User Is valid"
        
    }
    res.send(response)

  }
  else if (username != user.username && password == user.password){
    let response = {
      status: false,
      message: "User Name Is invalid"
  }
  res.send(response)

  }
  else if (username == user.username && password != user.password){
    let response = {
      status: false,
      message: "Password Is invalid"
  }
  res.send(response)
  }
  else{
    let response = {
      status: false,
      message: "input is invalid"
    }
    res.send(response)
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/

//localhost:8089/logout/bret
router.get('/logout/:uname', (req,res) => {
  let username = req.params.uname

  res.send(`<h2><b>${username} successfully logout.<b><h2>`)
});

app.use('/', router);

let SERVER_PORT = process.env.PORT || 8089

app.listen(SERVER_PORT)

console.log('Web Server is listening at port ${SERVER_PORT}')
    