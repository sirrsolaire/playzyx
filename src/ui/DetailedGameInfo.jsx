import { useParams } from "react-router";
import useDetailedGame from "../hooks/useDetailedGame.js";
import { formatDate } from "../helpers/dateFormat.js";
import { ParentPlatformsIcon } from "./ParentPlatformsIcon.jsx";
import useScreenShots from "../hooks/useScreenShots.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import {
  faChevronRight,
  faComment,
  faEllipsis,
  faGamepad,
  faGift,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { background } from "../helpers/background.js";
import sanitizeHtml from "sanitize-html";
import { useState } from "react";
import useSameSeries from "../hooks/useSameSeries.js";
import {
  faAppStore,
  faGooglePay,
  faItchIo,
  faPlaystation,
  faSteam,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { Gog } from "../assets/svg/Gog.jsx";
import { EpicGames } from "../assets/svg/EpicGames.jsx";
import useAchievements from "../hooks/useAchievements.js";
import useRedditPosts from "../hooks/useRedditPosts.js";
import CommentDropDown from "./CommentDropDown.jsx";
import fakeCommentData from "../Data/fakeComments.json";
import "../assets/styles/antd.css";

export const DetailedGameInfo = () => {
  const [readMore, setReadMore] = useState(false);
  const [replyStates, setReplyStates] = useState({});
  const { slug } = useParams();
  const { data } = useDetailedGame(slug);
  const { data: screenShotsData } = useScreenShots(slug);
  const { data: sameSeries } = useSameSeries(slug);
  const { data: achievementData } = useAchievements(slug);
  const { data: redditData } = useRedditPosts(slug);

  const handleReplyChange = (e, commentId) => {
    const newValue = e.target.value;
    setReplyStates((prevState) => ({
      ...prevState,
      [commentId]: newValue,
    }));
  };

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${data?.background_image})`,
  };

  const commentImage = screenShotsData?.map((item) => item.image);
  const commentContainer = {
    backgroundImage: ` radial-gradient(closest-side, transparent, rgb(21, 21, 21)), url(${commentImage?.at(
      0,
    )})`,
  };

  const gameDescription = sanitizeHtml(data?.description, {
    allowedTags: ["b", "i", "em", "strong", "a"],
    allowedAttributes: {
      a: ["href"],
    },
  });

  const firstHalf =
    gameDescription.slice(0, gameDescription.length / 4) + "...";
  const secondHalf = gameDescription.slice(gameDescription.length / 4);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-4 flex justify-center gap-1 text-[11px] tracking-wider text-info-color tablet:justify-start">
        <span className="cursor-pointer">HOME</span>/
        <span className="cursor-pointer">GAMES</span>/
        <span className="cursor-pointer uppercase">{data?.name}</span>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-4 tablet:justify-start">
        <span className="flex w-fit rounded bg-white px-2 text-sm text-black">
          {formatDate(data?.released)}
        </span>
        <ul className="flex items-center gap-2 text-white">
          {data?.parent_platforms.map((platform, i) => (
            <ParentPlatformsIcon key={i} id={platform.platform.id} />
          ))}
        </ul>
      </div>
      <div className="mt-2 text-center text-xs font-semibold tracking-widest">
        AVERAGE PLAYTIME: {data?.playtime} HOURS
      </div>
      <h2 className="mt-5 text-center text-4xl font-bold">{data?.name}</h2>
      <div className="mt-4 ">
        <Slider {...settings}>
          {screenShotsData?.map((game) => (
            <img
              key={game.id}
              src={game.image}
              alt="Game's ss'"
              className="rounded-lg shadow-md"
            />
          ))}
        </Slider>
      </div>
      <div className="mt-10 flex cursor-pointer items-center justify-between rounded-lg bg-white px-3 py-1 shadow-md">
        <div className="flex flex-col text-black">
          <span className="text-sm font-semibold opacity-50">Add to</span>
          <span className="font-semibold">My games</span>
        </div>
        <FontAwesomeIcon icon={faPlusCircle} className="text-2xl text-black" />
      </div>
      <div className="mt-2 flex cursor-pointer items-center justify-between rounded-lg border-[1px] border-white px-3 py-1 shadow-md">
        <div className="flex flex-col text-white">
          <span className="text-sm font-semibold opacity-50">Add to</span>
          <span className="font-semibold">
            Wishlist{" "}
            <span className="font-normal opacity-50">
              {data?.added_by_status.toplay}
            </span>
          </span>
        </div>
        <FontAwesomeIcon icon={faGift} className="text-2xl text-white" />
      </div>
      <div className="mt-6 text-center tracking-wider">
        <span className="text-xl font-bold ">
          {data?.rating_top === 5 && "Exceptional"}
        </span>
        <div>
          <span className="text-[13px] underline underline-offset-[3px] opacity-50">
            {data?.reviews_count} RATINGS
          </span>
        </div>
      </div>
      <div className="mt-6">
        <span className="mb-2 block text-sm tracking-wide opacity-50">
          Click to rate
        </span>
        <div className="flex h-[50px] ">
          {data?.ratings.map((rating) => (
            <div
              style={{ width: `${rating.percent}%` }}
              key={rating.id}
              className={`h-full ${background(
                rating.id,
              )} relative  cursor-pointer first:rounded-l-md first:after:absolute first:after:bottom-0  first:after:left-0 first:after:h-10 first:after:w-10 last:rounded-r-md`}
            />
          ))}
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {data?.ratings.map((rating) => (
            <li
              key={rating.id}
              className="flex cursor-pointer items-center gap-1 rounded-full px-3 py-1"
            >
              <div
                className={`${background(rating.id)} h-3 w-3 rounded-full`}
              />
              <span className="mr-1 font-semibold">
                {rating.title.charAt(0).toUpperCase() + rating.title.slice(1)}
              </span>
              <span className="opacity-50">{rating.count}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-11 space-y-1.5">
        <div className="rounded-md bg-button-color py-3 text-center">
          <span className="tracking-wide opacity-60">
            Write a review {data?.reviews_count}
          </span>
        </div>
        <div className="rounded-md bg-button-color py-3 text-center">
          <span className="tracking-wide opacity-60">
            <FontAwesomeIcon icon={faComment} className="mr-1" /> Write a
            comment
          </span>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="mt-1 text-sm ">
          {firstHalf}
          {readMore && secondHalf}{" "}
          <span
            className="cursor-pointer rounded bg-white px-1 text-xs text-black"
            onClick={() => setReadMore(!readMore)}
          >
            {!readMore ? "Read More" : "Show Less"}
          </span>
        </p>
      </div>
      {/*//////////////////////////////////////////////////////*/}
      <div className="mt-6">
        <div className="mb-4 grid grid-cols-2">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm opacity-50">Platforms</span>
            <ul className="flex flex-wrap items-center gap-1 text-[14px] text-white">
              {data?.platforms.map((platform, i) => (
                <li
                  key={i}
                  className="underline decoration-gray-9 underline-offset-2"
                >
                  {platform.platform.name}
                  {i < data.platforms.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-10 flex flex-col gap-0.5">
            <span className="text-sm opacity-50">Metascore</span>
            <span className="w-fit rounded border-[1px] border-green-500 px-1 font-semibold text-green-500">
              {data?.metacritic ? data?.metacritic : "Soon"}
            </span>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2">
          <div className="flex  flex-col gap-0.5">
            <span className="text-sm opacity-50">Genres</span>
            <ul className="flex items-center gap-1 text-[14px] text-white">
              {data?.genres.map((genre, i) => (
                <li
                  key={i}
                  className="underline decoration-gray-9 underline-offset-2"
                >
                  {genre.name}
                  {i < data.platforms.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-10 flex flex-col gap-0.5">
            <span className="text-sm opacity-50">Release Date</span>
            <span className="w-fit text-[14px] text-white">
              {formatDate(data?.released)}
            </span>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2">
          <div className="mr-36 flex  flex-col gap-0.5">
            <span className="text-sm opacity-50">Developer</span>
            <ul className="flex items-center gap-1 text-[14px] text-white">
              <li className="underline decoration-gray-9 underline-offset-2">
                {data?.developers.map((game) => game.name)}
              </li>
            </ul>
          </div>
          <div className="ml-10 flex flex-col gap-0.5">
            <span className="text-sm opacity-50">Publisher</span>
            <ul className="flex flex-wrap gap-1">
              {data?.publishers.map((game, i) => (
                <span
                  key={i}
                  className=" w-fit  text-[14px] text-white underline decoration-gray-9 underline-offset-2"
                >
                  {game.name}
                  {i < data?.publishers.length - 1 ? "," : ""}
                </span>
              ))}
            </ul>
          </div>
        </div>

        {data?.esrb_rating && (
          <div className="mb-4 flex items-center justify-between ">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm opacity-50">Age rating</span>
              <ul className="flex items-center gap-1 text-[14px] text-white">
                <li className="underline decoration-gray-9 underline-offset-2">
                  {data?.esrb_rating ? data.esrb_rating.name : null}
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm opacity-50">
              Other games in the series
            </span>
            <ul className="flex flex-wrap items-center gap-1 text-[14px] text-white">
              {sameSeries?.map((game, i) => (
                <li
                  key={i}
                  className="underline decoration-gray-9 underline-offset-2"
                >
                  {game.name}
                  {i < sameSeries.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm opacity-50">Tags</span>
            <ul className="flex flex-wrap items-center gap-1 text-[14px] text-white">
              {data?.tags.map((tag, i) => (
                <li
                  key={i}
                  className="underline decoration-gray-9 underline-offset-2"
                >
                  {tag.name}
                  {i < data?.tags.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {data?.website && (
          <div className="mb-4 flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm opacity-50">Website</span>
              <ul className="flex flex-wrap items-center gap-1 text-[14px] text-white">
                <li className="underline decoration-gray-9 underline-offset-2">
                  {data?.website}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/*///////////////////////////////////////////////////*/}
      <div className="mt-6">
        <h2 className="text-xl opacity-50">Where to buy</h2>
        <ul className="mt-2 flex gap-2 overflow-x-scroll">
          {data?.stores.map((store) => (
            <li
              key={store.store.id}
              className="flex items-center gap-2 rounded-md bg-button-color px-3 py-2 text-sm"
            >
              <span className="whitespace-nowrap opacity-50">
                {store.store.name}
              </span>
              {store.store.id === 3 && (
                <FontAwesomeIcon
                  icon={faPlaystation}
                  className="text-xl opacity-50"
                />
              )}
              {store.store.id === 5 && <Gog />}
              {store.store.id === 1 && (
                <FontAwesomeIcon
                  icon={faSteam}
                  className="text-xl opacity-50"
                />
              )}
              {store.store.id === 2 && (
                <FontAwesomeIcon icon={faXbox} className="text-xl opacity-50" />
              )}
              {store.store.id === 4 && (
                <FontAwesomeIcon
                  icon={faAppStore}
                  className="text-xl opacity-50"
                />
              )}
              {store.store.id === 6 && (
                <FontAwesomeIcon
                  icon={faGamepad}
                  className="text-xl opacity-50"
                />
              )}
              {store.store.id === 7 && (
                <FontAwesomeIcon icon={faXbox} className="text-xl opacity-50" />
              )}
              {store.store.id === 8 && (
                <FontAwesomeIcon
                  icon={faGooglePay}
                  className="text-xl opacity-50"
                />
              )}
              {store.store.id === 9 && (
                <FontAwesomeIcon
                  icon={faItchIo}
                  className="text-xl opacity-50"
                />
              )}
              {store.store.id === 11 && <EpicGames />}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="truncate text-2xl font-semibold underline underline-offset-2">
            {data?.name} achievements
          </h2>
          <span className="whitespace-nowrap text-sm underline underline-offset-2 opacity-40">
            {data?.achievements_count} achievements
          </span>
        </div>

        <ul className="mt-4">
          {achievementData?.map((item) => (
            <li
              key={item.id}
              className="flex gap-4 border-b-[1px] border-button-color py-4"
            >
              <img
                src={item.image}
                alt=""
                className="h-[48px] w-[48px] rounded-md"
              />
              <div className="flex flex-col">
                <span className="text-xs">{item.percent}%</span>
                <span className="mb-1 text-sm font-semibold">{item.name}</span>
                <p className="text-xs text-info-color">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-show-more text-info-color transition-colors duration-200 hover:bg-white hover:first:text-black">
            <FontAwesomeIcon icon={faEllipsis} className="text-2xl " />
          </div>
          <div className="flex flex-col gap-1">
            <span className="cursor-pointer text-sm font-semibold transition-all duration-200 hover:underline hover:opacity-50">
              view all achievements
            </span>
            <span className="text-xs text-info-color">
              {data?.achievements_count} items
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex  items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="w-64 cursor-pointer truncate text-2xl font-semibold underline underline-offset-4">
              {data?.name} posts
            </h2>
            <img
              src="/redditlogo.png"
              alt="Reddit logo with letter"
              className="h-5"
            />
          </div>
          <span className="cursor-pointer text-xs text-info-color underline underline-offset-2 transition-all duration-200 hover:text-white">
            {data?.reddit_count} posts
          </span>
        </div>

        <ul>
          {redditData?.map((post) => (
            <li
              key={post.id}
              className="flex  items-center justify-between border-b-[1px] border-button-color py-4 last:border-b-transparent"
            >
              <div>
                <h3 className="mb-1 font-semibold">
                  {post.name.slice(0, 60) + "..."}
                </h3>
                <div className="flex gap-2 text-xs font-bold text-info-color">
                  <span>{formatDate(post.created)}</span>
                  <span>{post.username.slice(3)}</span>
                </div>
              </div>
              {post.image ? (
                <img
                  src={post.image}
                  alt=""
                  className="ml-4 mr-2 min-h-[40px] min-w-[70px]"
                />
              ) : null}
            </li>
          ))}
        </ul>
        <button className="w-full rounded-md bg-button-color py-2 transition-all duration-200 hover:bg-white hover:text-black">
          View All
        </button>
      </div>

      <div className="relative mt-10">
        <h2 className="text-center text-2xl">
          {data?.name} reviews and comments
        </h2>
        <div className="mt-3 flex justify-center gap-2 ">
          <span className="tab">Reviews</span>
        </div>
        <div className="mt-2 flex justify-center">
          <CommentDropDown />
        </div>

        <div className="mt-4 cursor-pointer rounded-xl bg-[rgba(0,0,0,.5)] transition-all duration-200 hover:bg-white hover:text-black">
          <div className="flex flex-col items-center justify-center gap-2 py-4 text-xl">
            <FontAwesomeIcon icon={faPlus} />
            <span>Write a review</span>
          </div>
        </div>

        <div className="mt-2 space-y-3">
          {fakeCommentData?.map((comment, i) => (
            <div key={i} className="rounded-xl bg-[rgba(0,0,0,.3)] py-4">
              <h3 className="mb-2 px-5 text-lg font-semibold underline decoration-gray-9 underline-offset-2">
                {comment.rate}
              </h3>
              <p className="mb-2 px-5 text-sm  opacity-70 ">
                {comment.comment.length > 500
                  ? comment.comment.slice(0, 500) + "..."
                  : comment.comment}
              </p>
              <ul className="mb-3 space-y-2 px-5 text-[11px]  uppercase ">
                {comment.tags?.map((tag, i) => (
                  <li
                    key={i}
                    className="w-fit rounded-full bg-tag-color px-3 py-1 tracking-widest"
                  >
                    «{tag.tag}»
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3  px-5 ">
                <img
                  src={comment.user_image}
                  alt={`${comment.username}'s image`}
                  className="h-[40px] w-[40px] rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-xs">{comment.username}</span>
                  <span className="text-xs text-info-color">
                    {formatDate(comment.created)}
                  </span>
                </div>
              </div>
              <div className=" mt-6 border-t-[1px] border-border-color pt-4">
                <form className="w-full px-5">
                  <input
                    type="text"
                    className="mb-2 h-12 w-full rounded-md bg-game-info pl-5"
                    placeholder="Write a reply ..."
                    onChange={(e) => handleReplyChange(e, comment.id)}
                    value={replyStates[comment.id]}
                  />
                  {replyStates[comment.id]?.length > 0 && (
                    <button className="h-12 w-full cursor-pointer bg-white font-bold text-black">
                      SEND
                    </button>
                  )}
                </form>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 -z-50 h-[100%] w-[100%] blur-sm">
          <div className="h-[300px]">
            <div
              style={commentContainer}
              className="z-10 h-[300px] bg-transparent bg-cover bg-top "
            ></div>
          </div>
        </div>
      </div>

      {/*//////////////////////////////*/}
      {/*//////////////////////////////*/}
      <div className="absolute left-0 top-0 -z-50 h-[100%] w-[100%]">
        <div className="h-[300px]">
          <div
            style={containerStyle}
            className="z-10 h-[300px] bg-transparent bg-cover bg-top "
          ></div>
        </div>
      </div>
    </>
  );
};

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      onClick={onClick}
      className="className absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-3xl text-info-color "
    />
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      onClick={onClick}
      className="className absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-3xl text-info-color"
    />
  );
}
