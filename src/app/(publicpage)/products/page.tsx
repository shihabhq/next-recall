import Link from "next/link";

const Products = () => {
  return (
    <div className="flex flex-col">
        <Link href='/products/1'>Product 1</Link>
        <Link href='/products/2'>Product 2</Link>
        <Link href='/products/3' replace>Product 3</Link>
        {/* replace will erase the history and go back to home if clicked 
        on back */}
    </div>
  );
};

export default Products;