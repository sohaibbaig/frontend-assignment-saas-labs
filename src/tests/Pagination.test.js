import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

test('renders pagination buttons correctly', () => {
    const totalItems = 25;
    const itemsPerPage = 5;

    render(<Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} onPageChange={() => {}} />);

    const firstButton = screen.getByLabelText('Go to first page');
    const previousButton = screen.getByLabelText('Go to previous page');
    const nextButton = screen.getByLabelText('Go to next page');
    const lastButton = screen.getByLabelText('Go to last page');

    expect(firstButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(lastButton).toBeInTheDocument();
});

test('pagination buttons are clickable', () => {
    const totalItems = 25;
    const itemsPerPage = 5;
    const onPageChange = jest.fn();

    render(<Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} onPageChange={onPageChange} />);

    const nextButton = screen.getByLabelText('Go to next page');
    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(2);

    const previousButton = screen.getByLabelText('Go to previous page');
    fireEvent.click(previousButton);
    expect(onPageChange).toHaveBeenCalledWith(1);

    const firstButton = screen.getByLabelText('Go to first page');
    fireEvent.click(firstButton);
    expect(onPageChange).toHaveBeenCalledWith(1);

    const lastButton = screen.getByLabelText('Go to last page');
    fireEvent.click(lastButton);
    expect(onPageChange).toHaveBeenCalledWith(5);
});
