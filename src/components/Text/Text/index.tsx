import React, { FC } from 'react';
import Styles from './index.module.scss';

export interface TextProps {
  className?: string;
  text: string;
  Tag?: 'p' | 'div';
  italic?: boolean;
}

const Text: FC<TextProps> = ({
  className = '',
  text,
  Tag = 'div',
  italic = false,
}) => {
  return <Tag className={`${Styles.text} ${className} ${italic ? 'italic' : ''}`}>{text}</Tag>;
};

export default Text;
