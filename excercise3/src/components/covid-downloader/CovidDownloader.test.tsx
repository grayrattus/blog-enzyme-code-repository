import React from 'react';
import { shallow, mount } from 'enzyme';
import { CovidDownloader } from './CovidDownloader';
import { CovidList } from './CovidList';
import fetchMock from 'fetch-mock';
import { flushPromises } from '../../test-utils';
import { act } from 'react-dom/test-utils';

test('Test is CovidDownloader displays empty patients list at the beginning', () => {
    const component = shallow(<CovidDownloader />)
    component.containsMatchingElement(<CovidList patients={[]} />);
});

describe('Testing e2e CovidDownloader actions', (): void => {
    afterEach((): void => {
        fetchMock.restore();
    });
    test('Test if user can download patients', async () => {
        await act(async (): Promise<void> => {
            fetchMock.getOnce('https://duckduckgo.com/?q=covid+patients&atb=v170-1&ia=web',
                ['Artur Dziedziczak', 'Donald Trump', 'Ozzy Ozbrun']
            );
            const component = shallow(<CovidDownloader />)
            component.find('button').simulate('click');
            await flushPromises();

            component.containsMatchingElement(<CovidList patients={['Artur Dziedziczak', 'Donald Trump', 'Ozzy Ozbrun']} />);
        });
    })

    test('Test if patients are displayed in component', async () => {
        await act(async (): Promise<void> => {
            fetchMock.getOnce('https://duckduckgo.com/?q=covid+patients&atb=v170-1&ia=web',
                ['Artur Dziedziczak', 'Donald Trump', 'Ozzy Ozbrun']
            );
            const component = mount(<CovidDownloader />)
            component.find('button').simulate('click');
            await flushPromises();
            component.update();

            const covidListComponent = component.find('CovidList');
            expect(covidListComponent.contains('Artur Dziedziczak')).toBeTruthy();
            expect(covidListComponent.contains('Donald Trump')).toBeTruthy();
        });
    })
});