const express = require('express');
const app = express();

app.use(express.json())

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.post('/tasks', (req, res) => {
    let newReq = req.body;
    tasks.push(newReq);
    res.json(tasks);
})

app.delete('/tasks/:id', (req, res) => {
    let idTask = parseInt(req.params.id);
    let result = tasks.filter(elem => elem.id !== idTask);

    res.json(result);
})

const PORT = 1994;
app.listen(PORT, () => console.log(`Hello from server ${PORT}`))


const tasks = [
    {
      id: 1,
      title: "playing football",
      isCompleted: false
    },
    {
      id: 2,
      title: "swimming",
      isCompleted: false
    },
    {
      id: 3,
      title: "learning react",
      isCompleted: false
    },
    {
      id: 4,
      title: "read a book",
      isCompleted: false
    },
    {
      id: 5,
      title: "Watch Movie",
      isCompleted: false
    }
  ]