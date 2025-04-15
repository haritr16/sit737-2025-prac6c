const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World, The test code is updated.');
})


const port = 8081;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
