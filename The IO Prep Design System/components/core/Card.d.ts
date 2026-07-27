import * as React from 'react';
export interface CardProps {
  children?: React.ReactNode;
  padded?: boolean;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
