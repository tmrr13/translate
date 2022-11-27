import React from 'react';

export const Login = () => {
  const user = false;
  return (
    <div>
      {user ?
        (
          <button>Exit</button>
        )
        :
        (
          <button>Login</button>
        )
      }
    </div>
  )
}
