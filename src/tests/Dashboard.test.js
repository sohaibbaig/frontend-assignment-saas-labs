import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

test('Dashboard rendering', () => {
    const { container } = render(<Dashboard />);
    const dashboard = container.querySelector('.dashboard');
    expect(dashboard).toBeInTheDocument();
});