import "./App.css";
import { useS } from "use-s-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CountPage from "./CountPage";

function App() {
  const [count, setCount] = useS("count", 0, true);
  const [name, setName] = useS("name", "", true);
  const [user, setUser] = useS("user", { firstName: "", lastName: "" }, true);
  const handleReset = () => {
    setCount(0);
    setName("");
    setUser({ firstName: "", lastName: "" });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="card">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={user.firstName}
                    onChange={(e) =>
                      setUser((u) => ({ ...u, firstName: e.target.value }))
                    }
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={user.lastName}
                    onChange={(e) =>
                      setUser((u) => ({ ...u, lastName: e.target.value }))
                    }
                  />
                </div>
                <button onClick={handleReset}>Reset</button>
                <Link to="/count">Go to Count Page</Link>
              </div>
              {/* <CountPage /> */}
            </>
          }
        />
        <Route path="/count" element={<CountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
