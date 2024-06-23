import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StatesPage from "./pages/State";
import DetailPage from "./pages/Detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StatesPage />,
    },
    {
      path: "/detail/:productNumber",
      element: <DetailPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
