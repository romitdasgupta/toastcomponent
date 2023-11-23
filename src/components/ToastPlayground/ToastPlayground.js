import React from 'react';

import Button from '../Button';

import Toast from '../Toast/Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [radioVariant, setRadioVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toast, toggleToast] = React.useState(false);

  function submitToast(e) {
    e.preventDefault();
    toggleToast(true);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toast &&
      <Toast  content={message} variant={radioVariant} toggleToast={toggleToast}/>}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message"
            className={styles.messageInput}
            onChange={(e) => setMessage(e.target.value)}
            value={message}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((variant) => (
                <label htmlFor={`variant-${variant}`} key={variant}>
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    onChange={(e) => setRadioVariant(e.target.value)}
                    {...(variant === radioVariant ? { defaultChecked: true } : {})}
                  />
                  {variant}
                </label>
              ))}
            </div>
          </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={submitToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
