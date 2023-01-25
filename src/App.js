import { Routes, Route } from "react-router-dom";
import Main from "./components/AdminDashboardComponents/Main";
import Home from "./components/AdminDashboardComponents/Home/Home";
import User from "./components/AdminDashboardComponents/User/User";
import UserList from "./components/AdminDashboardComponents/User List/UserList";
import Categories from "./components/AdminDashboardComponents/Categories/Categories";
import Reports from "./components/AdminDashboardComponents/Reports";
import Rankings from "./components/AdminDashboardComponents/Rankings/Rankings";
import Rank from "./components/AdminDashboardComponents/Rank/Rank";
import Message from "./components/AdminDashboardComponents/Message/Message";

function App() {
  return (
    <>
      <Routes>
        <Route path={""} element={<Main />}>
          <Route path={"/"} element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="categories" element={<Categories />} />
          <Route path="reports" element={<Reports />} />
          <Route path="rankings" element={<Rankings />} />
          <Route path="/rank/:rankId" element={<Rank />} />
          <Route path="message" element={<Message />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
