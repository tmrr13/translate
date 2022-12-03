import React from 'react';
import {TInputField} from './types/TInputField';

export const InputField = ({labelText, onChange, htmlFor, id, name, type}: TInputField) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {labelText}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          required
          onChange={onChange}
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  )
}
