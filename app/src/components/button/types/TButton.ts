import {ReactElement} from 'react';

export type TButton = {
  onClick: () => void,
  className: string,
  children?: ReactElement;
}
