import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({children}) {
  return (
    <ol className={styles.wrapper}>
    {children.map((child) => (
      <li className={styles.toastWrapper} key={child.key}>
        {child.jsx}
      </li>
    ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
