//this is a dynamic route as next js doesn't know what will be the id

export const generateStaticParams = async () => {
  return [{ id: "1" }, { id: "2" }]; // this will generate static pages for id 1 and 2
  //enabling prefetching for this only
};

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id);
  return <div>Welcome to abot page {new Date().toLocaleString()}</div>;
};

export default Product;
