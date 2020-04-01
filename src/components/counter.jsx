import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };

    handleCounter = () => {
        this.setState({value: this.state.value + 1})
        console.log(this.props)
    };

    render(){
        return(
            <div>
                <span className="m-2">{this.state.value}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-sm ml-2">click</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-sm btn-danger ml-2">delete</button>
            </div>
        )
    }

}
 
export default Counter;