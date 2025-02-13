import React from 'react';
import { render, screen } from '@testing-library/react';
import DevOpsPortfolio from '../DevOpsPortfolio';

describe('DevOpsPortfolio', () => {
  it('renders the main components', () => {
    render(<DevOpsPortfolio />);

    expect(screen.getByText("Hi, I'm Filip Białogrecki")).toBeInTheDocument();
    expect(screen.getByText('DevOps Engineer')).toBeInTheDocument();
    expect(screen.getByText('What I Do?')).toBeInTheDocument();
    expect(screen.getByText('My Work')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the correct number of navigation items', () => {
    render(<DevOpsPortfolio />);

    const navItems = screen.getAllByRole('link', { name: /(Home|What I Do\?|My Work|Contact)/ });
    expect(navItems).toHaveLength(4);
  });

  it('renders the correct number of "What I Do" items', () => {
    render(<DevOpsPortfolio />);

    const whatIDoItems = screen.getAllByRole('heading', { level: 3 });
    expect(whatIDoItems).toHaveLength(3);
  });

  it('renders the correct number of "My Work" items', () => {
    render(<DevOpsPortfolio />);

    const myWorkItems = screen.getAllByRole('link', { name: /Project \d/ });
    expect(myWorkItems).toHaveLength(2);
  });

  it('renders the contact form', () => {
    render(<DevOpsPortfolio />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});