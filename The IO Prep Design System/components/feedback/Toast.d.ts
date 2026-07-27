import * as React from 'react';
export interface ToastProps { tone?: 'blue' | 'success' | 'error'; children?: React.ReactNode; }
export declare function Toast(props: ToastProps): JSX.Element;
