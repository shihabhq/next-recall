"use client";
import { createProduct, FormState } from "@/actions/products";
import Form from "next/form";
import { useActionState } from "react";

const CreateProductForm = () => {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    createProduct,
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
        Create Product
      </button>
    </Form>
  );
};

export default CreateProductForm;
