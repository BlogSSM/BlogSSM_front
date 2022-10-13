import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { NotFound } from "../components/NotFound";
import { RequireAuth } from "../components/RequireAuth";
import { Login } from "../pages/auth/login";
import { SignUp } from "../pages/auth/signup";
import { Home } from "../pages/home";
import { Write } from "../pages/write";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/write"
            element={
              <RequireAuth>
                <Write />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
