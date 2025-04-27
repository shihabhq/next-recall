import { getProducts } from "@/prisma-db";
import AllProducts from "./AllProducts";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

const Products = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return (
    <div>
      <AllProducts products={products} />
    </div>
  );
};

export default Products;
