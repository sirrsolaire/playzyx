import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { LastThirtyGames } from "./pages/Date/LastThirtyGames.jsx";
import { ThisWeekGames } from "./pages/Date/ThisWeekGames.jsx";
import { NextWeekGames } from "./pages/Date/NextWeekGames.jsx";
import { ReleaseCalendar } from "./pages/Date/ReleaseCalendar.jsx";
import { AllGames } from "./pages/AllGames.jsx";
import GamesByMonth from "./ui/Date/GamesByMonth.jsx";
import { ActionGenre } from "./pages/Genres/ActionGenre.jsx";
import { StrategyGenre } from "./pages/Genres/StrategyGenre.jsx";
import { RpgGenre } from "./pages/Genres/RpgGenre.jsx";
import { ShooterGenre } from "./pages/Genres/ShooterGenre.jsx";
import { AdventureGenre } from "./pages/Genres/AdventureGenre.jsx";
import { PuzzleGenre } from "./pages/Genres/PuzzleGenre.jsx";
import { RacingGenre } from "./pages/Genres/RacingGenre.jsx";
import { SportsGenre } from "./pages/Genres/SportsGenre.jsx";
import { Platforms } from "./pages/Browse/Platforms.jsx";
import { Stores } from "./pages/Browse/Stores.jsx";
import { Genres } from "./pages/Browse/Genres.jsx";
import { Creators } from "./pages/Browse/Creators.jsx";
import { Tags } from "./pages/Browse/Tags.jsx";
import { Developers } from "./pages/Browse/Developers.jsx";
import { Publishers } from "./pages/Browse/Publishers.jsx";
import { PageParam } from "./ui/Browse/PageParam.jsx";
import { CreatorsParam } from "./ui/Browse/CreatorsParam.jsx";
import { Reviews } from "./pages/Profile/Reviews.jsx";
import { DetailedGamePage } from "./pages/DetailedGamePage.jsx";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute.jsx";
import Library from "./pages/Profile/Library.jsx";
import Wishlist from "./pages/Profile/Wishlist.jsx";
import ProfileReviews from "./pages/Profile/ProfileReviews.jsx";
import Overview from "./pages/Profile/Overview.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import SettingsProfile from "./pages/Settings/SettingsProfile.jsx";
import SettingsMyPassword from "./pages/Settings/SettingsMyPassword.jsx";
import SettingsMyEmail from "./pages/Settings/SettingsMyEmail.jsx";
import AddReview from "./pages/AddReview.jsx";
import MoreGameDetails from "./pages/ExtendedGameDetails/MoreGameDetails.jsx";
import ScreenShots from "./pages/ExtendedGameDetails/ScreenShots.jsx";
import RedditPosts from "./pages/ExtendedGameDetails/RedditPosts.jsx";
import GameReviews from "./pages/ExtendedGameDetails/GameReviews.jsx";
import MoreAchievements from "./pages/ExtendedGameDetails/MoreAchievements.jsx";

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
        path: "/release-calendar/:month",
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
    path: "/games/details/:slug",
    element: <DetailedGamePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/profile/:username",
        element: <Profile />,
        children: [
          {
            path: "/profile/:username/overview",
            element: <Overview />,
          },
          {
            path: "/profile/:username/library",
            element: <Library />,
          },
          {
            path: "/profile/:username/wishlist",
            element: <Wishlist />,
          },
          {
            path: "/profile/:username/reviews",
            element: <ProfileReviews />,
          },
        ],
      },
      {
        path: "/profile/:username/settings",
        element: <Settings />,
        children: [
          {
            path: "/profile/:username/settings/user",
            element: <SettingsProfile />,
          },
          {
            path: "/profile/:username/settings/my-password",
            element: <SettingsMyPassword />,
          },
          {
            path: "/profile/:username/settings/my-email",
            element: <SettingsMyEmail />,
          },
        ],
      },
      {
        path: "/reviews/create-review/:gameId/:slug",
        element: <AddReview />,
      },
    ],
  },
  {
    path: "/games/:slug/more",
    element: <MoreGameDetails />,
    children: [
      {
        path: "/games/:slug/more/screenshots",
        element: <ScreenShots />,
      },
      {
        path: "/games/:slug/more/reddit-posts",
        element: <RedditPosts />,
      },
      {
        path: "/games/:slug/more/reviews",
        element: <GameReviews />,
      },
      {
        path: "/games/:slug/more/achievements",
        element: <MoreAchievements />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Page Not Found!!</h1>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
