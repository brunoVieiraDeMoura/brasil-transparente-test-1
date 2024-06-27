import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários", error);
      }
    };
    fetchUsers();
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
