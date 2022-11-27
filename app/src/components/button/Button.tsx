import React from 'react';
import {XMarkIcon} from '@heroicons/react/24/outline';
import {TButton} from './types/TButton';

export const Button = ({children, onClick, className}: TButton) => {
  return (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  )
}
