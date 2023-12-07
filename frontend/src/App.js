import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./pages/Dashboard";
import List from "./pages/location/List";

import Create from "./pages/location/Create";
import Edit from "./pages/location/Edit";
import ListCategory from "./pages/category/ListCategory";
import CreateCategory from "./pages/category/CreateCategory";
import EditCategory from "./pages/category/EditCategory";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user/dashboard" element={<Dashboard />}></Route>
          <Route path="/user/location" element={<List />}></Route>
          <Route path="/location/create" element={<Create />}></Route>
          <Route path="/location/edit:id" element={<Edit />}></Route>
          <Route path="/user/category" element={<ListCategory />}></Route>
          <Route path="/category/create" element={<CreateCategory />}></Route>
          <Route path="/category/edit:id" element={<EditCategory />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
