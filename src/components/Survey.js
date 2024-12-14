import React, { useState } from "react";
import { Star } from "lucide-react";
import { Routes, useNavigate } from "react-router-dom";
import { use } from "react";

function Survey() {
  const navigate = useNavigate();
  const [satisfaction, setSatisfaction] = useState("");
  const [reasons, setReasons] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleReasonChange = (reason) => {
    if (reasons.includes(reason)) {
      setReasons(reasons.filter((r) => r !== reason));
    } else {
      setReasons([...reasons, reason]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      satisfaction,
      reasons,
      rating,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#40E0D0] py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Company X Survey
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Satisfaction Question */}
          <div className="space-y-4">
            <label className="block text-gray-700 text-lg font-medium mb-4">
              How satisfied were you with your overall experience?
            </label>
            <div className="space-y-2">
              {[
                "Very satisfied",
                "Satisfied",
                "Neutral",
                "Dissatisfied",
                "Very dissatisfied",
              ].map((option) => (
                <label key={option} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="satisfaction"
                    value={option}
                    checked={satisfaction === option}
                    onChange={(e) => setSatisfaction(e.target.value)}
                    className="form-radio h-5 w-5 text-[#40E0D0]"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Reasons Question */}
          <div className="space-y-4">
            <label className="block text-gray-700 text-lg font-medium mb-4">
              What are the reasons for leaving the company? (Select all that
              apply)
            </label>
            <div className="space-y-2">
              {[
                "Lack of career growth opportunities",
                "Work-life balance issues",
                "Better salary",
                "Desire to pursue further education",
                "Relocation due to family or personal reasons",
              ].map((reason) => (
                <label key={reason} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={reasons.includes(reason)}
                    onChange={() => handleReasonChange(reason)}
                    className="form-checkbox h-5 w-5 text-[#40E0D0]"
                  />
                  <span className="text-gray-700">{reason}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating Question */}
          <div className="space-y-4">
            <label className="block text-gray-700 text-lg font-medium mb-4">
              How would you rate your overall experience at Company X?
            </label>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none"
                  aria-label={`Rate ${star} stars`}
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredRating || rating)
                        ? "fill-[#40E0D0] text-[#40E0D0]"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#40E0D0] text-white px-8 py-2 rounded-md hover:bg-[#3BC7B9] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Survey;
