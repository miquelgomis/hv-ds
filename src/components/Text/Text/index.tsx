import React, { FC } from 'react';
import Styles from './index.module.scss';

export interface TextProps {
  className?: string;
  children: React.ReactElement;
  Tag?: 'p' | 'div';
  italic?: boolean;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
}

const Text: FC<TextProps> = ({
  className = '',
  children = <></>,
  Tag = 'div',
  italic = false,
  size = "m"
}) => {
  return <Tag className={`${Styles.text} ${className} text-${size} ${italic ? 'italic' : ''}`}>{children}</Tag>;
};

export default Text;
