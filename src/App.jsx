import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { LastThirtyGames } from "./pages/LastThirtyGames.jsx";
import { ThisWeekGames } from "./pages/ThisWeekGames.jsx";
import { NextWeekGames } from "./pages/NextWeekGames.jsx";
import { ReleaseCalendar } from "./pages/ReleaseCalendar.jsx";
import { AllGames } from "./pages/AllGames.jsx";
import GamesByMonth from "./ui/GamesByMonth.jsx";
import { ActionGenre } from "./pages/ActionGenre.jsx";
import { StrategyGenre } from "./pages/StrategyGenre.jsx";
import { RpgGenre } from "./pages/RpgGenre.jsx";
import { ShooterGenre } from "./pages/ShooterGenre.jsx";
import { AdventureGenre } from "./pages/AdventureGenre.jsx";
import { PuzzleGenre } from "./pages/PuzzleGenre.jsx";
import { RacingGenre } from "./pages/RacingGenre.jsx";
import { SportsGenre } from "./pages/SportsGenre.jsx";
import { Platforms } from "./pages/Browse/Platforms.jsx";
import { Stores } from "./pages/Browse/Stores.jsx";
import { Genres } from "./pages/Browse/Genres.jsx";
import { Creators } from "./pages/Browse/Creators.jsx";
import { Tags } from "./pages/Browse/Tags.jsx";
import { Developers } from "./pages/Browse/Developers.jsx";
import { Publishers } from "./pages/Browse/Publishers.jsx";
import { PageParam } from "./ui/Browse/PageParam.jsx";
import { CreatorsParam } from "./ui/Browse/CreatorsParam.jsx";
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
    path: "/games/action",
    element: <ActionGenre />,
  },
  {
    path: "/games/strategy",
    element: <StrategyGenre />,
  },
  {
    path: "/games/rpg",
    element: <RpgGenre />,
  },
  {
    path: "/games/shooter",
    element: <ShooterGenre />,
  },
  {
    path: "/games/adventure",
    element: <AdventureGenre />,
  },
  {
    path: "/games/puzzle",
    element: <PuzzleGenre />,
  },
  {
    path: "/games/racing",
    element: <RacingGenre />,
  },
  {
    path: "/games/sports",
    element: <SportsGenre />,
  },
  {
    path: "/platforms",
    element: <Platforms />,
  },
  {
    path: "/stores",
    element: <Stores />,
  },
  {
    path: "/genres",
    element: <Genres />,
  },
  {
    path: "/creators",
    element: <Creators />,
  },
  {
    path: "/tags",
    element: <Tags />,
  },
  {
    path: "/developers",
    element: <Developers />,
  },
  {
    path: "/publishers",
    element: <Publishers />,
    children: [
      {
        path: "/publishers/:name",
        element: <GamesByMonth />,
      },
    ],
  },
  {
    path: "/games/:slug",
    element: <PageParam />,
  },
  {
    path: "/creators/:id",
    element: <CreatorsParam />,
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
