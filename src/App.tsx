import { useState } from "react";
import ContactForm from "./components/ContactForm.tsx";
import Toast from "./components/Toast.tsx";

export default function App() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  return (
    <main className="md:py-1600 min-h-dvh bg-subtle px-200 py-400 text-neutral">
      {showToast && <Toast setShowToast={setShowToast} />}
      <ContactForm onSubmit={handleShowToast} />
    </main>
  );
}
