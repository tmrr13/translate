import React from 'react';
import {TMemoList} from './types/TMemoList';

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
