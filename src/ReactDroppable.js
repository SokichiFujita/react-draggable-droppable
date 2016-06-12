import React, { Component, PropTypes } from 'react';

class Droppable extends Component {

  static propTypes = {
    handleDragEnter: PropTypes.func,
    handleDragLeave: PropTypes.func,
    handleDragOver: PropTypes.func,
    handleDrop: PropTypes.func,
  }

  onDragEnter = (e) => {
    e.preventDefault();
    this.props.handleDragEnter(e);
  }

  onDragLeave = (e) => {
    e.preventDefault();
    this.props.handleDragLeave(e);
  }

  onDragOver = (e) => {
    e.preventDefault();
    this.props.handleDragOver(e);
  }

  onDrop = (e) => {
    e.preventDefault();
    const text = e.dataTransfer.getData("Text");
    this.props.handleDrop(text, e);
  }

  render() {
    return (
        <div 
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
          {...this.props}
        >
            {this.props.children}
        </div>
    );
  }

}

export default Droppable;
