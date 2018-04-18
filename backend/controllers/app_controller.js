const Todo = require('../models/todo_model')
const btcModel = require('../models/btc_Model')

async function findAll (ctx) {
  // Fetch all Todo's from the database and return as payload
  const todos = await Todo.find({})
  ctx.body = todos
}

async function create (ctx) {
  // Create New Todo from payload sent and save to database
  const newTodo = new Todo(ctx.request.body)
  const savedTodo = await newTodo.save()
  ctx.body = savedTodo
}

async function destroy (ctx) {
  // Get id from url parameters and find Todo in database
  const id = ctx.params.id
  const todo = await Todo.findById(id)

  // Delete todo from database and return deleted object as reference
  const deletedTodo = await todo.remove()
  ctx.body = deletedTodo
}

async function update (ctx) {
  // Find Todo based on id, then toggle done on/off
  const id = ctx.params.id
  const todo = await Todo.findById(id)
  todo.done = !todo.done

  // Update todo in database
  const updatedTodo = await todo.save()
  ctx.body = updatedTodo
}

async function getAllBtcAddressInDb (ctx) {
  // Fetch all Todo's from the database and return as payload
  ctx.body = await btcModel.getBtcBalances()
  console.log(ctx.body)
}

module.exports = {
  findAll,
  create,
  destroy,
  update,
  getAllBtcAddressInDb
}
