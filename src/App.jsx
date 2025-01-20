import { Route, Routes } from "react-router-dom";
import SignupForm from "./components/SingupForm";
import SuccessMessage from "./components/SuccessMessage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/success" element={<SuccessMessage />} />
      </Routes>
    </>
  );
}

export default App;
