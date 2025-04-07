//nested inside the [productid]

const Review = async ({
  params,
}: {
  params: Promise<{ reviewid: string; productid: string }>;
  //note: nested dynamic route has the access to the parent dynamic route params
}) => {
  const { reviewid, productid } = await params;
  return (
    <div>
      the {reviewid} review of product {productid}
    </div>
  );
};

export default Review;
