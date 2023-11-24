import React from 'react';

import styles from './ToastShelf.module.css';

function ToastShelf({children}) {
  return (
    <ol className={styles.wrapper}>
    {children.map((child) => (
      <li className={styles.toastWrapper} key={child.props.keyid}>
        {child}
      </li>
    ))}
    </ol>
  );
}

export default ToastShelf;
