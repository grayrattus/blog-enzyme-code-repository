import React from 'react';
import { SimpleButton } from './SimpleButton';
import { shallow } from 'enzyme';

test('Test if button contain name from props', () => {
    const enzymeRenderedComponent = shallow(<SimpleButton name='test-name' />);
    const button = enzymeRenderedComponent.find('button');
    expect(button.contains('test-name')).toBeTruthy();
});
