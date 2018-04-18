
import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo, fetchTodos, getBtcBalances } from './actions/main_actions';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import compose from 'recompose/compose';
import cx from 'classnames';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  addCryptoButton: {
    margin: theme.spacing.unit,
  },
});

const Todo = ({ todo, id, onDelete, onToggle }) => (
  <div className="box todo-item level is-mobile">
    <div className="level-left">
      <label className={`level-item todo-description ${todo.done && 'completed'}`}>
        <input className="checkbox" type="checkbox" checked={todo.done} onChange={onToggle}/>
        <span>{todo.description}</span>
      </label>
    </div>
    <div className="level-right">
      <a className="delete level-item" onClick={onDelete}>Delete</a>
    </div>
  </div>
);

class Todos extends Component {
  state = { 
    newTodo: '' 
  };

  componentDidMount() {
    this.props.fetchTodos()
    //this.props.getBtcBalances()
  }

  addTodo = event => {
    event.preventDefault() // Prevent form from reloading page
    const { newTodo } = this.state

    if(newTodo) {
      const todo = { description: newTodo, done: false }
      this.props.addTodo(todo)
      this.setState({ newTodo: '' })
    }
  }

  handleInputChange = event => {
    this.setState({
      newTodo: event.target.value
    })
  };

  render() {
    const { todos, isLoading, isSaving, error, deleteTodo, toggleTodo, classes } = this.props

    const total = todos.length
    const complete = todos.filter((todo) => todo.done).length
    const incomplete = todos.filter((todo) => !todo.done).length
    const addButtonClassnames = cx({
      ...classes.addCryptoButton,
      'is-loading': isLoading || isSaving
    });
    return (
      <section className="section full-column">
        <h1 className="title white">Crypto Market</h1>
        <div className="error">{error}</div>

        <form className={classes.container} onSubmit={this.addTodo}>
          <div className="field has-addons" style={{ justifyContent: 'center' }}>
            <div className="control">
              <TextField
                id="with-placeholder"
                label="Please type your coin"
                placeholder="Placeholder"
                className={classes.textField}
                onChange={this.handleInputChange}
                margin="normal"
              />
            </div>
            <Button 
              variant="fab" 
              color="primary" 
              aria-label="add" 
              type="submit"
              className={addButtonClassnames}
              disabled={isLoading || isSaving}
            >
              <AddIcon />
            </Button>
          </div>
        </form>

        <div className="container todo-list">
          {todos.map((todo) => <Todo key={todo._id}
                                     id={todo._id}
                                     todo={todo}
                                     onDelete={() => deleteTodo(todo._id)}
                                     onToggle={() => toggleTodo(todo._id)}/> )}
          <div className="white">
            Total: {total}  , Complete: {complete} , Incomplete: {incomplete}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.items,
    isLoading: state.todos.loading,
    isSaving: state.todos.saving,
    error: state.todos.error
  }
}

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
  fetchTodos,
  getBtcBalances
}

//export default connect(mapStateToProps, mapDispatchToProps)(Todos)

export default compose(
  withStyles(styles, { name: 'Todos' }),
  connect(mapStateToProps, mapDispatchToProps)
)(Todos);
