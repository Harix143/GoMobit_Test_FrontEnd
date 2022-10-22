import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUserComponent/AddUser";
import TopNav from "./components/Navbar/Nav";
import ViewUsers from "./components/ViewUsersComponent/ViewUsers";

function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route exact path="/" element={<ViewUsers/>} />
        <Route exact path="/add-user" element={<AddUser/>} />
      </Routes>
    </>
  );
}

export default App;
