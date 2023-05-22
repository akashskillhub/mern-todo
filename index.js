const express = require("express")
require("dotenv").config({ path: "./.env" })
const cors = require("cors")
const mongoose = require("mongoose")
const { addTodo, getTodos, updateTodo, deleteTodo } = require("./controllers/todoController")
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.post("/api/todo/add", addTodo)
app.get("/api/todo", getTodos)
app.put("/api/todo/:id", updateTodo)
app.delete("/api/todo/:id", deleteTodo)

mongoose.connection.once("open", () => {
    console.log("DB Connected")
    app.listen(5000, console.log("http://localhost:5000"))
})
