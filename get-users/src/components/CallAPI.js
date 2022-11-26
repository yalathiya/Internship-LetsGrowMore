import React, { useEffect, useState } from "react";

const CallAPI = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.first_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CallAPI;
