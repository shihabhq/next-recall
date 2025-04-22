import { Suspense } from "react";
import Author from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostSequential = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter((post) => post.id % 10 === 1); //to get every post of differen user

  return (
    <div className="bg-white text-black p-4 rounded-sm">
      {filteredPosts.map((post) => {
        return (
          <div key={post.id}>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="text-gray-500">{post.body}</p>
            <Suspense fallback={<p className="text-gray-500">Loading...</p>}>
              <Author id={post.userId} />
            </Suspense>
            <hr className="my-4" />
          </div>
        );
      })}
    </div>
  );
};

export default PostSequential;
