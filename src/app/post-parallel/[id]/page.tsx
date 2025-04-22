type Album = {
  userId: number;
  id: number;
  title: string;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getUserAlbums = async (userId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return response.json();
};

const getUserPosts = async (userId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return response.json();
};

const getUserInfo = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const allAlbums = getUserAlbums(Number(id));
  const allPosts = getUserPosts(Number(id));

  const [albums, posts]: [Album[], Post[]] = await Promise.all([
    allAlbums,
    allPosts,
  ]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-2xl font-bold">User {id}</h1>
        <h2 className="text-xl font-bold">Albums</h2>
        <ul className="list-disc pl-5">
          {albums.map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold">Posts</h2>
        <ul className="list-disc pl-5">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default getUserInfo;
