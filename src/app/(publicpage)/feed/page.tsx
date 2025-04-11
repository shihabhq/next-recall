import Link from "next/link";

const FeedPage = () => {
  return (
    <div>
      ShowPost
      <br />
      <Link href={"/feed/post"}>Show post</Link>
    </div>
  );
};

export default FeedPage;
