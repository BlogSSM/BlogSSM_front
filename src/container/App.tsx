import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { NotFound } from "../components/NotFound";
import { RequireAuth } from "../components/RequireAuth";
import { Login } from "../pages/auth/login";
import { SignUp } from "../pages/auth/signup";
import { PostDetail } from "../pages/detail";
import { Postings } from "../pages/home";
import { Write } from "../pages/write";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Postings />} />
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
            <Route path="/post/:post_id" element={<PostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
