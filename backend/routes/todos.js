// setup routes for create read update delete todos
const router = require("express").Router();

let Todo = require("../models/todos");

// get all todos
router.route("/").get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

// add todo
router.route("/add").post((req, res) => {
  const sno = Number(req.body.sno);
  const title = req.body.title;
  const desc = req.body.desc;
  const active = Boolean(req.body.active);

  const newTodo = new Todo({
    sno,
    title,
    desc,
    active,
  });

  newTodo
    .save()
    .then(() => res.json("Todo added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get todo by id
router.route("/:id").get((req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete todo by id
router.route("/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json("Todo deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// update todo by id
router.route("/update/:id").post((req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      todo.sno = Number(req.body.sno);
      todo.title = req.body.title;
      todo.desc = req.body.desc;
      todo.active = Boolean(req.body.active);

      todo
        .save()
        .then(() => res.json("Todo updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// update active state (toggle)
router.route("/toggle/:id").post((req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      todo.active = !todo.active;
    })
    .then(() => res.json("Todo updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete todo
router.route("/delete/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json("Todo deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
