import { Routes, Route, useNavigate,  } from "react-router-dom";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import { useEffect, useState } from "react";
import Error from "./pages/Error";

function App() {
  const [user, setUser] = useState<any>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else if (user) {
      navigate("/chat");
    }
  }, [user]);

  return (
    <Routes>
      <Route
        path="auth"
        element={<Auth onAuth={(user: any) => setUser(user)} />}
      />
      <Route path="chat" element={<Chat user={user} />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
