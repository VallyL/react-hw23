import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<RequireAuth />}>
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
