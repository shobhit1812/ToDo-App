const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const PORT = process.env.PORT

const cors = require("cors")

const routes = require("./routes/ToDoRoutes")

const app = express()

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err))

app.use(routes)

app.get("/", (req, res) => {
  res.send("WORKING")
})

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`)
})
