import {ChangeEventHandler} from 'react';

export type TInputField = {
  labelText: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  htmlFor: string;
  id: string;
  name: string;
  type: string;
}
