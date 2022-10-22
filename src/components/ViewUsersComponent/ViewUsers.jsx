import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { getUsers } from "../../api/api";

export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        console.log(res.data[0]);
        setUsers(res.data);
        setFilteredUsers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const handleDropdown = (e) => {
    const { value } = e.target;
    value === "all"
      ? setFilteredUsers([...users])
      : setFilteredUsers(users.filter((user) => user._id === value));
  };
  return (
    <div className="mt-3 container">
    <p>Search User</p>
      <Form.Select aria-label="user dropdown" onChange={handleDropdown}>
        <option value="all">All</option>
        {users.map((user) => {
          return (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          );
        })}
      </Form.Select>
      <hr />
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Cell#</th>
            <th>Age</th>
            <th>Created At</th>
            <th>is Deleted</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user._id.toString()}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.cell}</td>
                <td>{user.age}</td>
                <td>{user.createdAt}</td>
                <td>{user.isDeleted.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
