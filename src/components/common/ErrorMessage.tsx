import React from 'react';
import { spacing, layout } from '../../config/theme';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const containerStyle: React.CSSProperties = {
    background: '#fff3cd',
    border: `1px solid #ffeaa7`,
    borderRadius: layout.borderRadius,
    padding: spacing.md,
    marginBottom: spacing.lg,
    color: '#856404',
  };

  const paragraphStyle: React.CSSProperties = {
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        <strong>Note:</strong> {message}
      </p>
    </div>
  );
};

export default ErrorMessage;
