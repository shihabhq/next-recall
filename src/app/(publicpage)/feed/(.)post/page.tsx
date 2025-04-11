"use client";

import { useRouter } from "next/navigation";

export default function PostModal() {
  const router = useRouter();

  return (
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: "30%",
        background: "white",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <h2>Modal: Post</h2>
      <button onClick={() => router.back()}>Close</button>
    </div>
  );
}
