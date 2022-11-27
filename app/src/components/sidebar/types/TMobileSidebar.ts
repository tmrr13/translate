import {Dispatch, ReactElement, SetStateAction} from 'react';

export type TMobileSidebar = {
  show: boolean;
  onClose: (value: boolean) => void;
  onClick: Dispatch<SetStateAction<boolean>>;
  children: ReactElement;
}
