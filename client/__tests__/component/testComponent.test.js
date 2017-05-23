import React from 'react';
import TestComponent from '../../src/component/TestComponent';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import store from '../../src/store';
import {Provider} from 'react-redux';


test('TestComponent is a div element with class .test-component', () => {
  const component = renderer.create(<Provider store={store}><TestComponent /></Provider>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  describe('TestComponent', () => {
    it('TestComponent is a div element with class .test-component', () => {
      const test = shallow(<Provider store={store}><TestComponent /></Provider>);
      expect(test.find('div.test-component')).to.have.length(1);
    });
  });
});
