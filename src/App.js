import LoginPage from "./pages/LoginPage";
import ForgotPage from "./pages/ForgotPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
