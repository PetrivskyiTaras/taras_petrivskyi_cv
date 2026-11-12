import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

/**
 * Native printing for the whole page (button, Ctrl/Cmd+P and the browser menu):
 * - `print()` loads on-demand data first (contact details), then opens the print dialog;
 * - Ctrl/Cmd+P is routed through `print()` so contacts are included there too;
 * - the page prints in the currently selected theme (backgrounds are kept via print-color-adjust).
 */
const usePrintMode = (prepare: () => Promise<void>) => {
  const [printing, setPrinting] = useState(false);

  const print = useCallback(async () => {
    try {
      await prepare();
    } catch (error) {
      console.error(error);
    }
    window.print();
  }, [prepare]);

  useEffect(() => {
    const handleBeforePrint = () => {
      flushSync(() => setPrinting(true));
    };

    const handleAfterPrint = () => {
      setPrinting(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'p') {
        event.preventDefault();
        void print();
      }
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [print]);

  return { printing, print };
};

export default usePrintMode;
