import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { Reviews } from "./pages/Reviews.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
]);

function App() {
  return (
      <RouterProvider router={router}/>

  );
}

export default App;
