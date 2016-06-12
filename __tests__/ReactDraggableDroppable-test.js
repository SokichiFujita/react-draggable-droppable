jest.unmock('../src/ReactDraggableDroppable');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ReactDraggableDroppable from '../src/ReactDraggableDroppable'

describe('<ReactDraggableDroppable />', () => {
  it('', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <ReactDraggableDroppable />
    );
    const dom = renderer.getRenderOutput();
    //expect(dom.props.//PROPS_NAME).toEqual('//TEXT');
  });
});
