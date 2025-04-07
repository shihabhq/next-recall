"use client";

import { useRouter } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ productid: string }>;
  searchParams: Promise<{ [key: string]: string | string[] }>; //or you can define by your won
};

const DynamicProductPage = ({ params }: Props) => {
  const router = useRouter();
  const { productid } = use(params);
  return (
    <div>
      {" "}
      product details for {productid}
      <button
       className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => {
          router.push("/");
        }}
      >
        Order Product
      </button>
    </div>
  );
};

export default DynamicProductPage;
