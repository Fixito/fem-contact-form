import { useEffect } from "react";

interface ToastProps {
  setShowToast: (showToast: boolean) => void;
}

export default function Toast({ setShowToast }: ToastProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div
      role="alert"
      aria-live="polite"
      className="top-0 left-0 absolute flex w-full justify-center p-300"
    >
      <div className="rounded-xl grid gap-100 bg-success p-300 text-body-md-bold">
        <header className="flex items-center gap-100 text-neutral-inverse">
          <img src="/assets/images/icon-success-check.svg" alt="" />
          <h2>Message sent!</h2>
        </header>
        <p className="text-body-sm text-subtle">
          Thanks for completing the form. We'll be in touch soon!
        </p>
      </div>
    </div>
  );
}
