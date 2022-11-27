import React from 'react';
import classnames from 'classnames';
import {TMemoList} from './types/TMemoList';

import './MemoList.scss';

export const MemoList = ({collectionWords}: TMemoList) => {

  return (
    <>
      {collectionWords ? (
        <>
          {collectionWords.map((item: string) =>
            <div key={item}>
              <span>{item}</span>
              <span key={item}>{item}</span>
            </div>
          )}
        </>
      ) : (
        ''
      )}
    </>
  )
}
