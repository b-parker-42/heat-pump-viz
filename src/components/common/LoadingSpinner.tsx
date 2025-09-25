import React from 'react';
import { colors, spacing } from '../../config/theme';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading data...' 
}) => {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: 18,
    color: colors.textSecondary,
    margin: `${spacing.xxl}px 0`,
  };

  return (
    <div style={containerStyle}>
      {message}
    </div>
  );
};

export default LoadingSpinner;
