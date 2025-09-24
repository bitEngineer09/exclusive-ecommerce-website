import React, { useContext, useState } from 'react';
import { productDataContext } from '../../store/ProductContext';
import { IoStar } from "react-icons/io5";

const Review = ({ reviews, id }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [comment, setComment] = useState("");

    const [visibleReviews, setVisibleReviews] = useState(6); // default: show 6 reviews

    const { submitReview } = useContext(productDataContext);

    const showMoreReviews = () => {
        setVisibleReviews(reviews.length); // Show all on click
        // Alternatively, for batch loading:
        // setVisibleReviews(prev => prev + 6);
    };

    return (
        <div className="text-white">
            <h2 className="text-[2rem] mb-[1rem]">Customer <span className='text-rose-700'>Reviews</span></h2>

            {/* Review form */}
            <div className="mb-[1rem]">
                <div className='flex gap-[1rem]'>
                    <label className="block mb-2">Your Rating:</label>
                    <div className="flex space-x-1 text-2xl cursor-pointer">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <IoStar
                                key={star}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(null)}
                                className={
                                    (hover || rating) >= star
                                        ? "text-yellow-400"
                                        : "text-gray-500"
                                }
                            />
                        ))}
                    </div>
                </div>

                <textarea
                    placeholder="Write a review..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full h-[8rem] p-[0.7rem] border border-zinc-700 rounded-[0.5rem] mt-[1rem] text-white outline-none"
                />

                <button
                    onClick={() => submitReview(rating, comment, id)}
                    className="bg-amber-600 text-white px-[1.4rem] py-[0.6rem] rounded-[0.5rem] mt-[0.6rem] hover:bg-emerald-700"
                >
                    Submit Review
                </button>
            </div>

            {/* Display existing reviews */}
            <div className="space-y-4 mt-[2rem]">
                {reviews?.length > 0 ? (
                    <>
                        {reviews.slice(0, visibleReviews).map((rev, i) => (
                            <div key={i} className="p-[0.7rem] rounded-[0.5rem] bg-zinc-900 text-white">
                                <div className="flex items-center justify-between">
                                    <span className="flex text-yellow-400">
                                        {Array.from({ length: rev.rating }, (_, i) => (
                                            <IoStar key={i} />
                                        ))}
                                    </span>
                                    <span className="text-sm text-gray-400">
                                        {new Date(rev.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="mt-2">{rev.comment}</p>
                            </div>
                        ))}

                        {/* Show More Button */}
                        {visibleReviews < reviews.length && (
                            <button
                                onClick={showMoreReviews}
                                className="text-zinc-400 underline underline-offset-4 mt-2 hover:text-emerald-400"
                            >
                                See more reviews...
                            </button>
                        )}
                    </>
                ) : (
                    <p>No reviews yet. Be the first to review!</p>
                )}
            </div>
        </div>
    );
};

export default Review;
