import React, {useEffect, useState} from 'react';
import {InputField} from '../input-field/InputField';
import {Checkbox} from '../checkbox/checkbox';
import {Button} from '../button/Button';


import {Link, useNavigate} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, signInWithGoogle} from '../utils/firebase';
import {MEMO_PAGE_ROUTE} from '../utils/consts';


export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate(MEMO_PAGE_ROUTE);
  }, [user, loading]);

  return (
    <form className="space-y-6" action="#" method="POST">
      <InputField htmlFor="email-address" id="email-address" name="email" type="email"
                  onChange={(e) => setEmail(e.target.value)} labelText="Email address" />
      <InputField htmlFor="password" id="password" name="password" type="password"
                  onChange={(e) => setPassword(e.target.value)} labelText="Password" />

      <div className="flex flex-col gap-3.5">
        <Button onClick={() => signInWithEmailAndPassword(auth, email, password)} caption="Sign in" type="button"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" />
        <Button onClick={signInWithGoogle} caption="Login with Google" type="button"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" />
      </div>

      {/*<div>*/}
      {/*  <Link to="/reset">Forgot Password</Link>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Don't have an account? <Link to="/register">Register</Link> now.*/}
      {/*</div>*/}

    </form>
  );
}
