interface UserListProps {
  id: number;
  name: string;
}

async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Pedro Henrique' },
        { id: 2, name: 'Maria da Silva' },
      ]);
    }, 2000);
  });
}

async function UserList() {
  const data = await fetchUsers();

  return (
    <div>
      {data.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}

export default function User() {
  return (
    <div>
      <h2>User list</h2>
      <UserList />
    </div>
  );
}
