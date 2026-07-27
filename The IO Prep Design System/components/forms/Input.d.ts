import * as React from 'react';
export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
