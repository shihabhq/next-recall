"use client";

import { useFormStatus } from "react-dom";

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Submit
    </button>
  );
};

export default Submit;
