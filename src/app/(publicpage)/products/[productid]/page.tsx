import { Metadata } from "next";

type Props = {
  params: Promise<{ productid: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  //must be in this name

  const { productid } = await params;
  return {
    title: `Product ${productid}`,
  };
};

const DynamicProductPage = async ({ params }: Props) => {
  const { productid } = await params;
  return <div> product details for {productid}</div>;
};

export default DynamicProductPage;
