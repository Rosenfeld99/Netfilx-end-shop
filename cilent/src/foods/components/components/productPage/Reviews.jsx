import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const Reviews = ({reviews,classNames}) => {
  return (
    <div className="mt-6">
      <h3 className="sr-only">דירוג</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                reviews.average > rating ? "text-gray-300" : "text-gray-600",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only text-gray-400">{reviews.average} מתוך 5 כוכבים</p>
        <a
          href={reviews.href}
          className="ml-3 text-sm font-medium text-gray-400 hover:text-red-600"
        >
          {reviews.totalCount} דירוגים
        </a>
      </div>
    </div>
  );
};

export default Reviews;
