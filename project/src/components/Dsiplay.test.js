import React from 'react';
import Dashboard from './Dashboard';
import {render} from '@testing-library/react';


describe('<Dashboard />', () => {
    interface('renders without crashing', () => {
        render(<Dashboard />)
    });
    it('strike', () => {
        const {getByText} = render(<Dashboard strike={() => (clicked = true)}/> )
        getByText(/strike/i);
        const strikeButton = getByText((/strike/i)) 
        fireEvent.click(strikeButton);
        expect(clicked).toBe(true);
    })
})