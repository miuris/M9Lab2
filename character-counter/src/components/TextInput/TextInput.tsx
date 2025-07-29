import React from 'react';
import { TextInputProps } from '../../types';
import './TextInput.css';
 
export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = ''
}) => {
  return (
    <div className="text-input-container">
      <textarea
        className="text-input-textarea"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};