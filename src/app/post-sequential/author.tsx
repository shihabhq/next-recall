type Author = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const Author = async ({ id }: { id: number }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: Author = await data.json();
  return <p className="text-gray-500">{user.name}</p>;
};
export default Author;
