import Submit from "@/components/submit";
import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

const AddProductsPage = () => {
  const handleSubmit = async (formdata: FormData) => {
    "use server";
    const title = formdata.get("title") as string;
    const price = formdata.get("price") as string;
    const description = formdata.get("description") as string;
    console.log(title);

    await addProduct(title, parseFloat(price), description);
    redirect("/products-db");
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-4 w-96 p-4">
      <h1>Add Products</h1>
      <input
        className="border-1 rounded-sm p-2 "
        type="text"
        placeholder="Product Name"
        name="title"
        required
      />
      <input
        className="border-1 rounded-sm p-2"
        type="number"
        placeholder="Price"
        name="price"
        required
      />
      <textarea
        className="border-1 rounded-sm p-2"
        placeholder="Description"
        name="description"
        required
      ></textarea>
      <Submit />
    </form>
  );
};

export default AddProductsPage;
