import React from 'react';
import {TCheckbox} from './types/TCheckbox';

export const Checkbox = ({labelText}: TCheckbox) => {
  return (
    <div className="flex items-center">
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
        {labelText}
      </label>
    </div>
  )
}
