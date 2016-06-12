import React, { Component, PropTypes } from 'react';

class Draggable extends Component {

  static propTypes = {
    data: PropTypes.any,
    handleDragStart: PropTypes.func,
    handleDragEnd: PropTypes.func,
  }

  onDragStart = (e) => {
    e.dataTransfer.setData("Text", this.props.data);
    this.props.handleDragStart(e);
  }

  onDragEnd = (e) => {
    this.props.handleDragEnd(e);
  }

  render() {
    return (
      <div 
        draggable="true"
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        {...this.props}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;
