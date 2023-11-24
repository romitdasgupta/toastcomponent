import React from 'react';

export const ToastProviderContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(toast) {
    setToasts((currentToasts) => [...currentToasts, toast]);
  }

  function removeToast(key) {
    setToasts((currentToasts) => {
      const filteredToasts = currentToasts.filter((toast) => toast.props.keyid !== key);
      return filteredToasts;
    });
  }

  return (
    <ToastProviderContext.Provider value={{toasts, addToast, removeToast}}>
      {children}
    </ToastProviderContext.Provider>)
}

export default ToastProvider;
