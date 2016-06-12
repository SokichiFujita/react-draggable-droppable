jest.unmock('../src/ReactDraggableDroppableDemo');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ReactDraggableDroppableDemo from '../src/ReactDraggableDroppableDemo'

describe('<ReactDraggableDroppableDemo />', () => {
  it('', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <ReactDraggableDroppableDemo />
    );
    const dom = renderer.getRenderOutput();
    //expect(dom.props.//PROPS_NAME).toEqual('//TEXT');
  });
});
