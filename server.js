const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/ERC721.html"));
})

app.listen(56000,()=>{
    console.log(`port is open on 56000`);
});

