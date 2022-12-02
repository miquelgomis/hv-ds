import React, { FC } from 'react';
import Styles from './index.module.scss';

export interface TitleProps {
  className?: string;
  title: string;
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  color?: 'primary' | 'secondary';
  underline?: boolean;
}

const Title: FC<TitleProps> = ({
  title,
  Tag = 'h1',
  size = 'm',
  className = '',
  underline = false,
  color = 'primary',
}) => {
  return (
    <Tag
      className={`${Styles.title} ${className}
      ${size ? 'text-' + size : ''} ${color ? 'text-' + color : ''} ${
        underline ? 'underline' : ''
      }`}
    >
      {title}
    </Tag>
  );
};

export default Title;
