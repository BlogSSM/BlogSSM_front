import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "../components/Layout";
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
        <Layout>
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
        </Layout>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
