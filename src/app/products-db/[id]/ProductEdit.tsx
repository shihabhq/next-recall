import { editAction, FormState } from "@/actions/products";
import { useActionState } from "react";
import { Product } from "../page";

const EditProductsForm = ({ product }: { product: Product }) => {
  const initialState: FormState = {
    errors: {},
  };
  const editProductWithId = editAction.bind(null, product.id); //same as calling editAction(product.id);
  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );
  return (
    <form action={formAction} className="flex flex-col gap-4 w-96 p-4">
      <h1>Edit Products</h1>
      <div>
        <input
          className="border-1 rounded-sm p-2 "
          type="text"
          placeholder="Product Name"
          name="title"
        />
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <input
          className="border-1 rounded-sm p-2"
          type="number"
          placeholder="Price"
          name="price"
        />
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <textarea
          className="border-1 rounded-sm p-2"
          placeholder="Description"
          name="description"
        ></textarea>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </form>
  );
};

export default EditProductsForm;
