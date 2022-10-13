import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/login";
import { SignUp } from "../pages/auth/signup";
import { Home } from "../pages/home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
