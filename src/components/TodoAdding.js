import React, { Component } from 'react';

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
                <input type="text" placeholder="thing to do" onChange={this.props.change} value={this.props.todoContent} onKeyPress={this.props.enterPressed}/>
                <button onClick={this.props.click}>Add</button>
            </div>
        )
    };
}

export default TodoAdding;