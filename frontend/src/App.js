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
import RequestList from "./pages/request/RequestList";
import RequestCreate from "./pages/request/RequestCreate";
import RequestEdit from "./pages/request/RequestEdit";
import BookList from "./pages/books/BookList";
import BookCreate from "./pages/books/BookCreate";
import { BookEdit } from "./pages/books/BookEdit";
import UserList from "./pages/users/UserList";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import CourseCreate from "./pages/course/CourseCreate";
import CourseList from "./pages/course/CourseList";
import CourseEdit from "./pages/course/CourseEdit";
import RoleCreate from "./pages/roles/RoleCreate";
import RoleList from "./pages/roles/RoleList";
import RoleEdit from "./pages/roles/RoleEdit";



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

          <Route path="/user/request" element={<RequestList />}></Route>
          <Route path="/user/request/create" element={<RequestCreate />}></Route>
          <Route path="/request/edit:id" element={<RequestEdit />}></Route>

          <Route path="/user/books" element={<BookList />}></Route>
          <Route path="/user/book/create" element={<BookCreate />}></Route>
          <Route path="/book/edit:id" element={<BookEdit />}></Route>

          <Route path="/user/users" element={<UserList />}></Route>
          <Route path="/user/users/create" element={<UserCreate />}></Route>
          <Route path="/user/edit:id" element={<UserEdit />}></Route>

          <Route path="/user/course" element={<CourseList />}></Route>
          <Route path="/user/course/create" element={<CourseCreate />}></Route>
          <Route path="/user/edit:id" element={<CourseEdit />}></Route>

          <Route path="/user/roles" element={<RoleList />}></Route>
          <Route path="/user/roles/create" element={<RoleCreate />}></Route>
          <Route path="/user/edit:id" element={<RoleEdit />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
