"use client";

import Link from "next/link";
import { Product } from "./page";
import { useOptimistic } from "react";
import { removeProduct } from "@/actions/products";
import Form from "next/form";

const AllProducts = ({ products }: { products: Product[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (prevstate: Product[], val: number) => {
      return prevstate.filter((product) => product.id !== val);
    }
  );

  const deleteProduct = async (id: number) => {
    setOptimisticProducts(id);
    await removeProduct(id);
  };

  return (
    <div className="flex gap-4 p-4 bg-white text-black rounded-sm">
      {optimisticProducts.map((product) => {
        return (
          <div
            key={product.id}
            className="flex flex-col gap-2 w-54 p-4 bg-gray-100 rounded-sm"
          >
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-xl font-bold">${product.price}</p>
            <Form action={deleteProduct.bind(null, product.id)} className="w-full" >
              <button className="px-3 py-2 bg-red-500 w-full hover:bg-red-600 cursor-pointer text-white rounded-md">
                Delete
              </button>
            </Form>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
