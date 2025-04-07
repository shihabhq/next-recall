import { notFound } from "next/navigation";

const Product = async ({
  params,
}: {
  params: Promise<{ productid: string }>;
}) => {
  const { productid } = await params;
  if (!productid || !Number(productid) || Number(productid) < 0) {
    notFound();
  }
  return (
    <div>
      <h2>showing the product {productid}</h2>
    </div>
  );
};

export default Product;
