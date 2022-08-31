import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/";
import SignInPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="signin" element={<SignInPage />} exact />
      </Routes>
      <Home />
    </Router>
  );
}

export default App;

//<Route path="/" element={<Home />} exact /> <Route path="/signin" element={<SigninPage />} exact />.
