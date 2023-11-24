import React from "react";

export default function useEscapeKey(handleEscape, deps) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        handleEscape();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleEscape, deps]);
}
