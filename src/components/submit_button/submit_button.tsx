"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = (buttonText: string = "Submit") => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      { buttonText }
    </button>
  );
}

export default SubmitButton;