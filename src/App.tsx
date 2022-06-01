import { TestingTailwind } from "./components/TestingTailwind";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App(): JSX.Element {
  return (
    <div className="flex flex-row">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<TestingTailwind text={"This is a test!"} />}
          />

          <Route path="teams">
            <Route index element={<TestingTailwind text={"This is Teams"} />} />
            <Route
              path=":teamId"
              element={<TestingTailwind text={"This is Teams with an ID!"} />}
            />
          </Route>
          <Route
            path="*"
            element={<TestingTailwind text={"This is an Error Page"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
