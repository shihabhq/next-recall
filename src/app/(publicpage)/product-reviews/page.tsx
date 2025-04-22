import Products from "@/components/products";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

const ProductReviews = () => {
  return (
    <div>
      <h1>Product reviews page</h1> {/* this appears instantly*/}
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default ProductReviews;
