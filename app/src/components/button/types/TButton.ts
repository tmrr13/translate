import {ReactElement} from 'react';

export type TButton = {
  onClick: () => void,
  className: string,
  children?: ReactElement;
  type?: "button" | "submit" | "reset" | undefined;
  caption?: string;
}
