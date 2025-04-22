type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const Users = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await data.json();

  return (
    <div className="bg-white text-black p-4 rounded-sm">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.username}</p>
            <p className="text-gray-500">{user.email}</p>
            <hr className="my-4" />
          </div>
        );
      })}
    </div>
  );
};

export default Users;
