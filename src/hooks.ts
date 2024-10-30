import { useEffect, useState } from 'react';
import type { Errors } from './interfaces.ts';

/**
 * A hook that returns true once the component has mounted.
 */
export const useHydrated = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
};

/**
 * A hook that focuses the first invalid element in a form.
 */
export const useFocusInvalid = (
  formEl: HTMLFormElement | null,
  hasErrors: Errors | null
) => {
  useEffect(() => {
    if (!formEl) return;
    if (!hasErrors) return;

    if (formEl.matches('[aria-invalid="true"]')) {
      formEl.focus();
    } else {
      const firstInvalid = formEl.querySelector('[aria-invalid="true"]');

      if (firstInvalid instanceof HTMLElement) {
        firstInvalid.focus();
      }
    }
  }, [formEl, hasErrors]);
};
