
const Review = async ({
  params,
}: {
  params: Promise<{ reviewid: string; productid: string }>;
}) => {
  const { reviewid, productid } = await params;
  return (
    <div>
      <h2>
        Showing the review {reviewid} of {productid}
      </h2>
    </div>
  );
};

export default Review;
