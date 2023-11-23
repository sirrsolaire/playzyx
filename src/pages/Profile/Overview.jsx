import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderNextArrow from "../../ui/SlickButtons/SliderNextArrow.jsx";
import SliderPrevArrow from "../../ui/SlickButtons/SliderPrevArrow.jsx";
import FavoriteGame from "../../ui/Profile/FavoriteGame.jsx";
import { useGetFavourite } from "../../hooks/favouriteGames/useGetFavourite.js";
import { Spinner } from "../../ui/Loading/Spinner.jsx";
import { useGetAllGames } from "../../hooks/library/useGetAllGames.js";
import { useGetWishlist } from "../../hooks/wishlist/useGetWishlist.js";
import { useGetReviews } from "../../hooks/reviews/useGetReviews.js";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  initialSlide: 0,
  arrows: true,
  nextArrow: <SliderNextArrow />,
  prevArrow: <SliderPrevArrow />,
  responsive: [
    {
      breakpoint: 2400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
        infinite: true,
      },
    },

    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const Overview = () => {
  const { favouriteLoading, favouriteGames } = useGetFavourite();
  const { games } = useGetAllGames();
  const { wishlistedGames } = useGetWishlist();
  const { data: user } = useGetUser();
  const { id } = user;
  const { reviews } = useGetReviews();
  const gamesInLibrary = games?.length;
  const gamesInWishList = wishlistedGames?.length;
  const firstGame = favouriteGames?.at(0);
  const secondGame = favouriteGames?.at(1);
  const thirdGame = favouriteGames?.at(2);
  const forthGame = favouriteGames?.at(3);
  const fifthGame = favouriteGames?.at(4);
  const sixthGame = favouriteGames?.at(5);

  let filteredCount = reviews;
  if (reviews) {
    if (reviews) {
      filteredCount = reviews.filter((review) => review.account_id === id);
    }
  }

  if (favouriteLoading) return <Spinner />;

  return (
    <div className="">
      <h2 className="mb-4 text-center text-2xl font-semibold tablet:text-left tablet:text-4xl">
        Favourite Games
      </h2>
      <div className="mx-auto max-w-[400px] tablet:mx-0 tablet:max-w-full">
        <Slider {...settings}>
          <FavoriteGame game={firstGame} />
          <FavoriteGame game={secondGame} />
          <FavoriteGame game={thirdGame} />
          <FavoriteGame game={forthGame} />
          <FavoriteGame game={fifthGame} />
          <FavoriteGame game={sixthGame} />
        </Slider>
      </div>
      <div className="mx-auto mt-20 max-w-[400px] divide-y-[1px] divide-second-color px-4 tablet:grid tablet:max-w-full tablet:grid-cols-3 tablet:divide-x-[1px] tablet:divide-y-0 tablet:text-center">
        <div className="space-x-2 py-4">
          <span className="text-5xl font-bold text-purple-400">
            {gamesInLibrary}
          </span>
          <span className="text-2xl font-semibold">games</span>
        </div>
        <div className="space-x-2 py-4">
          <span className="text-5xl font-bold text-pink-500">
            {filteredCount ? filteredCount.length : "0"}
          </span>
          <span className="text-2xl font-semibold">reviews</span>
        </div>
        <div className="space-x-2 py-4">
          <span className="text-5xl font-bold text-yellow-600">
            {gamesInWishList}
          </span>
          <span className="text-2xl font-semibold">wishlist</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
