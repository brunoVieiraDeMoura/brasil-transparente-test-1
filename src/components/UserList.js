import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("connect", () => {
      console.log("Conectado ao servidor WebSocket");
    });

    socket.on("users", (data) => {
      setUsers(data);
    });

    socket.on("newUser", (user) => {
      setUsers((prevUsers) => [...prevUsers, user]);
    });

    socket.on("disconnect", () => {
      console.log("Desconectado do servidor WebSocket");
    });

    return () => {
      socket.off("users");
      socket.off("newUser");
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Lista de usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
