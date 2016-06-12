import React, { Component } from 'react';
import { render } from 'react-dom';
import Draggable from './ReactDraggable';
import Droppable from './ReactDroppable';

class Demo extends Component {

  handleDrop(data, e) {
    alert(data + " was dropped.");
  }

  render() {
    return (
      <div style={{margin:20}}>
        <h1 style={{margin:20}}>React-Draggable-Droppable Demo</h1>
        <Draggable 
          data={"Hello World."}
          handleDragStart={(e)=>{console.log(e);}}
          handleDragEnd={(e)=>{console.log(e);}}
          style={{
            width:500, 
            height:100,
            backgroundColor: "#557788",
            margin:20,
          }}
        >
          <div>Draggable component</div>
        </Draggable>

        <Droppable
          handleDragEnter={(e)=>{console.log(e);}}
          handleDragLeave={(e)=>{console.log(e);}}
          handleDragOver={(e)=>{console.log(e);}}
          handleDrop={this.handleDrop}
          style={{ 
            width:500,
            height:300,
            backgroundColor: "#EEEEEE",
            margin:20,
          }}
        >
          <div>Droppable component</div>
        </Droppable>
      </div>
    );
  }
}

render(<Demo />, document.getElementById('root'));
