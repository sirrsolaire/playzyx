import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { Reviews } from "./pages/Reviews.jsx";
import { LastThirtyGames } from "./pages/LastThirtyGames.jsx";
import { ThisWeekGames } from "./pages/ThisWeekGames.jsx";
import { NextWeekGames } from "./pages/NextWeekGames.jsx";
import { ReleaseCalendar } from "./pages/ReleaseCalendar.jsx";
import { AllGames } from "./pages/AllGames.jsx";
import GamesByMonth from "./ui/GamesByMonth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/games",
    element: <AllGames />,
  },
  {
    path: "/last-30-days",
    element: <LastThirtyGames />,
  },
  {
    path: "/this-week",
    element: <ThisWeekGames />,
  },
  {
    path: "/next-week",
    element: <NextWeekGames />,
  },
  {
    path: "/release-calendar",
    element: <ReleaseCalendar />,
    children: [
      {
        path: "/release-calendar/:month", // :month captures the month parameter
        element: <GamesByMonth />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Page Not Found!!</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
