import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({content="16 photos have been uploaded", variant="notice", toggleToast}) {
  const toastStyle = `${styles.toast} ${styles[variant]}`;
  const IconStyle = ICONS_BY_VARIANT[variant];
  function handleToggle() {
    toggleToast(false);
  }
  return (
    <div className={toastStyle}>
      <div className={styles.iconContainer}>
        <IconStyle size={24} />
      </div>
      <p className={styles.content}>
        {content}
      </p>
      <button className={styles.closeButton} onClick={handleToggle}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
