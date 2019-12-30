import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClass() {
    let classes = 'badge m-2 badge-'
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes
  }

  formatCount() {
    const { value: value } = this.state;
    return value === 0 ? 'Zero' : value;
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 })
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ product: 1 })}
          className='btn btn-secondary btn-sml'
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag."}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
