import { getProduct } from "@/prisma-db";
import { notFound } from "next/navigation";
import EditProductForm from "./EditForm";
import { Product } from "../page";

const EditProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product: Product | null = await getProduct(Number(id));
  if (!product) {
    notFound();
  }
  return (
    <div>
      <EditProductForm key={id} product={product} />
    </div>
  );
};

export default EditProductPage;
