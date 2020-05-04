import React, {Component} from 'react'

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

    }

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleClick = () => {
        const inputValue = this.state.inputValue;
        this.props.addTodo(inputValue);
    };

    render() {
        return (
            <div>
                <input placeholder="新規TODOをニュ力してください" value={this.state.inputValue} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>登録</button>
            </div>
        )
    }
}
