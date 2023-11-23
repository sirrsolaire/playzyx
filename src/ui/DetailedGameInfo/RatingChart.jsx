import { background } from "../../helpers/background.js";

export const RatingChart = ({ data }) => {
  return (
    <div className="mx-auto mt-6 max-w-[500px] tablet:mx-0 ">
      <div className="flex h-[50px] ">
        {data?.ratings.map((rating) => (
          <div
            style={{ width: `${rating.percent}%` }}
            key={rating.id}
            className={`h-full ${background(
              rating.id,
            )} relative   first:rounded-l-md first:after:absolute first:after:bottom-0  first:after:left-0 first:after:h-10 first:after:w-10 last:rounded-r-md`}
          />
        ))}
      </div>
      <ul className="mt-3 flex flex-wrap gap-1">
        {data?.ratings.map((rating) => (
          <li
            key={rating.id}
            className="flex  items-center gap-1 rounded-full px-3 py-1"
          >
            <div className={`${background(rating.id)} h-3 w-3 rounded-full`} />
            <span className="mr-1 font-semibold">
              {rating.title.charAt(0).toUpperCase() + rating.title.slice(1)}
            </span>
            <span className="opacity-50">{rating.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
