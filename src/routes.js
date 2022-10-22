import React from "react";
import { Routes, Route } from "react-router-dom";

export default function routes() {
  return (
    <Routes>
      <Route exact path="/" element={<h1>Users</h1>} />
      <Route exact path="/add-user" element={<h1>Add user</h1>} />
    </Routes>
  );
}
