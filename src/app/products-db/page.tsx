import {  getProducts } from "@/prisma-db";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDBPage = async () => {
  const products: Product[] = await getProducts();

  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="bg-white text-black p-4 rounded-sm">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-gray-500">Price: {product.price}</p>
            <hr className="my-4" />
          </div>
        );
      })}
    </>
  );
};

export default ProductsDBPage;
