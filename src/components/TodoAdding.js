import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class TodoAdding extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoContent: ""
        };
    }

    // changeTodoContent = () => (e) => {
    //     this.setState({
    //         todoContent: e.target.value
    //     });
    // }

    changeTodoContent = (e) => {
        this.setState({
            todoContent: e.target.value
        });
    };

    // changeTodoContent = () => {
    //     debugger
    //     return (e) => {
    //         this.setState({
    //             todoContent: e.target.value
    //         });
    //     };
    // };

    render() {
        return(
            <div className="add-todo">
                {/* <input type="text" placeholder="thing to do" onChange={this.changeTodoContent()}/> */}
                {/* <input type="text" placeholder="thing to do" onChange={(e) => this.changeTodoContent(e)}/> */}
                <Input className="todo-content" type="text" placeholder="thing to do" onChange={this.props.change} value={this.props.todoContent} onKeyPress={this.props.enterPressed}/>
                <Button className="btn-todo-add" onClick={this.props.click}>Add</Button>
            </div>
        )
    };
}

export default TodoAdding;