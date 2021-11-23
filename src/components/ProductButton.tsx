import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import React from 'react';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increasyBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
    counter,
    maxCount,
  ]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increasyBy(-1)}>
        {' '}
        -{' '}
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${isMaxReached() ? styles.disabled : ''} ${
          styles.buttonAdd
        }`}
        onClick={() => increasyBy(+1)}
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
};
