import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cardData = [
  {
    name: "Umesh Sahu",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Shivam Gupta",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Vishal Soni",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Vikas Gupta",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Sachin Bhandari",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Divyansh Sharma",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Shivam Yadav",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Prasant Yadav",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
];

const Carousel02 = () => {
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20 rounded-lg">
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cardData.map((item, index) => {
            return (
              <SwiperSlide key={index} className="rounded-xl">
                <div className="bg-white h-[450px] text-black rounded-xl">
                  <div className=" rounded-t-xl bg-indigo-500 flex justify-center items-center h-56">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-44 w-44 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{item.name}</p>
                    <p>{item.profession}</p>
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel02;
