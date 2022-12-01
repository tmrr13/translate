import React, {useContext} from 'react';
import {InputField} from '../input-field/InputField';
import {Checkbox} from '../checkbox/checkbox';
import {Button} from '../button/Button';


export const LoginForm = () => {


  return (
    <form className="space-y-6" action="#" method="POST">
      <InputField labelText="Email address" />
      <InputField labelText="Password" />

      <div className="flex items-center justify-between">
        <Checkbox labelText="Remember me" />
        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <Button onClick={() => {}} caption='Sign in' type="button" className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" />
      </div>
    </form>
  )
}
