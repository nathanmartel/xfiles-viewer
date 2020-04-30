import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const monsters = [{
      name: 'Lorem Ipsum',
      image: 'https://placekitten.com/200/200',
    }, {
      name: 'Dolor Sitar',
      image: 'https://placekitten.com/200/200',
    }];
    const wrapper = shallow(<List monsters={monsters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
