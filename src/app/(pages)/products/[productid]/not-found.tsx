"use client";
import { usePathname } from "next/navigation";
import React from "react";
const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/").pop();
  return (
    <div className="w-full">
      <h1 className="text-center text-amber-300">
        could not find anything for product {productId}
      </h1>
    </div>
  );
};

export default NotFound;
