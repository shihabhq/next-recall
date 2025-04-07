const Products = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Products listed</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
      <div>{children}</div>
    </div>
  );
};

export default Products;
