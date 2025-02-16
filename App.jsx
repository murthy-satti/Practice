import { Route, Routes } from "react-router";
import Auth from "../Auth";
import Log from "../Log";
import Success from "../Success";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/register" element={<Auth />}></Route>
        <Route path="/" element={<Log />}></Route>
      </Routes>
    </>
  );
};

export default App;
