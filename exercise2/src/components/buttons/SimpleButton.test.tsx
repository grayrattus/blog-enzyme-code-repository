import React from 'react';
import { SimpleButton } from './ComplexButton';
import { mount } from 'enzyme';

test('Test if button contain name from props', () => {
    const enzymeRenderedComponent = mount(<SimpleButton name='test-name' />);
    const button = enzymeRenderedComponent.find('button');
    expect(button.contains('test-name')).toBeTruthy();
});
