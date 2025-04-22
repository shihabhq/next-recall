const Products = async () => {
    await new Promise(resolve => setTimeout(resolve,4000))
    return (
    <div>Products</div>
  );
};

export default Products;