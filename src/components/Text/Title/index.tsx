import React, { FC } from 'react';
import { colors, sizes } from '../../../interfaces/commons';
import Styles from './index.module.scss';

export interface TitleProps {
  className?: string;
  title: string;
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  size?: sizes;
  color?: colors;
  underline?: boolean;
}

const Title: FC<TitleProps> = ({
  title,
  Tag = 'h1',
  size = 'm',
  className = '',
  underline = false,
}) => {
  return (
    <Tag
      className={`${Styles.title} ${className}
      ${size ? 'text-' + size : ''} ${
        underline ? 'underline' : ''
      }`}
    >
      {title}
    </Tag>
  );
};

export default Title;
