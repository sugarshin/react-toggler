import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';

describe('Toggler', () => {
  const Toggler = require('../src/Toggler').default;

  it('Show', () => {
    const wrapper = shallow(<Toggler><div /><div /></Toggler>);
    assert(wrapper.is('.react-toggler'));
    assert(wrapper.children().length === 2);
  });

  it('Hide', () => {
    const wrapper = shallow(<Toggler hide><div /><div /></Toggler>);
    assert(wrapper.children().length === 0);
  });

  it('Pattern `[false, true, false]`', () => {
    const div0 = <div id='0' key='0' />;
    const div1 = <div id='1' key='1' />;
    const div2 = <div id='2' key='2' />;
    const wrapper = shallow(<Toggler pattern={[false, true, false]}>{[div0, div1, div2]}</Toggler>);
    assert(!wrapper.contains(div0));
    assert(wrapper.contains(div1));
    assert(!wrapper.contains(div2));
    assert(wrapper.children().length === 1);
  });

  it('Pattern `{ 0: false, 1: true, 2: true }`', () => {
    const div0 = <div id='0' key='0' />;
    const div1 = <div id='1' key='1' />;
    const div2 = <div id='2' key='2' />;
    const wrapper = shallow(<Toggler pattern={{ 0: false, 1: true, 2: true }}>{[div0, div1, div2]}</Toggler>);
    assert(!wrapper.contains(div0));
    assert(wrapper.contains(div1));
    assert(wrapper.contains(div2));
    assert(wrapper.children().length === 2);
  });

  it('Pattern `{ 0: false, 1: false }`', () => {
    const div0 = <div id='0' key='0' />;
    const div1 = <div id='1' key='1' />;
    const wrapper = shallow(<Toggler pattern={{ 0: false, 1: false }}>{[div0, div1]}</Toggler>);
    assert(!wrapper.contains(div0));
    assert(!wrapper.contains(div1));
    assert(wrapper.children().length === 0);
  });

  it('Custom className', () => {
    const wrapper = shallow(<Toggler className='aaa' />);
    assert(wrapper.is('.aaa'));
  });

  it('Custom attributes', () => {
    const wrapper = shallow(<Toggler data-test='test' />);
    assert(wrapper.is('[data-test]'));
  });
});
