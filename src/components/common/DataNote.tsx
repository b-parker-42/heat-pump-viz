import React from 'react';
import { spacing, layout } from '../../config/theme';
import { formatDate } from '../../utils/formatters';

const DataNote: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    background: '#e8f4f6',
    border: `1px solid #bee5eb`,
    borderRadius: layout.borderRadius,
    padding: spacing.lg,
    marginTop: spacing.xxl,
    textAlign: 'center',
  };

  const paragraphStyle: React.CSSProperties = {
    margin: 0,
    color: '#0c5460',
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        <strong>Data Source:</strong> Heat pump deployment quarterly statistics, United Kingdom 2025 Q2
      </p>
      <p style={paragraphStyle}>
        <strong>Last Updated:</strong> {formatDate()}
      </p>
    </div>
  );
};

export default DataNote;
