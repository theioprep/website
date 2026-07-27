import * as React from 'react';
export interface TabItem { label?: string; value?: string; }
export interface TabsProps {
  tabs?: (TabItem | string)[];
  active?: string;
  onChange?: (value: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
