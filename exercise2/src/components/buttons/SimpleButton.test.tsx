import React from 'react';
import { ComplexButton } from './ComplexButton';
import { mount, shallow } from 'enzyme';
import { SimpleButton } from './SimpleButton';

test('Dummy test to display different components', () => {
    const enzymeFullRenderedComponent = mount(<ComplexButton countryName='Poland' />);
    const enzymeShallowRenderedComponent = shallow(<ComplexButton countryName='Poland' />);

    console.log(enzymeFullRenderedComponent.debug());
    console.log(enzymeShallowRenderedComponent.debug());
});

test('Test if Complex button has proper texts', () => {
    const enzymeFullRenderedComponent = mount(<ComplexButton countryName='Poland' />);

    enzymeFullRenderedComponent.contains('Another COVID lockdown is happening in: Poland');
    enzymeFullRenderedComponent.contains('Poland ! Welcome, first time huh?');
});

test('Test if ComplexButton has SimpleButton inside', () => {
    const enzymeFullRenderedComponent = mount(<ComplexButton countryName='Poland' />);
    expect(enzymeFullRenderedComponent.containsMatchingElement(<SimpleButton countryName="Poland" />)).toBeTruthy();
});
