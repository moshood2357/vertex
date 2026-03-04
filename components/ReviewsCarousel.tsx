import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Badge } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Toyin Owo",
    initial: "T",
    time: "a year ago",
    review:
      "AKOTECH Dynamics transformed our online presence, and we couldn’t be happier!",
  },
  {
    name: "Salami Quayum",
    initial: "S",
    time: "a year ago",
    review:
      "They elevated our brand’s online reputation through exceptional branding.",
  },
  {
    name: "Afolabi Oluwaseun",
    initial: "A",
    time: "a year ago",
    review: "Their technical expertise in web development is outstanding.",
  },
  {
    name: "John Smith",
    initial: "J",
    time: "2 years ago",
    review: "Very professional team and great communication throughout.",
  },
];

export default function GoogleReviewsSection() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const cardsPerView = 3;
  const maxIndex = reviews.length - cardsPerView;

  // ✅ AUTO SLIDE
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="text-center mb-16">
        <Badge className="text-4xl mb-4  text-[#C6A75E] hover:bg-[#C6A75E] hover:text-white transition cursor-default    ">
          Client Reviews
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="lg:w-1/3">
          <h2 className="text-xl font-semibold mb-2">
            Vertex Prime Digital | Web design & development company in Lagos,
            Nigeria
          </h2>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-orange-500 font-semibold text-lg">5.0</span>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 text-orange-500 fill-orange-500"
              />
            ))}
          </div>

          {/* <p className="text-gray-600 text-sm mb-1">Based on 71 reviews</p> */}

          <p className="text-gray-500 text-sm mb-4">
            powered by{" "}
            <span className="text-blue-500 font-semibold">Google</span>
          </p>

          <a
            href="https://g.page/r/CYRhmdn-GOJOEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Review us on Google
          </a>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div
          className="lg:w-2/3 relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Sliding Track */}
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${index * (100 / cardsPerView)}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[calc(100%/3-16px)] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.time}</p>
                    </div>
                  </div>
                  <span className="text-blue-500 font-bold">G</span>
                </div>

                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-orange-500 fill-orange-500"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm text-gray-700">{review.review}</p>
              </div>
            ))}
          </motion.div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:shadow-lg transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:shadow-lg transition"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                  i === index ? "bg-orange-500 w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
