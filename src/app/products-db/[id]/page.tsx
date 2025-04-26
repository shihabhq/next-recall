import { createAction, FormState } from "@/actions/products";
import { getProduct } from "@/prisma-db";
import { useActionState } from "react";
import EditProductsForm from "./ProductEdit";
import { Product } from "../page";
import { notFound } from "next/navigation";

const EditProductsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  //   const initialState: FormState = {
  //     errors: {},
  //   };
  //   const [state, formAction, isPending] = useActionState(
  //     createAction,
  //     initialState
  //   );
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <EditProductsForm product={product} />;
};

export default EditProductsPage;
