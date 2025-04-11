"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorFin = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="text-red-700">
      {error.message}
      <button onClick={reload}>Try again</button>
    </div>
  );
};

export default ErrorFin;
