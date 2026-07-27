import * as React from 'react';
export interface BadgeProps {
  tone?: 'blue' | 'gold' | 'success' | 'error';
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
export interface TagProps {
  children?: React.ReactNode;
  onRemove?: () => void;
}
export declare function Tag(props: TagProps): JSX.Element;
