import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import {ToastProviderContext} from '../ToastProvider';
import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({variant, keyid, children}) {
  const toastStyle = `${styles.toast} ${styles[variant]}`;
  const IconStyle = ICONS_BY_VARIANT[variant];
  const {removeToast} = React.useContext(ToastProviderContext);

  function handleClose() {
    removeToast(keyid);
  }

  return (
    <div className={toastStyle}>
      <div className={styles.iconContainer}>
        <IconStyle size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton} onClick={handleClose}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
