import './App.css'
import { useQuery } from "react-query";

function App() {

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  };

  const { data, status, error } = useQuery("users", fetchUsers);

  return (
    <div className="App">
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>data is loading</p>}
      {status === "success" && (
        <div>
          {data.map((user: any) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
