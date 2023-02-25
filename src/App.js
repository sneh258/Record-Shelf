import "./App.css";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page1/Page2";
import Page3 from "./pages/page1/Page3";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Page1 />} />
          <Route path={"/allsongs"} element={<Page2/>} />
          <Route path={"/allsongs/genre"} element={<Page3/>} />
          {/* <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
