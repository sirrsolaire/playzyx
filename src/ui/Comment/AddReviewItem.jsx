import { useNavigate, useParams } from "react-router";
import useDetailedGame from "../../hooks/generals/useDetailedGame.js";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { usePostReview } from "../../hooks/reviews/usePostReview.js";
import { rateList } from "../../Data/reviewTags.js";
import { useQueryClient } from "@tanstack/react-query";
import {
  errorNotify,
  generalError,
  successNotify,
} from "../../helpers/toaster/toast.js";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import SmallSpinner from "../Loading/SmallSpinner.jsx";

const AddReviewItem = () => {
  const [rate, setRate] = useState(null);
  const [reviewTags, setReviewTag] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const { slug } = useParams();
  const { data } = useDetailedGame(slug);
  const { data: user } = useGetUser();
  const { reviewMutate, reviewPostLoading } = usePostReview();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedTags = reviewTags.map((tag) => ({ name: tag }));
    if (rate) {
      reviewMutate(
        {
          id: data?.id,
          user_name: user?.user_metadata.username,
          user_avatar: user?.user_metadata.avatar,
          game_name: data?.name,
          game_slug: slug,
          review: reviewText,
          rate,
          tags: formattedTags,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["reviews"]);
            successNotify(`You have submitted a review for ${data?.name}`);
            navigate(`/games/${slug}/more/reviews`, { replace: true });
          },
          onError: (err) => {
            generalError(err.message);
          },
        },
      );
    } else {
      errorNotify("You have to rate the game before submitting!");
    }
  };

  useEffect(() => {
    setReviewTag([]);
  }, [rate]);

  const rateTags = {
    exceptional: rateList[0].tags,
    recommended: rateList[1].tags,
    meh: rateList[2].tags,
    skip: rateList[3].tags,
  };

  const handleRate = (rate) => {
    setRate(rate);
  };

  const handleTag = (tag) => {
    const tagIndex = reviewTags.includes(tag);
    if (!tagIndex) {
      setReviewTag([...reviewTags, tag]);
    } else {
      const updatedTags = reviewTags.filter((t) => t !== tag);
      setReviewTag(updatedTags);
    }
  };

  const handleReviewText = (e) => {
    setReviewText(e.target.value);
  };

  const handleClass = (name) => {
    if (name === "Exceptional") {
      return "border-pink-700";
    } else if (name === "Recommended") {
      return "border-blue-400";
    } else if (name === "Meh") {
      return "border-yellow-500";
    } else {
      return "border-red-600";
    }
  };

  const isTagSelected = (tagName) => {
    return reviewTags.includes(tagName);
  };

  const handleSetTags = () => {
    const selectedTags = rateTags[rate] || [];
    return selectedTags.map((tag) => (
      <li
        onClick={() => handleTag(tag.name)}
        key={tag.id}
        className={`durationAll cursor-pointer rounded-full  px-4 py-2 text-[11px] uppercase tracking-widest  hover:bg-white hover:text-black ${
          isTagSelected(tag.name)
            ? "bg-white text-black"
            : "bg-[hsla(0,0%,100%,.05)] text-white"
        }`}
      >
        «{tag.name}»
      </li>
    ));
  };

  if (data) {
    const { name, background_image } = data;

    const containerStyle = {
      backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${background_image})`,
    };
    return (
      <>
        <div className="relative mx-auto flex max-w-[500px] flex-col items-center gap-8 rounded-lg px-5 py-20 tablet:mx-0 tablet:min-w-[900px] tablet:bg-game-info tablet:px-8 tablet:py-8">
          <div className="flex flex-col items-center gap-4 tablet:items-start tablet:self-start">
            <h2 className="text-xl font-semibold text-[#f1951c] tablet:text-2xl">
              Review the game
            </h2>
            <h3 className="text-3xl tablet:text-4xl">{name}</h3>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 tablet:self-start">
            {rateList.map((item, i) => (
              <li
                key={i}
                onClick={() => handleRate(item.rate)}
                className={`durationAll flex cursor-pointer items-center gap-2 rounded-full border-[2px] border-info-color px-3 py-1 hover:bg-white hover:text-black tablet:py-2 ${handleClass(
                  item.name,
                )} ${rate === item.rate && "bg-white text-black"}`}
              >
                <span className="text-xl">
                  <Icon icon={item.icon} />
                </span>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
          <form
            className="flex w-full flex-col gap-2 text-info-color"
            onSubmit={handleSubmit}
          >
            <label>Review text</label>
            <textarea
              value={reviewText}
              onChange={handleReviewText}
              placeholder="Write a review"
              disabled={reviewPostLoading}
              className="min-h-[200px] w-full rounded-lg bg-[rgba(0,0,0,.8)] px-2 py-2 text-white placeholder:text-sm placeholder:opacity-40 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            />
            <ul className="mt-4 flex flex-wrap gap-2">{handleSetTags()}</ul>

            <button
              disabled={reviewPostLoading}
              className="inputButton mt-4 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {reviewPostLoading ? <SmallSpinner color="black" /> : "Submit"}
            </button>
          </form>

          <Icon
            onClick={() => navigate(-1)}
            icon="octicon:x-12"
            className="absolute right-3 top-3 cursor-pointer rounded-full bg-game-info px-2 py-2 text-5xl transition-all duration-200 hover:bg-white hover:text-black tablet:-top-16 tablet:right-0"
          />
        </div>
        <div className="absolute left-0 top-0 -z-50 h-[100%] w-[100%]">
          <div className="h-[700px]">
            <div
              style={containerStyle}
              className="z-10 h-[700px] bg-transparent bg-cover bg-top "
            ></div>
          </div>
        </div>
      </>
    );
  }
};

export default AddReviewItem;
