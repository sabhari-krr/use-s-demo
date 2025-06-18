import { Link } from "react-router-dom";
import { useS } from "use-s-react";

function CountPage() {
  const [count] = useS("count", 0, true);
  const [name, setName] = useS("name", "", true);
  const [user, setUser] = useS("user", { firstName: "", lastName: "" }, true);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Result page</h2>
      <p>
        The current count is: <strong>{count}</strong>
      </p>
      <p>
        The current name is: <strong>{name}</strong>
      </p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <p>
        User:{" "}
        <strong>
          {user.firstName} {user.lastName}
        </strong>
      </p>
      <input
        type="text"
        placeholder="First Name"
        value={user.firstName}
        onChange={(e) => setUser((u) => ({ ...u, firstName: e.target.value }))}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={user.lastName}
        onChange={(e) => setUser((u) => ({ ...u, lastName: e.target.value }))}
      />
      <Link to="/">Back to home baby</Link>
    </div>
  );
}

export default CountPage;
