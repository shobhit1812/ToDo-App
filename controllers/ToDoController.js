const ToDoModel = require("../models/ToDoModels")

module.exports.getToDo = async (req, res) => {
  const ToDo = await ToDoModel.find()
  res.send(ToDo)
}

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body
  ToDoModel.create({ text })
    .then(() => res.set(201).send("Added Successfully..."))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err))
}
