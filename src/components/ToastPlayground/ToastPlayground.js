import React from 'react';

import Button from '../Button';

import Toast from '../Toast/Toast';

import ToastShelf from '../ToastShelf/ToastShelf';

import { ToastProviderContext } from '../ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [radioVariant, setRadioVariant] = React.useState(VARIANT_OPTIONS[0]);
  const {toasts, addToast} = React.useContext(ToastProviderContext);

  function submitToast(e) {
    e.preventDefault();
    if (!message) return;
    const key = crypto.randomUUID();
    addToast(
      <Toast variant={radioVariant}
             key_id={key} key={key}>
        {message}
      </Toast>);
    setMessage('');
    setRadioVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

        <ToastShelf>
          {toasts}
        </ToastShelf>
      <form onSubmit={submitToast}>
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
              {VARIANT_OPTIONS.map((variant, index) => (
                <label htmlFor={`variant-${variant}`} key={variant}>
                  {variant}
                  <input
                    type="radio"
                    id={`variant-${variant}`}
                    name="variant"
                    value={variant}
                    checked={radioVariant === variant}
                    onChange={(e) => setRadioVariant(variant)}
                />
                </label>
              ))}
            </div>
          </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
