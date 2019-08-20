import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
    discount: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count+1 }));
    this.setState(current => ({ x: current.count+1 }));
    console.log(this.state);
  }

  minus = () => {
    this.setState(current => ({ count: current.count-1 }));
  }

  add2 = () => {
    this.setState({ discount: this.state.discount+1 });
  }

  minus2 = () => {
    this.setState({ discount: this.state.discount-1 });
  }
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <h1>The discount number is {this.state.discount}</h1>
        <h1>X is {this.state.x}</h1>

        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>

        
        <button onClick={this.add2}>Add2</button>   
        <button onClick={this.minus2}>Minus2</button>
      </div>

    );
  }
}

export default App;
