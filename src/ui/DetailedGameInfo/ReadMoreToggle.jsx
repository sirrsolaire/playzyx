import sanitizeHtml from "sanitize-html";
import { useState } from "react";

export const ReadMoreToggle = ({ data }) => {
  const [readMore, setReadMore] = useState(false);

  const gameDescription = sanitizeHtml(data?.description, {
    allowedTags: ["b", "i", "em", "strong", "a"],
    allowedAttributes: {
      a: ["href"],
    },
  });
  const firstHalf = gameDescription.slice(0, 400) + `${!readMore ? "..." : ""}`;
  const secondHalf = gameDescription.slice(gameDescription.length / 4);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">About</h2>
      <p className="mt-1 text-base ">
        {!readMore ? gameDescription.slice(0, 400) : gameDescription}
        {!readMore && "..."}
      </p>
      {gameDescription.length > 400 && (
        <span
          className="cursor-pointer rounded bg-white px-1 text-xs text-black"
          onClick={() => setReadMore(!readMore)}
        >
          {!readMore ? "Read More" : "Show Less"}
        </span>
      )}
    </div>
  );
};
