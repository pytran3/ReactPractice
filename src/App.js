import React, {Component} from 'react';
import './App.css';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    title: 'デフォルトTODO',
                    id: 0
                }
            ],
            uniqueId: 1
        };
    }

    addTodo = title => {
        const {
            tasks,
            uniqueId
        } = this.state;

        const task = {
            title,
            uniqueId
        };

        const newTasks = [...tasks, task];

        this.setState({
            tasks: newTasks,
            uniqueId: uniqueId + 1
        });
    };

    resetTodo = () => {
        this.setState({
            tasks: []
        });
    };

    render() {
        return (
            <div>
                <h1>TODO App</h1>
                <button onClick={this.resetTodo}>リセット</button>
                <TodoInput addTodo={this.addTodo}/>
                <TodoList tasks={this.state.tasks}/>
            </div>
        )
    }
}
