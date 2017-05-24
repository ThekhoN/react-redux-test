import React from 'react';
import Test from '../../src/component/test';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('Test component is a H2 element with class .test', () => {
  const component = renderer.create(<Test />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Test Component', () => {
  it('Test Component renders h2 tah with text: Hover-able Test Component', () => {
    const test = shallow(<Test />);
    expect(test.find('h2').text()).toEqual('Hover-able Test Component');
  });
});
