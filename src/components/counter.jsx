import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };


  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

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
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}
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
