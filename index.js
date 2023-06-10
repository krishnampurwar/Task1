const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes')
const app = express();

app.use(cors());
app.use(express.json());

app.use(taskRoutes);
app.get('/' , (req,res) => {
    res.send('running')
})
PORT = '8080'
app.listen(PORT);
console.log(`Server is runnig on port ${PORT}`);