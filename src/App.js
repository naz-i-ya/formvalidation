import Login from './components/Login';
// import { selectUser } from "./features/userSlice";
// import { useSelector } from "react-redux";
// import Logout from "./components/Logout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register';


const App = () => {
  // const user = useSelector(selectUser);
  // console.log(user);

  return (
  <div>
    {/* {user ? <Logout /> : <Login />} */}
    <BrowserRouter>
     <Routes>
       {/* <Route path="/home" element={<App  />} /> */}
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </BrowserRouter>
    </div>
    );
};

export default App;
