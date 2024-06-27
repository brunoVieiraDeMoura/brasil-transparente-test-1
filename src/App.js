import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Subscribe from "./components/Subscribe";
import UserList from "./components/UserList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <UserList />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
