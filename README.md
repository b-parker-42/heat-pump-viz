# Heat Pump Visualization Web App

A React-based web application for visualizing UK heat pump deployment statistics with interactive charts and data visualization capabilities.

## Overview

This application provides an interactive dashboard to visualize quarterly heat pump installation data in the United Kingdom. It displays two main visualizations:

1. **Quarterly Heat Pump Installations by Government Scheme** - Shows installations funded through BUS, ECO4, and other government schemes
2. **Quarterly Heat Pump Installations by Heat Pump Type** - Displays installations by Air Source, Ground Source, Water Source, and Hybrid heat pump types

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 16.0 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd heat-pump-viz
   ```

2. **Install all required dependencies:**
   ```bash
   npm install
   ```

   This will install all dependencies listed in `package.json`, including:
   - React 19 with TypeScript support
   - React Router DOM for navigation
   - Recharts for interactive data visualization
   - Testing libraries and development tools

## Running the Application

### Development Mode

To start the development server:

```bash
npm start
```

- Opens [http://localhost:3000](http://localhost:3000) in your browser
- The page automatically reloads when you make changes
- Lint errors and warnings appear in the console

### Production Build

To create an optimized production build:

```bash
npm run build
```

- Creates a `build` folder with optimized static files
- Files are minified and include cache-busting hashes
- Ready for deployment to any static hosting service

### Testing

To run the test suite:

```bash
npm test
```

- Runs tests in interactive watch mode
- Automatically runs tests when files change
- Includes unit tests for components and functionality

## Project Structure

```
heat-pump-viz/
├── public/                 # Static files
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Overview.tsx   # Main dashboard component
│   │   └── Overview.css   # Component styles
│   ├── App.tsx           # Main application component
│   ├── App.css           # Global styles
│   └── index.tsx         # Application entry point
├── data/                 # Data directory for Excel files
│   └── README.md         # Data placement instructions
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Data Integration

The application is designed to work with Excel data files:

1. **Place your Excel file** in the `/data/` directory
2. **Expected filename**: `Heat_pump_deployment_quarterly_statistics_United_Kingdom_2025_Q2.xlsx`
3. **Required Excel sheets**:
   - **Table 1.1**: Quarterly Heat Pump installations by government scheme
   - **Table 1.2**: Quarterly Heat Pump installations by Heat Pump type

Currently, the application displays placeholder data that demonstrates the expected visualization format. Once the Excel file is added, data parsing functionality can be implemented to display real statistics.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the development server on http://localhost:3000 |
| `npm test` | Runs the test suite in watch mode |
| `npm run build` | Creates optimized production build |
| `npm run eject` | Ejects from Create React App (irreversible) |

## Dependencies

### Main Dependencies
- **React 19** - User interface library
- **TypeScript** - Type-safe JavaScript
- **React Router DOM** - Client-side routing
- **Recharts** - Interactive chart library

### Development Dependencies
- **React Scripts** - Build tools and configuration
- **Testing Library** - Testing utilities
- **ESLint** - Code linting
- **TypeScript compiler** - Type checking

## Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Common Issues

1. **Node.js version errors**: Ensure you're using Node.js 16.0 or higher
2. **npm install fails**: Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
3. **Port 3000 in use**: The development server will automatically try alternative ports

### Getting Help

If you encounter issues:
1. Check that all prerequisites are installed
2. Ensure you're in the correct directory
3. Try restarting the development server
4. Clear browser cache if you see old content

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses TypeScript for type safety.

For more information about Create React App features, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).