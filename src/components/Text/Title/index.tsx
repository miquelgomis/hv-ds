import React, { FC } from 'react';
import Styles from './index.module.scss';

export interface TitleProps {
  className?: string;
  title: string;
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  size?: "sm" | "base" | "xl" | "2xl" | "3xl";
  underline?: boolean
}

const Title: FC<TitleProps> = ({
  title,
  Tag = 'h1',
  size = 'base',
  className = '',
  underline = false
}) => {
  return (
    <Tag className={`${Styles.title} ${className} text-${size} ${underline ? 'underline' : ''}`}>
      {title}
    </Tag>
  );
};

export default Title;
