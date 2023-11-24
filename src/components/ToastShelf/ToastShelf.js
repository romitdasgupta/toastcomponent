import React from 'react';

import styles from './ToastShelf.module.css';

function ToastShelf({children}) {
  return (
    <ol className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification">
    {children.map((child) => (
      <li className={styles.toastWrapper} key={child.props.key_id}>
        {child}
      </li>
    ))}
    </ol>
  );
}

export default ToastShelf;
