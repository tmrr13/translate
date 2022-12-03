import React from 'react';
import {InputField} from '../input-field/InputField';
import {Checkbox} from '../checkbox/checkbox';
import {Button} from '../button/Button';
import {TRegistrationForm} from './types/TRegistrationForm';

export const RegistrationForm = ({onClick}: TRegistrationForm) => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <InputField htmlFor='first-name' id='first-name' type='text' labelText="First Name" name='first-name' />
      <InputField htmlFor='last-name' id='last-name' type='text' labelText="Last Name" name='last-name' />
      <InputField htmlFor='phone-number' id='phone-number' type='text' labelText="Phone Number" name='phone-number' />
      <InputField htmlFor='password' id="password" name="password" type="password" labelText="Password" />
      <div>
        <Button onClick={onClick} caption='Create Account' type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" />
      </div>
    </form>
  )
}
