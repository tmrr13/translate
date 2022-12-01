import React from 'react';
import {InputField} from '../input-field/InputField';
import {Checkbox} from '../checkbox/checkbox';
import {Button} from '../button/Button';

export const RegistrationForm = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <InputField labelText="First Name" />
      <InputField labelText="Last Name" />
      <InputField labelText="Phone Number" />
      <InputField labelText="Password" />
      <div>
        <Button onClick={() => {}} caption='Create Account' type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" />
      </div>
    </form>
  )
}
