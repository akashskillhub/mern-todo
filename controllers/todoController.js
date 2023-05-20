const TODO = require("./../models/Todo")
exports.addTodo = async (req, res) => {
    try {
        const result = await TODO.create(req.body)

        res.json({
            message: "add todo success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong " + error,
        })
    }
}
exports.getTodos = async (req, res) => {
    try {
        const result = await TODO.find()
        // const result = await TODO.create() // add to db
        // const result = await TODO.find()  // gte all records
        // const result = await TODO.findByIdAndUpdate()  // update
        // const result = await TODO.findByIdAndDelete()  // delete

        res.json({
            message: "get todos success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong " + error,
        })
    }
}
exports.updateTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const result = await TODO.findByIdAndUpdate(todoId, req.body, { new: true })  // update
        // const result = await TODO.findByIdAndDelete()  // delete

        res.json({
            message: "get todos success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong " + error,
        })
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const result = await TODO.findByIdAndDelete(todoId)  // delete

        res.json({
            message: " todo delete success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong " + error,
        })
    }
}