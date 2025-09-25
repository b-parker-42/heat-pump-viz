import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock Recharts to avoid rendering issues in tests
jest.mock('recharts', () => ({
  BarChart: () => <div data-testid="bar-chart">Mocked Bar Chart</div>,
  Bar: () => <div>Bar</div>,
  XAxis: () => <div>XAxis</div>,
  YAxis: () => <div>YAxis</div>,
  CartesianGrid: () => <div>CartesianGrid</div>,
  Tooltip: () => <div>Tooltip</div>,
  Legend: () => <div>Legend</div>,
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

test('renders heat pump overview page', () => {
  render(<App />);
  const titleElement = screen.getByText(/Heat Pump Deployment Overview/i);
  expect(titleElement).toBeInTheDocument();
});

test('displays government scheme chart section', () => {
  render(<App />);
  const chartTitle = screen.getByText(/Quarterly Heat Pump Installations by Government Scheme/i);
  expect(chartTitle).toBeInTheDocument();
});

test('displays heat pump type chart section', () => {
  render(<App />);
  const chartTitle = screen.getByText(/Quarterly Heat Pump Installations by Heat Pump Type/i);
  expect(chartTitle).toBeInTheDocument();
});
