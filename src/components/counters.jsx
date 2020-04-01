import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 4}
        ]
     }

    handleDelete = (id) => {
        console.log('handler',id)
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({ counters})
    }

    handleIncrement = data => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(data);
        counters[index] = {...data};
        counters[index].value ++;
        this.setState({ counters });
    }

    render() { 
        return ( <div>
            {this.state.counters.map(counter =>
                <Counter onDelete={this.handleDelete} onIncrement={this.handleIncrement} key={counter.id} counter={counter}/>)
            }
        </div>);
    }
}
 
export default Counters;