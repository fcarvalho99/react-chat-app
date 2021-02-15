import { useState } from "react";
import axios from "axios";

const projectId = "8da16ccf-016f-4ae0-8ac4-0d69f6a6969b";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authObject = {
    "Project-ID": projectId,
    "User-Name": username,
    "User-Secret": password,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Username or Password not found!");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Engine Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Tap to chat</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
