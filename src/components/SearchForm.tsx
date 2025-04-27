import Form from "next/form";

const SearchComponent = () => {
  return (
    <Form action={'/products-db'} className="flex flex-col gap-4 p-4 bg-white text-black w-fit rounded-sm">
        <div>
            <input
            type="text"
            name="query" /**automatically searches with this searchParam name */
            placeholder="Search"
            className="p-2 border border-gray-300 rounded-md"
            />
        </div>
        <button
            type="submit"
            className="px-3 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-md"
        >
            Search
        </button>
    </Form>
  );
};

export default SearchComponent;