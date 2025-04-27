"use client";

import { editProduct, FormState } from "@/actions/products";
import Form from "next/form";
import { Product } from "../page";
import { useActionState } from "react";

const EditProductForm = ({ product }: { product: Product }) => {
  const initialState: FormState = {
    errors: {},
  };
  const editFormWithId = editProduct.bind(null, product.id);
  const [state, formAction, isPending] = useActionState(
    editFormWithId,
    initialState
  );
  return (
    <Form
      action={formAction}
      className="flex flex-col gap-4 p-4 bg-white text-black w-fit rounded-sm"
    >
      <div>
        <input
          type="text"
          name="title"
          defaultValue={product.title}
          placeholder="Title"
          className="p-2 border border-gray-300 rounded-md"
        />{" "}
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <input
          type="number"
          name="price"
          defaultValue={product.price}
          placeholder="Price"
          className="p-2 border border-gray-300 rounded-md"
        />
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <textarea
          name="description"
          defaultValue={product.description}
          placeholder="Description"
          className="p-2 border border-gray-300 rounded-md"
        ></textarea>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      <button
        type="submit"
        className="px-3 py-2 bg-blue-500 disabled:bg-gray-800 hover:bg-blue-600 cursor-pointer text-white rounded-md"
        disabled={isPending}
      >
        Update Product
      </button>
    </Form>
  );
};

export default EditProductForm;
