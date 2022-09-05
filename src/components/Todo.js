import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todoText: '',
         todos: [{text: 'test1', isDone: false}, {text: 'test2', isDone: false},{text: 'test3', isDone: false}]
      }
    }

    handleOnChange = (e) => {
        this.setState({
            todoText: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.setState(state => {
            let newTodos = state.todos.concat({
                text: state.todoText,
                isDone: false
            })
            return {
                todoText: '',
                todos: newTodos
            }
        })
        e.preventDefault()
    }

    manageChange = (itemIndex) => {
         this.setState( state => {
             let newTodos = state.todos.map((todo,index) => {
                 if(index === itemIndex){
                     return {isDone: !todo.isDone, text: todo.text}
                 }
                 return todo
             })
             return {
                 todos: newTodos
            }
         })
    }

    render() {
    const todos = this.state.todos
    const isNotDone = todos.filter(todo => todo.isDone !== true)

    return (
        <div>
            <h2>Todo List Challenge</h2>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.todoText} onChange={this.handleOnChange}/>
                <button>Add Todo</button>
            </form>

            <p>{isNotDone.length} tasks remaining out of {todos.length} tasks </p>
            {
                todos.map((todo,index) => 
                <li key={index} className={todo.isDone ? 'is-done' : ''} onClick={() => this.manageChange(index)}>{todo.text}</li>)
            } 
        </div>
    )
    }
}

export default Todo