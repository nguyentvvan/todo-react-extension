import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'reactstrap';

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
            <Row className="add-todo">
                {/* <input type="text" placeholder="thing to do" onChange={this.changeTodoContent()}/> */}
                {/* <input type="text" placeholder="thing to do" onChange={(e) => this.changeTodoContent(e)}/> */}
                <Col xs="20" sm="8">
                    <Input type="text" placeholder="thing to do" onChange={this.props.change} value={this.props.todoContent} onKeyPress={this.props.enterPressed}/>
                </Col>
                <Col>
                    <Button onClick={this.props.click}>Add</Button>
                </Col>
            </Row>
        )
    };
}

export default TodoAdding;