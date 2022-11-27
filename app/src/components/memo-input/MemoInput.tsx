import React, { useRef } from 'react';
import classnames from 'classnames';
import { IMemoInput } from './IMemoInput';

import './MemoInput.scss';

export const MemoInput = ({onClick}: IMemoInput) => {
  const refFileInput = useRef<HTMLInputElement | null>(null);

  const getInputValue = () => {
    if (refFileInput.current?.value) {
      onClick(refFileInput.current?.value)
    }
  }
  return (
    <div className={classnames('field', 'title')}>
      <label>
        <input ref={refFileInput} type="text" />
        <span />
      </label>
      <button onClick={getInputValue} className={'btn'}>save</button>
    </div>
  )
}
