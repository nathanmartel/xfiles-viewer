import React from 'react';
import { shallow } from 'enzyme';
import Detail from './Detail';

describe('Detail component', () => {
  it('renders Detail', () => {
    const monster = {
      name: 'Lorem Ipsum',
      image: 'https://placekitten.com/200/200',
      description: 'Dolor sit amet!'
    };
    const wrapper = shallow(<Detail {...monster} />);
    expect(wrapper).toMatchSnapshot();
  });
});
