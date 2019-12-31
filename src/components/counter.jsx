import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.state;
    return value === 0 ? "0" : value;
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ product: 1 })}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
