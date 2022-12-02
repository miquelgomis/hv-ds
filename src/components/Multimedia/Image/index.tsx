import React, { FC } from 'react';
import Styles from './index.module.scss';

export interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  proportion?: number | null;
}

const Image: FC<ImageProps> = ({
  className = '',
  src,
  alt = '',
  proportion = null
}) => {
  return (
    <div className={`${Styles.image} ${className}`}>
      <div className={`${proportion ? Styles.proportion : ''}`} style={proportion ? {paddingBottom: (proportion * 100) + "%"} : {}}>
        <img src={src} alt={alt} title={alt} />
      </div>
    </div>
  );
};

export default Image;
